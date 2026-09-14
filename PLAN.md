# Seminarios Backend — Implementation Plan

**Status:** approved architecture, not yet built.
**Audience:** Claude Code sessions working on `seminarios`, `seminarios-api`, and `gitility`.
**Supersedes:** `backend-options.md` (that doc explored the option space; this one commits).

---

## 1. What we're building

`seminarios.slippi.org` is an interactive map of the Free City of Seminarios for a
Pathfinder 2E campaign. Today it stores all events and notes in `localStorage`, single
player, with manual JSON export/import for sharing.

We're replacing the storage layer with a small authenticated API on the Raspberry Pi
(`ag-rpi5`), reachable from the public internet via a Cloudflare Tunnel, with nightly
plaintext snapshots committed to a private git repo.

Two goals, in priority order:

1. **Memorialize the campaign permanently.** Every event and fight, attributed, durable,
   in a format that outlives the app. This is why snapshots are plaintext JSONL in git,
   not just a database file.
2. **Be the bones of a larger worldbuilding tool.** Seminarios is one island city-state in
   a world under a multi-century cold war. The schema carries `scope` and `visibility`
   from day one so the app can grow without a migration.

**Non-goal for v1:** real-time sync, markdown/rich text, image uploads, a places/regions
table, public read access. See §11.

---

## 2. Architecture

```
  Player's browser
        │
        │  GET/POST https://seminarios-api.slippi.org   (Bearer token, CORS)
        ▼
  Cloudflare edge  ── rate limiting, bot rules, TLS
        │
        │  outbound-only tunnel (no open ports, no dynamic DNS)
        ▼
  ag-rpi5 : cloudflared container
        │
        ▼
  seminarios-api container (FastAPI + sqlite3)
        │
        ▼
  ./seminarios/data/seminarios.sqlite        (bind mount, WAL)
        │
        ├── nightly: sqlite3 .backup  ──►  backup.sh 3-2-1 tiers (USB / xps / rclone)
        └── nightly: export.py        ──►  seminarios-data.git  (private, JSONL)

  Static frontend stays on GitHub Pages at https://seminarios.slippi.org (unchanged host).
```

The frontend and API are different origins on purpose. The site stays a dumb static
GitHub Pages deploy; the API is the only stateful thing.

---

## 3. Decisions already made (don't relitigate)

| Decision | Rationale |
|---|---|
| SQLite, not a JSON file | Transactions. Two players logging during the same fight must not lose a write. `.backup` gives consistent online snapshots — no `compose stop` blip. |
| Bind mount, not named volume | Host-side `git` and `sqlite3` need direct access. Matches the Grocy pattern in `backup.sh` (3-line tar) rather than the Gramps pattern (`docker inspect` + throwaway alpine). |
| Container, not host process | Drops into the existing master `docker-compose.yml`, gets restart policy, health check, and the same operational muscle memory as every other service. |
| Cloudflare Tunnel | No open ports, no home IP in DNS, edge rate limiting. Critically: survives the SB→LA move with zero reconfiguration, because it's an outbound connection. |
| Bearer token auth *in addition to* the tunnel | A tunnel is transport, not authentication. Once the hostname exists, anyone who learns it can call the API. |
| Tokens hashed at rest | A DB snapshot in a git repo must not be a set of live credentials. |
| Server assigns the author | The current "Playing as" dropdown is honor-system. Author comes from the token, server-side, always. |
| `visibility` + `scope` columns from day one | Retrofitting `visibility` means revisiting every read path *and* the git export. Cheap now, expensive later. |
| `seminarios-data` is private | Full snapshots include GM-only rows. A public memorial export is a separate filtered artifact (§10, Phase 5). |
| Soft delete everywhere | Nothing in a memorial is ever hard-deleted. `deleted_at` + git history. |

---

## 4. Repos

```
slippi-org/seminarios          existing, public   frontend, GitHub Pages
slippi-org/seminarios-api      new,      public   FastAPI app + Dockerfile + manage.py
slippi-org/seminarios-data     new,      PRIVATE  snapshot target, deploy key on rpi
leependu/gitility              existing, private  compose block, Caddyfile, scripts, cron
```

`seminarios-api` can be public: no secrets live in it. Ship `.env.example` in the style
of `scripts/backup/secrets.env.example`.

