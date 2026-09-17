# 🌋 seminarios.git

`GitHub Pages` -> [seminarios.slippi.org](https://seminarios.slippi.org)

## 📜 README.md

This is a WIP repository of lore for the Seminarios campaign (`pf2e`). Pending collaboration with game master.

Interactive webpages will be hosted via [GitHub Pages](https://pages.github.com/).

## 🛠️ Running it

The site is static: `index.html` + `app.js` + `styles.css`. Entries are stored through
`seminarios-api` ([slippi-org/seminarios-api](https://github.com/slippi-org/seminarios-api));
the design is in `docs/homelab/seminarios/PLAN.md` in `leependu/gitility`.

- **With a token** (the enrollment link, `https://seminarios.slippi.org/#t=XXXX-XXXX-XXXX-XXXX`,
  or the *Token* button in the top bar) the app syncs with the API: writes land in the
  browser at once, queue in an outbox, and flush in the background; other players' entries
  arrive within about 20 s. Killing the wifi mid-session loses nothing.
- **Without a token** it runs standalone against `localStorage`, as it always did.

Local development:

```bash
python3 -m http.server 8899            # serve this directory
# in seminarios-api:  SEM_DB_PATH=./data/dev.sqlite SEM_CORS_ORIGINS=http://localhost:8899 \
#                       uv run uvicorn app.main:app --port 9286
```

On `localhost` the app talks to `http://localhost:9286/api/v1` by default. To point any
copy at another API: `localStorage.setItem('seminarios-api', 'https://…/api/v1')` and reload.