**Nothing about deployment lives in `seminarios-api`.** The compose service block, the
Caddy route, the tunnel config, and the export/backup scripts all belong in `gitility`
next to everything else. Resist creating a fourth repo.

---

## 5. Data model

```sql
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE players (
  id           TEXT PRIMARY KEY,               -- 'plr_' + 12 hex
  display_name TEXT NOT NULL,
  role         TEXT NOT NULL DEFAULT 'player'
                 CHECK (role IN ('player','gm','admin')),
  token_hash   TEXT NOT NULL UNIQUE,           -- sha256 hex of the normalized token
  active       INTEGER NOT NULL DEFAULT 1,
  created_at   TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE characters (
  id        TEXT PRIMARY KEY,                  -- 'chr_' + 12 hex
  player_id TEXT NOT NULL REFERENCES players(id),
  name      TEXT NOT NULL,                     -- 'Gondgieaux', 'Xghchli', 'Vex the potion merchant'
  kind      TEXT NOT NULL DEFAULT 'pc' CHECK (kind IN ('pc','npc')),
  active    INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE events (
  id           TEXT PRIMARY KEY,               -- client-generated, e.g. 'evt_' + ULID
  scope        TEXT NOT NULL DEFAULT 'seminarios',
  place_id     TEXT NOT NULL,                  -- '12_market', matches the SVG district ids
  day          TEXT,                           -- 'day-3' or a calendar key
  time_of_day  TEXT CHECK (time_of_day IN
                 ('morning','midday','afternoon','evening','night')),
  text         TEXT NOT NULL,
  author_id    TEXT NOT NULL REFERENCES players(id),     -- from the token, never the body
  character_id TEXT REFERENCES characters(id),           -- from the body, validated as owned
  visibility   TEXT NOT NULL DEFAULT 'party'
                 CHECK (visibility IN ('gm','party','public')),
  created_at   TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT NOT NULL DEFAULT (datetime('now')),
  deleted_at   TEXT
);
CREATE INDEX idx_events_updated ON events(updated_at);
CREATE INDEX idx_events_place   ON events(scope, place_id);

CREATE TABLE notes (
  id         TEXT PRIMARY KEY,
  scope      TEXT NOT NULL DEFAULT 'seminarios',
  place_id   TEXT NOT NULL,
  text       TEXT NOT NULL,
  author_id  TEXT NOT NULL REFERENCES players(id),
  visibility TEXT NOT NULL DEFAULT 'party'
               CHECK (visibility IN ('gm','party','public')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  deleted_at TEXT
);
CREATE INDEX idx_notes_updated ON notes(updated_at);
CREATE INDEX idx_notes_place   ON notes(scope, place_id);
```

**Note on notes:** the old model was one shared text blob per district. The new model is
rows, so the GM can keep a `gm`-visibility note on a district alongside the party's
shared one. The UI renders all visible notes for a district.

**Timestamps are server-assigned.** Clients never set `created_at` / `updated_at`. Store
ISO-8601 UTC strings (`datetime('now')` gives UTC) and render local in the browser.

**IDs are client-generated** so that offline writes are idempotent on replay: a retried
`POST` with an existing id returns the existing row (200) rather than creating a
duplicate.

---

## 6. API contract

Base: `https://seminarios-api.slippi.org/api/v1`
Auth: `Authorization: Bearer <token>` on everything except `/healthz`.

### Tokens

- 16 chars of Crockford base32, no `I`/`L`/`O`/`U`. Displayed grouped: `K7RM-9XQ2-4TBV-8HNC`.
  ~80 bits — typeable, readable aloud, unambiguous.
- Normalize before hashing: strip dashes/whitespace, uppercase, map `I/L→1`, `O→0`.
- Store `sha256(normalized)`. Look up by the hash column (indexed, unique).
- **Enrollment is a magic link**, sent over WhatsApp:
  `https://seminarios.slippi.org/#t=K7RM-9XQ2-4TBV-8HNC`
  The page reads `location.hash`, persists the token, then immediately
  `history.replaceState()` to strip it. The `#` fragment is never sent to a server, so
  the token never lands in GitHub Pages or Cloudflare logs. Manual entry is the fallback.

### Endpoints

| Method | Path | Notes |
|---|---|---|
| `GET` | `/healthz` | unauthenticated; DB ping. Used by the compose health check. |
| `GET` | `/me` | `{player, characters[], role, server_time}`. Also the token-validity check on page load. |
| `GET` | `/state?since=<iso>&scope=seminarios` | delta sync. Returns `{events[], notes[], server_time}` where `updated_at > since`, **including tombstones** (`deleted_at` set). Omit `since` for a full load. |
| `POST` | `/events` | body carries client-generated `id`. Conflict on existing id → 200 with the existing row. |
| `PATCH` | `/events/{id}` | author or `gm`/`admin` only. |
| `DELETE` | `/events/{id}` | soft delete; author or `gm`/`admin`. |
| `POST` `PATCH` `DELETE` | `/notes`, `/notes/{id}` | same shape, same rules. |

### Read filtering

| Caller | Sees |
|---|---|
| `role='gm'` or `'admin'` | everything |
| `role='player'` | `visibility IN ('party','public')` |
| unauthenticated | nothing in v1 (`SEM_PUBLIC_READ=false`); when flipped on, `visibility='public'` only |

`SEM_PUBLIC_READ` exists as an env flag from the start so opening up the map later is a
config change, not a code change.

### Write rules

- `author_id` is **always** taken from the token. If a request body contains an author
  field, ignore it silently.
- `character_id` must belong to the authenticated player, unless the caller is `gm`
  (the GM owns all NPCs).
- Players may set `visibility` to `party` or `public`. Only `gm`/`admin` may set `gm`.

### Limits (all enforced server-side)

| Limit | Value |
|---|---|
| request body | 64 KB |
| `events.text` | 4,000 chars |
| `notes.text` | 20,000 chars |
| writes per token | 60/min, 500/day |
| failed auth per IP | 10/min → 429 |

Mirror the rate limits with a Cloudflare rule at the edge so abuse never reaches the Pi.
Send an ntfy alert if total row count crosses a threshold (say 50k) — that's a bug
signal, not a capacity signal.

### XSS

The server stores text as **plain text** and never interprets it. The client renders with
`textContent`, never `innerHTML`. This is the actual defense against pasted `<script>` or
obfuscated links — not input filtering. If markdown is ever added, sanitize at render.

### Player management is a CLI, not an API

No admin HTTP surface. On the Pi:

```bash
docker exec -it seminarios-api python manage.py add-player "Bill" --role player
# → prints the token and magic link ONCE, stores only the hash

docker exec -it seminarios-api python manage.py add-character <player_id> "Gondgieaux"
docker exec -it seminarios-api python manage.py list-players
docker exec -it seminarios-api python manage.py rotate-token <player_id>
docker exec -it seminarios-api python manage.py deactivate <player_id>
```

---

## 7. Frontend changes (`slippi-org/seminarios`)

1. **Extract a `store` module.** Everything that currently touches `localStorage` moves
   behind one interface: `getState()`, `addEvent()`, `updateEvent()`, `deleteEvent()`,
   `addNote()`, `updateNote()`, `deleteNote()`. Two implementations:
   - `LocalStore` — today's behavior, no token, still works standalone.
   - `RemoteStore` — talks to the API, uses `localStorage` as a cache and an outbox.

   Do this refactor **first, as its own commit**, with behavior unchanged. It's the only
   part of the frontend work that's risky.

2. **Token bootstrap.** Read `#t=`, persist, strip from the URL. On load, `GET /me`. No
   token or a rejected token → read-only mode with an "enter your token" affordance.

3. **Replace the character dropdown's meaning.** It stays on screen, but it is now
   populated from `/me`'s `characters[]` and only affects `character_id`. Authorship is
   the token's job.

4. **Visibility control** on the event/note form. Players: Party / Public. GM: adds
   GM-only. Show the current value on each entry (a small lock glyph for `gm`).

5. **Offline-first writes.** Write to the local cache immediately, enqueue the mutation
   in an outbox, flush to the API in the background. Retry on reconnect. This matters:
   sessions happen at a table with bad wifi, and you'll be reviewing lore on Metrolink.
   A failed sync must never lose a logged event.

6. **Pseudo-realtime.** Poll `/state?since=<last server_time>` every 20s while the tab is
   visible, plus on window focus and after each successful write. No websockets.

7. **Conflict policy.** Last-write-wins on `updated_at`, and the losing text is retained
   in the outbox log so nothing is silently destroyed.

---

## 8. Deployment

### Compose (add to the master `docker-compose.yml` in `gitility`)

```yaml
  seminarios-api:
    build: ./seminarios-api          # Phase 1; swap to ghcr.io image in Phase 5
    container_name: seminarios-api
    restart: unless-stopped
    environment:
      TZ: America/Los_Angeles
      SEM_DB_PATH: /data/seminarios.sqlite
      SEM_CORS_ORIGINS: https://seminarios.slippi.org
      SEM_PUBLIC_READ: "false"
      SEM_SITE_BASE_URL: https://seminarios.slippi.org   # for magic-link printing
    volumes:
      - ./seminarios/data:/data
    ports:
      - "9286:8000"
    security_opt:
      - no-new-privileges:true
    init: true
    healthcheck:
      test: ["CMD", "python", "-c",
             "import urllib.request,sys; sys.exit(0 if urllib.request.urlopen('http://127.0.0.1:8000/healthz').status==200 else 1)"]
      interval: 30s
      timeout: 5s
      retries: 5
      start_period: 15s

  cloudflared:
    image: cloudflare/cloudflared:latest
    container_name: cloudflared
    restart: unless-stopped
    command: tunnel --no-autoupdate run
    environment:
      TUNNEL_TOKEN: ${CLOUDFLARED_TUNNEL_TOKEN}
    depends_on:
      - seminarios-api
```

Use a **remote-managed (token) tunnel**: one env var, ingress configured in the Zero
Trust dashboard, no credentials JSON on disk to gitignore. Ingress rule:

```
seminarios-api.slippi.org  →  http://seminarios-api:8000
```

(`cloudflared` is on the default compose bridge network, so it resolves the service by
name. Caddy is `network_mode: host` and is not in the path.)

The local-config alternative (`config.yml` + credentials file + `cloudflared tunnel route
dns`) is more gitility-shaped if you'd rather version the ingress rules. Either works;
pick one and don't mix.

### Caddy (optional, for an internal hostname)

Not required for the tunnel. Add it if you want to reach the API from the tailnet without
going out to Cloudflare:

```
seminarios-api.aggis.org {
    tls { dns cloudflare {env.CLOUDFLARE_API_TOKEN} }
    reverse_proxy localhost:9286
}
```

…plus a Pi-hole local A record pointing `seminarios-api.aggis.org` at `192.168.0.110`,
same pattern as the other internal services. Two front doors, one container.

### CORS

`Access-Control-Allow-Origin: https://seminarios.slippi.org` exactly — not `*`, since the
API is authenticated. Allow `Authorization` in `Allow-Headers`; handle the `OPTIONS`
preflight. Add `http://localhost:PORT` to `SEM_CORS_ORIGINS` for local frontend dev.

---

## 9. Snapshots and backup

### Nightly export → `seminarios-data.git`

Script lives in `gitility` at `scripts/seminarios/export.py`. Runs before `backup.sh` in
the same cron window.

Output, all **deterministic** (sorted keys, stable row order) so diffs are meaningful and
commits aren't whole-file churn:

```
seminarios-data/
  events.jsonl      one JSON object per line, keys sorted, ordered by (created_at, id)
  notes.jsonl       same
  players.json      id, display_name, role, created_at — NEVER token_hash
  characters.json
  SNAPSHOT.md       row counts, date range, export timestamp
```

Commit only when the diff is non-empty:

```bash
git -C "$DATA_REPO" add -A
git -C "$DATA_REPO" diff --cached --quiet || \
  git -C "$DATA_REPO" commit -q -m "snapshot $(date +%F): ${N_EVENTS} events"
git -C "$DATA_REPO" push -q
```

Auth via a dedicated deploy key (`~/.ssh/seminarios-data` + a `Host` alias in
`~/.ssh/config`), write access, nothing else.

**The full export includes `gm` rows. The repo is private. Do not change either
independently.**

### `backup.sh` integration

Add a section after OpenClaw. **No `compose stop` needed** — `.backup` is a consistent
online snapshot, which is the whole reason for choosing SQLite:

```bash
echo "== Seminarios =="
SEM_DB="$COMPOSE_DIR/seminarios/data/seminarios.sqlite"
if [ -f "$SEM_DB" ]; then
    out="seminarios-$TS.sqlite"
    if sqlite3 "$SEM_DB" ".backup '$STAGE/$out'"; then
        echo "  wrote $out ($(du -h "$STAGE/$out" | cut -f1))"
    else
        err "Seminarios: sqlite .backup failed"
    fi
    # also stage the plaintext export so the tiers carry a readable copy
    tar --zstd -C "$DATA_REPO" -cf "$STAGE/seminarios-export-$TS.tar.zst" . 2>/dev/null \
        || warn "Seminarios: export tarball failed"
fi
```

Add `sqlite3` to the required-tools loop at the top of `backup.sh` (`sudo apt install -y
sqlite3`), so a missing binary fails fast with a clear message instead of a confusing
downstream error.

Result: the campaign exists in five places — the Pi's SD card, USB, xps, encrypted
rclone, and GitHub. The git copy is the one that's readable in twenty years.

---

## 10. Phases

Sized so each is one focused Claude Code session.

**Phase 0 — DNS migration** *(in flight, independent of everything else)*
slippi.org → Cloudflare. Add the missing `CNAME seminarios → slippi-org.github.io`
(DNS only). Verify DNSSEC is off at Squarespace before swapping nameservers. Confirm
GitHub Pages "Enforce HTTPS" survives. Do this while the Pi is still physically stable.

**Phase 1 — API skeleton**
`seminarios-api` repo. FastAPI + stdlib `sqlite3`, no ORM. Schema from §5, auth from §6,
`manage.py` CLI, Dockerfile, `.env.example`, health check. Test over the tailnet with
`curl` against `192.168.0.110:9286`. Not yet public.
*Done when:* you can create a player, get a token, and CRUD an event over the tailnet
with visibility filtering working for both roles.

**Phase 2 — Tunnel**
Create the tunnel, add the ingress rule, confirm `seminarios-api.slippi.org` answers
`/healthz` from a phone on cellular. Add the Cloudflare rate-limit rule. Verify CORS from
the real origin.
*Done when:* a `curl` from outside your network authenticates and reads.

**Phase 3 — Frontend**
The `store` refactor (own commit, no behavior change), then `RemoteStore`, token
bootstrap, character select from `/me`, visibility control, polling, outbox.
*Done when:* two browsers on two networks see each other's events within 20s, and
killing the API mid-session doesn't lose a write.

**Phase 4 — Durability**
`export.py`, `seminarios-data` repo + deploy key, cron entry, `backup.sh` section, ntfy
on failure.
*Done when:* a snapshot commit lands unattended overnight and the ntfy message is green.

**Phase 5 — After the move**
GHCR image + Actions arm64 build so the Pi does `compose pull` like everything else.
Optional public memorial export (filtered to `visibility='public'`) to a second, public
repo. Then the fun part: data-driven places, the wider world beyond Seminarios.

---

## 11. Explicitly out of scope for v1

- **Websockets / true real-time.** 20s polling is enough for turn-based play.
- **A `places` table.** District ids are currently baked into the SVG — that coupling,
  not the database, is the real v2 project. `scope` is the seam that makes it possible
  later.
- **Markdown / rich text.** Plain text only, because plain text is XSS-proof by
  construction.
- **Image uploads.** Different storage problem, different backup profile.
- **Cloudflare Access.** A good optional second lock later if reads ever need gating
  without touching app code. It gives you a session, not an author, so it doesn't
  replace tokens.
- **Migrating existing `localStorage` data.** There isn't any worth keeping. If that
  changes, it's a `POST /import` that dedupes on event id.

---

## 12. Open questions

1. **Calendar.** Events carry `day` as a free-ish string, and the site already has a
   reckoning/calendar concept (`CAL` table in the script, `Y.6320 / 2262 A.I.C. / 190
   R.C.`). Decide whether `day` stays opaque to the server (recommended for v1) or
   becomes structured. Opaque means the calendar can change without a migration.
2. **GM note vs. party note surfacing.** Rows support it; the UI needs a decision about
   how multiple notes per district are displayed and ordered.
3. **Who gets `role='gm'`.** Presumably just the GM, but `admin` (you) should be distinct
   so you can manage players without seeing GM secrets by accident — or decide that's
   silly and collapse them.
