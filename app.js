(function() {
    'use strict';

    // ── District Data ──
    // Lore descriptions can be fleshed out over time; this is the seed data
    const DISTRICTS = {
        '01_temple': {
            name: 'Temple District',
            number: '01',
            desc: 'The spiritual heart of Seminarios. Grand temples and shrines line its avenues, dedicated to the many gods worshipped by the city\'s diverse populace.',
            details: 'Tier: Upper | Character: Religious, solemn | Notable: Grand temples, clergy residences, sacred gardens'
        },
        '02_guard-hq': {
            name: 'Guard Headquarters',
            number: '02',
            desc: 'The fortified seat of Seminarios\' city guard. Barracks, armories, and the office of the Watch Commander occupy this heavily patrolled district.',
            details: 'Tier: Upper | Character: Martial, orderly | Notable: Main barracks, armory, holding cells, parade ground'
        },
        '03_college': {
            name: 'College District',
            number: '03',
            desc: 'Halls of learning for the practical arts and lesser scholarly pursuits. Less prestigious than the University but bustling with students and tutors.',
            details: 'Tier: Upper | Character: Academic, lively | Notable: College halls, student housing, bookshops'
        },
        '04_university': {
            name: 'University District',
            number: '04',
            desc: 'The prestigious seat of higher learning in Seminarios. Scholars and mages pursue arcane and mundane knowledge within its venerable walls.',
            details: 'Tier: Upper | Character: Academic, arcane | Notable: University spire, great library, lecture halls'
        },
        '05_aeroport': {
            name: 'Aeroport',
            number: '05',
            desc: 'The city\'s aerial gateway. Airships dock at towering mooring spires, and the district thrums with travelers, cargo handlers, and sky-sailors.',
            details: 'Tier: Upper | Character: Transit, cosmopolitan | Notable: Mooring spires, customs house, sky-sailor taverns'
        },
        '06_arts': {
            name: 'Arts District',
            number: '06',
            desc: 'A colorful quarter of galleries, theatres, and studios. Artists, performers, and their patrons fill the streets with creativity and spectacle.',
            details: 'Tier: Upper | Character: Creative, bohemian | Notable: Grand theatre, galleries, artist studios'
        },
        '07_hot-springs': {
            name: 'Hot Springs District',
            number: '07',
            desc: 'Natural geothermal springs feed elaborate bathhouses and spas. A place of relaxation, healing, and quiet conversation.',
            details: 'Tier: Upper | Character: Relaxed, therapeutic | Notable: Public baths, private spas, healing houses'
        },
        '08_financial': {
            name: 'Financial District',
            number: '08',
            desc: 'Banks, trading houses, and money-changers dominate this prosperous quarter. The beating economic heart of Seminarios.',
            details: 'Tier: Upper | Character: Wealthy, busy | Notable: Central bank, trading floor, merchant guild hall'
        },
        '09_cathedral': {
            name: 'Cathedral District',
            number: '09',
            desc: 'Dominated by the Great Cathedral, this district serves as the center of organized faith and ecclesiastical authority in the city.',
            details: 'Tier: Upper | Character: Sacred, grand | Notable: Great Cathedral, bishop\'s palace, holy archives'
        },
        '10_laboratory': {
            name: 'Laboratory District',
            number: '10',
            desc: 'Alchemists, artificers, and experimental researchers work behind reinforced walls. Occasional explosions are considered normal.',
            details: 'Tier: Middle | Character: Experimental, hazardous | Notable: Alchemist labs, artificer workshops, blast walls'
        },
        '11_mining': {
            name: 'Mining District',
            number: '11',
            desc: 'The entrance to Seminarios\' mineral wealth. Mine shafts descend into the earth, and soot-covered workers haul ore to the surface.',
            details: 'Tier: Lower | Character: Industrial, gritty | Notable: Mine entrances, ore processing, miner housing'
        },
        '12_market': {
            name: 'Market District',
            number: '12',
            desc: 'The great bazaar of Seminarios. Stalls, shops, and hawkers offer everything from exotic spices to enchanted trinkets.',
            details: 'Tier: Middle | Character: Commercial, chaotic | Notable: Grand bazaar, specialty shops, food stalls'
        },
        '13_old-seminarios': {
            name: 'Old Seminarios',
            number: '13',
            desc: 'The ancient core of the city. Narrow winding streets and crumbling architecture speak to centuries of history layered upon itself.',
            details: 'Tier: Middle | Character: Historic, cramped | Notable: Ancient ruins, old city walls, historic landmarks'
        },
        '14_graveyard': {
            name: 'Graveyard District',
            number: '14',
            desc: 'The city of the dead. Mausoleums, crypts, and memorial gardens stretch across this somber district. Grave-tenders keep watch day and night.',
            details: 'Tier: Lower | Character: Somber, quiet | Notable: Grand mausoleum, crypts, memorial gardens, ossuary'
        },
        '15_timber': {
            name: 'Timber District',
            number: '15',
            desc: 'Lumber yards and woodworkers define this district. The scent of fresh-cut timber permeates the air as craftsmen shape wood for the city\'s needs.',
            details: 'Tier: Lower | Character: Industrial, aromatic | Notable: Lumber yards, carpentry shops, sawmills'
        },
        '16_livestock': {
            name: 'Livestock District',
            number: '16',
            desc: 'Pens, pastures, and slaughterhouses occupy this pungent district. Ranchers drive herds through its muddy lanes.',
            details: 'Tier: Lower | Character: Agricultural, noisy | Notable: Stockyards, auction house, tanneries'
        },
        '17_refinery': {
            name: 'Refinery District',
            number: '17',
            desc: 'Raw ores and materials are processed here in great smelters and refineries. Smoke rises constantly from its chimneys.',
            details: 'Tier: Lower | Character: Industrial, smoky | Notable: Smelters, refineries, slag heaps'
        },
        '18_factory': {
            name: 'Factory District',
            number: '18',
            desc: 'Workshops and manufactories produce goods for the city and beyond. The rhythmic clang of hammers and hiss of steam define its soundscape.',
            details: 'Tier: Lower | Character: Industrial, loud | Notable: Factories, assembly halls, worker tenements'
        },
        '19_ash-heap': {
            name: 'Ash Heap',
            number: '19',
            desc: 'The city\'s dumping ground. Refuse, slag, and the detritus of industry accumulate here. Scavengers pick through the waste for anything of value.',
            details: 'Tier: Lowest | Character: Desolate, toxic | Notable: Waste dumps, scavenger camps, recycling works'
        },
        '20_tenements': {
            name: 'Tenements',
            number: '20',
            desc: 'Cramped, towering housing blocks shelter the city\'s working poor. The district is dense, noisy, and alive with the struggle of daily survival.',
            details: 'Tier: Lower | Character: Crowded, poor | Notable: Housing blocks, soup kitchens, street markets'
        },
        '21_shipwrights': {
            name: 'Shipwrights District',
            number: '21',
            desc: 'The sound of hammers on hulls echoes through this waterfront district. Master shipbuilders construct vessels for trade and war.',
            details: 'Tier: Middle | Character: Maritime, skilled | Notable: Dry docks, shipyards, sail lofts'
        },
        '22_north-harbor': {
            name: 'North Harbor',
            number: '22',
            desc: 'The primary commercial port of Seminarios. Great merchant vessels dock here, and warehouses line the waterfront.',
            details: 'Tier: Middle | Character: Maritime, commercial | Notable: Main docks, warehouses, customs office, harbor master'
        },
        '23_red-light': {
            name: 'Red Light District',
            number: '23',
            desc: 'Seminarios\' quarter of illicit pleasures and dubious dealings. Taverns, gambling dens, and houses of entertainment operate under a thin veneer of respectability.',
            details: 'Tier: Lower | Character: Vice, nocturnal | Notable: Gambling dens, taverns, entertainment houses'
        },
        '24_east-harbor': {
            name: 'East Harbor',
            number: '24',
            desc: 'A secondary port handling overflow traffic and smaller vessels. Fishermen and coastal traders favor its less regulated docks.',
            details: 'Tier: Middle | Character: Maritime, casual | Notable: Fishing docks, small traders, net menders'
        },
        '25_mongers': {
            name: 'Mongers District',
            number: '25',
            desc: 'Fishmongers, butchers, and provision sellers hawk their wares in this noisy, fragrant district. The freshest catch lands here daily.',
            details: 'Tier: Lower | Character: Commercial, pungent | Notable: Fish market, butcher row, cold storage'
        },
        '26_south-harbor': {
            name: 'South Harbor',
            number: '26',
            desc: 'A quieter harbor district, home to naval vessels and official maritime operations.',
            details: 'Tier: Middle | Character: Maritime, military | Notable: Naval docks, coast guard, lighthouse'
        },
        '27_garden': {
            name: 'Garden District',
            number: '27',
            desc: 'Parks, botanical gardens, and tree-lined promenades make this the green lung of Seminarios. A favored retreat for all classes.',
            details: 'Tier: Upper | Character: Verdant, peaceful | Notable: Botanical garden, public parks, greenhouses'
        },
        '28_west-harbor': {
            name: 'West Harbor',
            number: '28',
            desc: 'The westernmost port, often used for heavy cargo and industrial shipping. Cranes and loading equipment dominate the skyline.',
            details: 'Tier: Lower | Character: Maritime, industrial | Notable: Cargo cranes, bulk storage, longshoreman hall'
        }
    };

    // ── Seminarian Calendar ──
    // 16 months of 16 days (a 256-day year), 8-day weeks, two weeks to a month.
    // Because 16 is a multiple of 8, every month opens on the first day of the week.
    const CAL = {
        daysPerMonth: 16,
        monthsPerYear: 16,
        daysPerWeek: 8,
        months: [
            'Naoweihan', 'Nuweihan', 'Niweihan', 'Nohweihan',   // Winter
            'Gaoweihan', 'Guweihan', 'Giweihan', 'Gohweihan',   // Spring
            'Saoweihan', 'Suweihan', 'Siweihan', 'Sohweihan',   // Summer
            'Waoweihan', 'Wuweihan', 'Wiweihan', 'Wohweihan'    // Fall
        ],
        seasons: [
            { name: 'Winter', color: '#8fa3bf', tint: '#191c22' },
            { name: 'Spring', color: '#8fbf8f', tint: '#182018' },
            { name: 'Summer', color: '#d9b26a', tint: '#242019' },
            { name: 'Fall',   color: '#c98a5a', tint: '#231a15' }
        ],
        // Days are named for Aeronian kings. Four of the eight are still unnamed —
        // fill in `name` on those entries (and reorder freely) once the table decides.
        weekdays: [
            { name: 'Saelionday',  abbr: 'Sae' },
            { name: 'Aurethday',   abbr: 'Aur' },
            { name: 'Thalieraday', abbr: 'Tha' },
            { name: 'Maevraday',   abbr: 'Mae' },
            { name: null, abbr: 'V' },
            { name: null, abbr: 'VI' },
            { name: null, abbr: 'VII' },
            { name: null, abbr: 'VIII' }
        ],
        // Year reckonings, abbreviated as on the map's cartouche ("Y.6320 (2262 A.I.C., 190 R.C.)").
        // `offset` is subtracted from the common count to get that era's year.
        eras: {
            common:        { label: 'Common Reckoning',       abbr: '',   offset: 0 },
            aeronian:      { label: 'Aeronian Imperial',      abbr: 'A.I.C.', offset: 6329 - 2271 },
            revolutionary: { label: 'Revolutionary (Terran)', abbr: 'R.C.',   offset: 6329 - 199 }
        },
        timesOfDay: ['morning', 'midday', 'afternoon', 'evening', 'night']
    };
    CAL.daysPerYear = CAL.daysPerMonth * CAL.monthsPerYear;
    const YEARS_PER_BLOCK = 16;
    const ORDINALS = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth'];

    // Dates are stored as one integer: days since 1 Naoweihan of year 1 (common reckoning).
    function toAbs(year, month, day) {
        return (year - 1) * CAL.daysPerYear + (month - 1) * CAL.daysPerMonth + (day - 1);
    }
    function fromAbs(abs) {
        const year = Math.floor(abs / CAL.daysPerYear) + 1;
        const rem = abs - (year - 1) * CAL.daysPerYear;
        const month = Math.floor(rem / CAL.daysPerMonth) + 1;
        const day = rem % CAL.daysPerMonth + 1;
        return { year, month, day, weekday: (day - 1) % CAL.daysPerWeek, season: Math.floor((month - 1) / 4) };
    }
    function monthAbbr(m) { return CAL.months[m - 1].replace(/weihan$/, ''); }
    function weekdayName(i) { const w = CAL.weekdays[i]; return w.name || `${ORDINALS[i]} Day`; }
    function eraYear(year, eraKey) { return year - CAL.eras[eraKey].offset; }
    function formatYear(year, eraKey) {
        const era = CAL.eras[eraKey];
        return era.abbr ? `${era.abbr} ${eraYear(year, eraKey)}` : String(eraYear(year, eraKey));
    }
    function otherEras(year) {
        return Object.keys(CAL.eras)
            .filter(k => k !== DATA.settings.era)
            .map(k => formatYear(year, k))
            .join(' · ');
    }
    function formatDate(abs) {
        const d = fromAbs(abs);
        return `${weekdayName(d.weekday)}, ${d.day} ${CAL.months[d.month - 1]} ${formatYear(d.year, DATA.settings.era)}`;
    }
    function formatDateShort(abs) {
        const d = fromAbs(abs);
        return `${CAL.weekdays[d.weekday].abbr} ${d.day} ${monthAbbr(d.month)} ${formatYear(d.year, DATA.settings.era)}`;
    }
    function yearsBlockStart(year) { return Math.floor((year - 1) / YEARS_PER_BLOCK) * YEARS_PER_BLOCK + 1; }

    // ── State ──
    let currentDistrict = null;
    let currentTab = 'events';
    let selectedDay = null;    // absolute day the app is filtered to, or null for all days
    let calView = 'month';     // 'month' | 'year' | 'years'
    let calCursor = 0;         // absolute day anchoring the visible month / year / 16-year block

    // ── Model ──
    // Rows are kept in the API's shape (PLAN.md §5) so LocalStore and RemoteStore feed
    // the same renderers. `day` is an absolute day count the server never interprets.
    const SCOPE = 'seminarios';
    const DEFAULT_START = toAbs(6329, 5, 1);   // 1 Gaoweihan 6329, the first day of spring
    const DEFAULT_SETTINGS = { era: 'common', campaignStart: DEFAULT_START, today: null };
    const GM_ROLES = ['gm', 'admin'];
    const VISIBILITIES = { party: 'Party', public: 'Public', gm: 'GM only' };
    const DEFAULT_COLOR = '#888';
    const EVENT_FIELDS = ['id', 'scope', 'place_id', 'place', 'day', 'time_of_day', 'text', 'character_id', 'visibility'];
    const NOTE_FIELDS = ['id', 'scope', 'place_id', 'text', 'visibility'];

    function randHex(n) {
        const b = new Uint8Array(n / 2);
        crypto.getRandomValues(b);
        return Array.from(b, x => x.toString(16).padStart(2, '0')).join('');
    }
    // Client-generated, time-ordered ids: a retried POST with the same id is idempotent.
    function newId(prefix) { return prefix + Date.now().toString(16).padStart(12, '0') + randHex(8); }
    // Server timestamps look like "2026-09-17 08:12:11.123" (UTC, no Z). Local rows use the
    // same shape so string order stays chronological until the server's copy replaces them.
    function nowStamp() { return new Date().toISOString().replace('T', ' ').replace('Z', ''); }
    function pick(obj, keys) {
        const out = {};
        for (const k of keys) if (obj[k] !== undefined) out[k] = obj[k];
        return out;
    }

    function normalizeSettings(raw, fallback) {
        const s = Object.assign({}, DEFAULT_SETTINGS, fallback || {}, raw || {});
        if (!CAL.eras[s.era]) s.era = 'common';
        if (typeof s.campaignStart !== 'number') s.campaignStart = DEFAULT_START;
        if (typeof s.today !== 'number') s.today = null;
        return s;
    }
    // Accepts today's rows or the pre-API localStorage shape (district/date/time/character,
    // notes as a per-district text map) and returns rows. Legacy "day-N" strings are dated
    // against the campaign start, as before.
    function normalizeData(data, fallbackSettings, authorId) {
        data = data && typeof data === 'object' ? data : {};
        const settings = normalizeSettings(data.settings, fallbackSettings);
        const events = [];
        for (const e of Array.isArray(data.events) ? data.events : []) {
            if (!e || typeof e !== 'object') continue;
            let day = typeof e.day === 'number' ? e.day : typeof e.date === 'number' ? e.date : null;
            if (day === null && typeof e.day === 'string') {
                const n = parseInt(e.day.split('-')[1], 10);
                day = settings.campaignStart + (isNaN(n) ? 0 : n - 1);
            }
            if (typeof day !== 'number' || typeof e.text !== 'string') continue;
            const stamp = e.created_at || (typeof e.timestamp === 'number'
                ? new Date(e.timestamp).toISOString().replace('T', ' ').replace('Z', '') : nowStamp());
            const time = e.time_of_day || e.time;
            events.push({
                id: String(e.id || newId('evt_')),
                scope: e.scope || SCOPE,
                place_id: e.place_id !== undefined ? e.place_id : (e.district || null),
                place: e.place || null,
                day,
                time_of_day: CAL.timesOfDay.includes(time) ? time : CAL.timesOfDay[0],
                text: e.text,
                author_id: e.author_id || authorId,
                character_id: e.character_id !== undefined ? e.character_id : (e.character || null),
                visibility: VISIBILITIES[e.visibility] ? e.visibility : 'party',
                created_at: stamp,
                updated_at: e.updated_at || stamp,
                deleted_at: null
            });
        }
        let notes = [];
        if (Array.isArray(data.notes)) {
            notes = data.notes.filter(n => n && typeof n.text === 'string' && n.id).map(n => Object.assign({
                scope: SCOPE, place_id: null, author_id: authorId, visibility: 'party',
                created_at: nowStamp(), updated_at: nowStamp(), deleted_at: null
            }, n));
        } else if (data.notes && typeof data.notes === 'object') {
            for (const [district, text] of Object.entries(data.notes)) {
                if (typeof text !== 'string' || !text.trim()) continue;
                const stamp = nowStamp();
                notes.push({ id: newId('note_'), scope: SCOPE, place_id: district, text, author_id: authorId,
                             visibility: 'party', created_at: stamp, updated_at: stamp, deleted_at: null });
            }
        }
        return { events, notes, settings };
    }

    // ── Stores ──
    // Everything that touches persistence lives behind this interface (PLAN.md §7):
    //   state            the live {events, notes, settings} the renderers read
    //   session          {player, role, characters} for this browser, or null while connecting
    //   roster           {players, characters} for naming everyone else's entries
    //   addEvent/updateEvent/deleteEvent, addNote/updateNote/deleteNote, updateSettings
    //   onChange(fn)     called after data arrives from elsewhere
    //   conflicts()      writes that never landed, newest last; clearConflicts() forgets them
    //   status()         {mode, online, pending, auth, ...} for the top-bar indicator
    //   start()          kick off sync
    // Mutations are synchronous: they change `state` at once and, remotely, queue the write.

    const STORAGE_KEY = 'seminarios-explorer';
    const TOKEN_KEY = 'seminarios-token';
    const CACHE_KEY = 'seminarios-cache';
    const OUTBOX_KEY = 'seminarios-outbox';
    const CONFLICT_KEY = 'seminarios-conflicts';
    const POLL_MS = 20000;
    const REQUEST_TIMEOUT_MS = 15000;
    const API_BASE = localStorage.getItem('seminarios-api')
        || (['localhost', '127.0.0.1'].includes(location.hostname)
            ? 'http://localhost:9286/api/v1'
            : 'https://seminarios-api.slippi.org/api/v1');

    function readJson(key, fallback) {
        try { const v = JSON.parse(localStorage.getItem(key)); return v === null || v === undefined ? fallback : v; }
        catch { return fallback; }
    }
    function writeJson(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

    // LocalStore: today's behavior. localStorage only, no token, works standalone.
    // The browser is its own GM so every control is available.
    const LOCAL_PLAYER = { id: 'local', display_name: 'You', active: 1 };
    const LOCAL_CHARACTERS = [
        { id: 'gondgieaux', player_id: 'local', name: 'Gondgieaux', kind: 'pc', color: '#c9b882', active: 1 },
        { id: 'xghchli', player_id: 'local', name: 'Xghchli', kind: 'pc', color: '#7ca7bf', active: 1 },
        { id: 'gm', player_id: 'local', name: 'GM', kind: 'npc', color: '#a33', active: 1 }
    ];
    function LocalStore() {
        const state = normalizeData(readJson(STORAGE_KEY, null), null, LOCAL_PLAYER.id);
        const persist = () => writeJson(STORAGE_KEY, state);
        const find = (list, id) => list.find(r => r.id === id);
        return {
            mode: 'local',
            state,
            session: { player: LOCAL_PLAYER, role: 'gm', characters: LOCAL_CHARACTERS },
            roster: { players: [LOCAL_PLAYER], characters: LOCAL_CHARACTERS },
            status() { return { mode: 'local', online: true, pending: 0, auth: 'ok' }; },
            onChange() {},
            conflicts: () => [],        // nothing to refuse it and nobody to race
            clearConflicts() {},
            start() { persist(); },
            addEvent(row) { state.events.push(row); persist(); },
            updateEvent(id, patch) { const r = find(state.events, id); if (r) { Object.assign(r, patch, { updated_at: nowStamp() }); persist(); } },
            deleteEvent(id) { state.events = state.events.filter(e => e.id !== id); persist(); },
            addNote(row) { state.notes.push(row); persist(); },
            updateNote(id, patch) { const r = find(state.notes, id); if (r) { Object.assign(r, patch, { updated_at: nowStamp() }); persist(); } },
            deleteNote(id) { state.notes = state.notes.filter(n => n.id !== id); persist(); },
            updateSettings(patch) { Object.assign(state.settings, patch); persist(); }
        };
    }

    // RemoteStore: the API is the truth; localStorage is a cache and an outbox.
    // Writes land in the cache at once and queue in the outbox, which flushes in the
    // background and survives reloads, so a dead wifi link never loses a logged event.
    function RemoteStore(token) {
        const cache = readJson(CACHE_KEY, {});
        const state = {
            events: Array.isArray(cache.events) ? cache.events : [],
            notes: Array.isArray(cache.notes) ? cache.notes : [],
            settings: normalizeSettings(cache.settings)
        };
        let serverTime = cache.server_time || null;
        // The first pull of each load asks for everything, not just the delta. Deletes
        // travel as tombstones, so a row removed on the server by hand -- or one that
        // stopped being visible to this player -- would otherwise sit in this cache
        // forever. A full pull prunes it; after that, deltas as usual.
        let firstPull = true;
        let outbox = readJson(OUTBOX_KEY, []);
        const listeners = [];
        const status = {
            mode: 'remote', online: navigator.onLine, pending: outbox.length, syncing: false,
            auth: 'unknown', lastSync: cache.last_sync || null, error: null
        };
        const self = {
            mode: 'remote',
            state,
            session: cache.session || null,
            roster: cache.roster || { players: [], characters: [] },
            status: () => status,
            onChange(fn) { listeners.push(fn); },
            conflicts: () => readJson(CONFLICT_KEY, []),
            clearConflicts() { writeJson(CONFLICT_KEY, []); notify(); }
        };

        const notify = () => listeners.forEach(fn => fn());
        function persist() {
            writeJson(CACHE_KEY, {
                events: state.events, notes: state.notes, settings: state.settings,
                server_time: serverTime, session: self.session, roster: self.roster, last_sync: status.lastSync
            });
        }
        function persistOutbox() { writeJson(OUTBOX_KEY, outbox); status.pending = outbox.length; }
        // The losing side of a conflict, or a write the server refused, is kept here so
        // nothing typed at the table is silently destroyed (PLAN.md §7.8).
        function logConflict(entry) {
            const log = readJson(CONFLICT_KEY, []);
            log.push(Object.assign({ at: nowStamp() }, entry));
            writeJson(CONFLICT_KEY, log.slice(-200));
        }

        async function api(method, path, body) {
            const ctl = new AbortController();
            const timer = setTimeout(() => ctl.abort(), REQUEST_TIMEOUT_MS);
            try {
                const headers = { 'Authorization': 'Bearer ' + token };
                if (body) headers['Content-Type'] = 'application/json';
                const res = await fetch(API_BASE + path, {
                    method, headers, body: body ? JSON.stringify(body) : undefined, signal: ctl.signal
                });
                let data = null;
                try { data = await res.json(); } catch { /* no body */ }
                return { status: res.status, data };
            } finally { clearTimeout(timer); }
        }

        function pendingFor(table, id) { return outbox.find(o => o.table === table && o.id === id && !o.inflight); }
        function applyRow(table, row) {
            const list = state[table];
            const i = list.findIndex(r => r.id === row.id);
            if (row.deleted_at) { if (i !== -1) list.splice(i, 1); return; }
            // A change queued behind an in-flight write must not be shown as reverted.
            const pending = pendingFor(table, row.id);
            if (pending && pending.op === 'update') row = Object.assign({}, row, pending.body);
            if (i === -1) list.push(row); else list[i] = row;
        }
        function mergeRows(table, rows, full) {
            const pendingIds = new Set(outbox.filter(o => o.table === table).map(o => o.id));
            const byId = new Map(state[table].map(r => [r.id, r]));
            if (full) for (const id of [...byId.keys()]) if (!pendingIds.has(id)) byId.delete(id);
            for (const r of rows) {
                if (pendingIds.has(r.id)) {
                    // Ours is still queued and will win; keep theirs where it can be found.
                    const ours = byId.get(r.id);
                    if (ours && ours.text !== r.text && !r.deleted_at) logConflict({ table, id: r.id, theirs: r.text, ours: ours.text });
                    continue;
                }
                if (r.deleted_at) byId.delete(r.id); else byId.set(r.id, r);
            }
            state[table] = [...byId.values()];
        }

        // Outbox entries coalesce by (table, id) so a burst of edits to one note is one PATCH.
        function enqueue(item) {
            const i = outbox.findIndex(o => o.table === item.table && o.id === item.id && !o.inflight);
            if (i === -1) {
                outbox.push(item);
            } else {
                const prev = outbox[i];
                if (item.table === 'settings' || (item.op === 'update' && prev.op !== 'delete')) {
                    prev.body = Object.assign({}, prev.body, item.body);
                } else if (item.op === 'delete') {
                    if (prev.op === 'add') outbox.splice(i, 1); else outbox[i] = item;
                } else {
                    outbox[i] = item;
                }
            }
            persistOutbox();
            notify();   // the indicator shows the pending write at once
            setTimeout(tick, 0);
        }
        function send(item) {
            const { table, op, id, body } = item;
            if (table === 'settings') return api('PUT', '/settings', Object.assign({ scope: SCOPE }, body));
            if (op === 'add') return api('POST', '/' + table, body);
            if (op === 'update') return api('PATCH', `/${table}/${id}`, body);
            return api('DELETE', `/${table}/${id}`);
        }

        // Returns false only when the network failed; every other outcome lets the pull proceed.
        let flushing = false;
        async function flush() {
            if (flushing) return true;
            flushing = true;
            status.syncing = true;
            let reachable = true;
            try {
                while (outbox.length) {
                    const item = outbox[0];
                    item.inflight = true;
                    let res;
                    try { res = await send(item); }
                    catch { status.online = false; item.inflight = false; reachable = false; break; }   // network: keep it, retry later
                    status.online = true;
                    if (res.status === 401) { status.auth = 'rejected'; item.inflight = false; break; }
                    if (res.status === 429 || res.status >= 500) {
                        status.error = `server ${res.status}`; item.inflight = false; break;
                    }
                    if (res.status >= 400) {
                        // Refused for good (validation, permission, unknown row): drop it, keep the text.
                        logConflict({ table: item.table, id: item.id, refused: res.status, detail: res.data && res.data.detail, body: item.body });
                    } else if (item.table === 'settings') {
                        if (res.data && res.data.settings) Object.assign(state.settings, normalizeSettings(res.data.settings));
                    } else if (res.data && res.data.id) {
                        applyRow(item.table, res.data);   // server-assigned timestamps replace ours
                    }
                    outbox.shift();
                    persistOutbox();
                    status.error = null;
                }
            } finally {
                flushing = false;
                status.syncing = false;
                persist();
            }
            return reachable;
        }

        async function pull() {
            const since = firstPull ? null : serverTime;
            const path = `/state?scope=${encodeURIComponent(SCOPE)}` + (since ? `&since=${encodeURIComponent(since)}` : '');
            let res;
            try { res = await api('GET', path); } catch { status.online = false; return; }
            status.online = true;
            if (res.status === 401) { status.auth = 'rejected'; return; }
            if (res.status !== 200 || !res.data) { status.error = `server ${res.status}`; return; }
            const d = res.data;
            mergeRows('events', d.events || [], !since);
            mergeRows('notes', d.notes || [], !since);
            const pendingSettings = pendingFor('settings', 'settings');
            Object.assign(state.settings, normalizeSettings(d.settings), pendingSettings ? pendingSettings.body : {});
            serverTime = d.server_time;   // opaque cursor; handed back verbatim as `since`
            firstPull = false;            // only after one has actually succeeded
            status.lastSync = Date.now();
            status.error = null;
            persist();
        }

        async function loadIdentity() {
            let me, roster;
            try {
                me = await api('GET', '/me');
                roster = me.status === 200 ? await api('GET', '/roster') : null;
            } catch { status.online = false; return; }
            status.online = true;
            if (me.status === 401) { status.auth = 'rejected'; return; }
            if (me.status !== 200 || !me.data) { status.error = `server ${me.status}`; return; }
            status.auth = 'ok';
            self.session = { player: me.data.player, role: me.data.role, characters: me.data.characters };
            if (roster && roster.status === 200 && roster.data) self.roster = roster.data;
            persist();
        }

        // One sync at a time: identity if we lack it, then push the outbox, then pull.
        // A request that arrives mid-sync runs one more afterwards, so a write queued
        // during a pull is still pushed (and its result pulled) without waiting a poll.
        let ticking = null, again = false;
        function tick() {
            if (ticking) { again = true; return ticking; }
            ticking = (async () => {
                if (status.auth !== 'ok') await loadIdentity();
                if (status.auth === 'rejected') return;
                // Always try the pull: a failed one is how we learn we're offline, and a
                // successful one is how we learn we're back. Skip it only when the flush
                // just hit the network, to avoid paying the timeout twice.
                if (await flush()) await pull();
            })().catch(err => { status.error = String(err); })
               .finally(() => {
                   ticking = null;
                   notify();
                   if (again) { again = false; tick(); }
               });
            return ticking;
        }
        self.sync = tick;
        self.start = function() {
            tick();
            setInterval(() => { if (document.visibilityState === 'visible') tick(); }, POLL_MS);
            document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') tick(); });
            window.addEventListener('focus', () => tick());
            window.addEventListener('online', () => { status.online = true; tick(); });
            window.addEventListener('offline', () => { status.online = false; notify(); });
        };

        const find = (list, id) => list.find(r => r.id === id);
        self.addEvent = row => { state.events.push(row); persist(); enqueue({ table: 'events', op: 'add', id: row.id, body: pick(row, EVENT_FIELDS) }); };
        self.updateEvent = (id, patch) => {
            const r = find(state.events, id); if (!r) return;
            Object.assign(r, patch, { updated_at: nowStamp() }); persist();
            enqueue({ table: 'events', op: 'update', id, body: patch });
        };
        self.deleteEvent = id => { state.events = state.events.filter(e => e.id !== id); persist(); enqueue({ table: 'events', op: 'delete', id }); };
        self.addNote = row => { state.notes.push(row); persist(); enqueue({ table: 'notes', op: 'add', id: row.id, body: pick(row, NOTE_FIELDS) }); };
        self.updateNote = (id, patch) => {
            const r = find(state.notes, id); if (!r) return;
            Object.assign(r, patch, { updated_at: nowStamp() }); persist();
            enqueue({ table: 'notes', op: 'update', id, body: patch });
        };
        self.deleteNote = id => { state.notes = state.notes.filter(n => n.id !== id); persist(); enqueue({ table: 'notes', op: 'delete', id }); };
        self.updateSettings = patch => { Object.assign(state.settings, patch); persist(); enqueue({ table: 'settings', op: 'update', id: 'settings', body: patch }); };
        return self;
    }

    // ── Token bootstrap ──
    // Enrollment is a magic link: https://seminarios.slippi.org/#t=K7RM-9XQ2-4TBV-8HNC
    // The fragment never reaches a server, so the token lands in no access log. It is
    // persisted and stripped from the URL at once. Manual entry is the fallback (top bar).
    function bootstrapToken() {
        const m = location.hash.match(/(?:^#|[#&])t=([^&]+)/);
        if (m) {
            localStorage.setItem(TOKEN_KEY, decodeURIComponent(m[1]).trim());
            history.replaceState(null, '', location.pathname + location.search);
        }
        return localStorage.getItem(TOKEN_KEY);
    }
    const TOKEN = bootstrapToken();
    const store = TOKEN ? RemoteStore(TOKEN) : LocalStore();
    const DATA = store.state;

    // ── Identity helpers ──
    function me() { return store.session ? store.session.player : null; }
    function myRole() { return store.session ? store.session.role : 'player'; }
    function isGm() { return GM_ROLES.includes(myRole()); }
    function playerName(id) {
        const p = store.roster.players.find(x => x.id === id);
        return p ? p.display_name : 'Unknown';
    }
    function charOf(id) { return id ? store.roster.characters.find(c => c.id === id) || null : null; }
    function eventColor(e) { const c = charOf(e.character_id); return c && c.color ? c.color : DEFAULT_COLOR; }
    function eventWho(e) { const c = charOf(e.character_id); return c ? c.name : playerName(e.author_id); }
    function eventWhoTitle(e) {
        const c = charOf(e.character_id);
        return c ? `${c.name} · logged by ${playerName(e.author_id)}` : `logged by ${playerName(e.author_id)}`;
    }
    function canMutate(row) { return isGm() || (!!me() && row.author_id === me().id); }
    // A player speaks as their own characters; the GM owns every NPC and may pick any.
    function pickableCharacters() {
        if (isGm()) return store.roster.characters.filter(c => c.active !== 0);
        return store.session ? store.session.characters : [];
    }
    function allowedVisibilities() { return isGm() ? ['party', 'public', 'gm'] : ['party', 'public']; }
    function lockGlyph(row) { return row.visibility === 'gm' ? '<span class="lock" title="GM only">🔒</span> ' : ''; }

    function getToday() {
        if (typeof DATA.settings.today === 'number') return DATA.settings.today;
        // Until "today" is set explicitly, it floats to the latest logged event.
        return DATA.events.reduce((m, e) => Math.max(m, e.day), DATA.settings.campaignStart);
    }
    // Read order matches the server's: (day, time_of_day, created_at, id).
    function sortEvents(list) {
        return list.sort((a, b) => a.day - b.day
            || CAL.timesOfDay.indexOf(a.time_of_day) - CAL.timesOfDay.indexOf(b.time_of_day)
            || (a.created_at || '').localeCompare(b.created_at || '')
            || a.id.localeCompare(b.id));
    }
    function eventsInRange(start, end) {
        return sortEvents(DATA.events.filter(e => e.day >= start && e.day <= end));
    }
    function getEvents(districtKey) {
        let events = DATA.events.filter(e => e.place_id === districtKey);
        if (selectedDay !== null) events = events.filter(e => e.day === selectedDay);
        return sortEvents(events);
    }
    // `districtKey` may be null for events that happen outside any district (travel, the open sea);
    // `place` is optional free text describing where. The author is always this session.
    function addEvent(districtKey, day, timeOfDay, text, characterId, place, visibility) {
        const author = me();
        if (!author) return false;
        const stamp = nowStamp();
        store.addEvent({
            id: newId('evt_'),
            scope: SCOPE,
            place_id: districtKey || null,
            place: place || null,
            day,
            time_of_day: timeOfDay,
            text,
            author_id: author.id,
            character_id: characterId || null,
            visibility: allowedVisibilities().includes(visibility) ? visibility : 'party',
            created_at: stamp,
            updated_at: stamp,
            deleted_at: null
        });
        return true;
    }
    function eventPlaceLabel(e) {
        const district = DISTRICTS[e.place_id];
        if (district) return e.place ? `${district.name} · ${e.place}` : district.name;
        return e.place || 'Elsewhere';
    }
    function deleteEvent(eventId) { store.deleteEvent(eventId); }
    function notesFor(districtKey) { return DATA.notes.filter(n => n.place_id === districtKey); }

    // ── Map Setup ──
    const container = d3.select('#mapContainer');
    const svg = container.select('svg');
    const g = svg.append('g').attr('class', 'zoom-group');
    const tooltip = d3.select('#mapTooltip');

    // Move all SVG content into zoom group
    svg.selectAll('defs, g, path, text, rect, circle, polygon, polyline, line, ellipse').each(function() {
        if (!d3.select(this).classed('zoom-group')) {
            g.node().appendChild(this);
        }
    });

    const viewBox = svg.attr('viewBox').split(' ').map(Number);
    const [vbX, vbY, vbWidth, vbHeight] = viewBox;

    // Zoom
    const zoom = d3.zoom()
        .scaleExtent([0.5, 10])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });

    svg.call(zoom);

    const initialScale = 0.8;
    const initialTransform = d3.zoomIdentity
        .translate(vbWidth * 0.1, vbHeight * 0.1)
        .scale(initialScale);
    svg.call(zoom.transform, initialTransform);

    // ── District Interactivity ──
    // Find district paths by their data-name pattern
    g.selectAll('path[id]').each(function() {
        const el = d3.select(this);
        const pathId = el.attr('id');
        const dataName = el.attr('data-name');

        // Match district paths (e.g., _01_temple, data-name="01_temple")
        const key = dataName || pathId.replace(/^_/, '');
        if (!DISTRICTS[key]) return;

        const district = DISTRICTS[key];

        el.style('cursor', 'pointer')
            .on('mouseover', function(event) {
                el.classed('district-hover', true);
                tooltip
                    .html(`<strong>${district.name}</strong>`)
                    .classed('visible', true)
                    .style('left', (event.pageX + 12) + 'px')
                    .style('top', (event.pageY - 12) + 'px');
            })
            .on('mousemove', function(event) {
                tooltip
                    .style('left', (event.pageX + 12) + 'px')
                    .style('top', (event.pageY - 12) + 'px');
            })
            .on('mouseout', function() {
                el.classed('district-hover', false);
                tooltip.classed('visible', false);
            })
            .on('click', function(event) {
                event.stopPropagation();
                selectDistrict(key);
            });
    });

    // Also make other labeled elements show tooltips
    g.selectAll('g[id][data-name]').each(function() {
        const el = d3.select(this);
        const dataName = el.attr('data-name');
        if (!dataName || dataName.startsWith('districts') || dataName.startsWith('station')
            || dataName.startsWith('rail') || dataName.startsWith('terrace')
            || dataName.startsWith('label') || dataName.startsWith('tier')
            || dataName.startsWith('feature') || dataName.startsWith('coastline')) return;
        // Skip district groups themselves
        if (DISTRICTS[dataName]) return;

        const displayName = dataName.replace(/^[\d_]+/, '').replace(/[-_]/g, ' ').trim();
        if (!displayName) return;

        el.style('cursor', 'pointer')
            .on('mouseover', function(event) {
                tooltip
                    .html(`<strong>${displayName}</strong>`)
                    .classed('visible', true)
                    .style('left', (event.pageX + 12) + 'px')
                    .style('top', (event.pageY - 12) + 'px');
            })
            .on('mousemove', function(event) {
                tooltip
                    .style('left', (event.pageX + 12) + 'px')
                    .style('top', (event.pageY - 12) + 'px');
            })
            .on('mouseout', function() {
                tooltip.classed('visible', false);
            });
    });

    // ── Select District ──
    function selectDistrict(key) {
        currentDistrict = key;
        const district = DISTRICTS[key];

        // Highlight selected district
        g.selectAll('path[id]').each(function() {
            const el = d3.select(this);
            const dn = el.attr('data-name') || el.attr('id').replace(/^_/, '');
            el.style('stroke', dn === key ? '#c9b882' : null)
              .style('stroke-width', dn === key ? '4px' : null);
        });

        // Show card
        document.getElementById('emptyState').style.display = 'none';
        document.getElementById('cardContent').style.display = 'block';
        document.getElementById('cardTitle').textContent = district.name;
        document.getElementById('cardNumber').textContent = `District ${district.number}`;
        document.getElementById('cardDesc').textContent = district.desc;

        renderCurrentTab();

        // Open panel if collapsed
        const panel = document.getElementById('sidePanel');
        const toggle = document.getElementById('panelToggle');
        if (panel.classList.contains('collapsed')) {
            panel.classList.remove('collapsed');
            toggle.classList.remove('collapsed');
            toggle.textContent = '▶';
            toggle.style.right = '380px';
        }
    }

    // ── Tabs ──
    document.querySelectorAll('.card-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.card-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentTab = tab.dataset.tab;
            document.querySelectorAll('.tab-content').forEach(c => c.style.display = 'none');
            document.getElementById(`tab-${currentTab}`).style.display = 'block';
            renderCurrentTab();
        });
    });

    function renderCurrentTab() {
        if (!currentDistrict) return;
        if (currentTab === 'events') renderEvents();
        else if (currentTab === 'notes') renderNotes();
        else if (currentTab === 'details') renderDetails();
    }

    // ── Events ──
    function renderEvents() {
        const list = document.getElementById('eventsList');
        // Never rebuild a list with an open edit box: a poll would take the cursor with it.
        if (eventEditOpen(list)) return;
        const events = getEvents(currentDistrict);

        if (events.length === 0) {
            list.innerHTML = selectedDay === null
                ? '<div class="no-events">No events logged for this district yet.</div>'
                : `<div class="no-events">Nothing logged here on ${escapeHtml(formatDateShort(selectedDay))}.</div>`;
        } else {
            list.innerHTML = events.map(e => `
                    <div class="event-item${e.visibility === 'gm' ? ' vis-gm' : ''}" style="border-left-color:${eventColor(e)}">
                        <div class="event-header">
                            <span class="event-date" title="${escapeHtml(formatDate(e.day))}">${lockGlyph(e)}${escapeHtml(formatDateShort(e.day))}, ${e.time_of_day}${e.place ? ' · ' + escapeHtml(e.place) : ''}</span>
                            <span>
                                <span class="event-char" style="background:${eventColor(e)}" title="${escapeHtml(eventWhoTitle(e))}">${escapeHtml(eventWho(e))}</span>
                                ${canMutate(e) ? `<button class="event-edit" data-id="${e.id}" title="Edit">&#9998;</button><button class="event-delete" data-id="${e.id}" title="Delete">&times;</button>` : ''}
                            </span>
                        </div>
                        <div class="event-text">${escapeHtml(e.text)}</div>
                    </div>
                `).join('');
        }

        // Wire up delete buttons
        list.querySelectorAll('.event-delete').forEach(btn => {
            btn.addEventListener('click', () => {
                deleteEvent(btn.dataset.id);
                renderEvents();
                renderCalendar();
                renderTimeline();
            });
        });
    }

    // ── Editing an event ──
    // The API patches any field, but the fix the table actually wants is a typo in
    // `text`, so that is what the UI offers: an inline box on a row you may change
    // (`canMutate`), saved like a note -- on blur or after a pause, never per keystroke
    // (PLAN.md §7.5). Day, place and visibility stay as logged; log a new event instead.
    // A list holding an open box is not re-rendered, so a poll cannot pull the cursor out
    // from under an edit; the box closes on blur and the list catches up on the next render.
    const IDLE_SAVE_MS = 5000;              // shared with the notes below
    const editTimers = new Map();
    // Taking a focused box out of the DOM fires `focusout` synchronously, and the box is
    // still connected when it does -- so a close would otherwise re-enter the save below
    // and write the text a cancel was throwing away.
    const closingEdits = new WeakSet();

    function eventEditOpen(container) { return !!container.querySelector('.event-edit-box'); }

    function beginEventEdit(btn) {
        const rowEl = btn.closest('.event-item, .agenda-item');
        const holder = rowEl && rowEl.querySelector('.event-text, .agenda-text');
        const row = DATA.events.find(e => e.id === btn.dataset.id);
        if (!holder || !row || !canMutate(row)) return;
        closeOpenEventEdits();              // one box at a time
        const ta = document.createElement('textarea');
        ta.className = 'event-edit-box';
        ta.dataset.id = row.id;
        ta.value = row.text;
        const hint = document.createElement('div');
        hint.className = 'notes-save-hint';
        hint.textContent = 'Saves when you pause · Esc to cancel';
        holder.innerHTML = '';
        holder.append(ta, hint);
        ta.focus();
        ta.setSelectionRange(ta.value.length, ta.value.length);
    }
    function writeEventEdit(ta) {
        clearTimeout(editTimers.get(ta));
        editTimers.delete(ta);
        const row = DATA.events.find(e => e.id === ta.dataset.id);
        const text = ta.value.trim();
        // An emptied box means "never mind", not a delete: deleting is its own button.
        if (row && text && text !== row.text) store.updateEvent(row.id, { text });
    }
    function closeEventEdit(ta) {
        if (closingEdits.has(ta)) return;
        closingEdits.add(ta);
        const holder = ta.closest('.event-text, .agenda-text');
        const row = DATA.events.find(e => e.id === ta.dataset.id);
        if (holder) holder.textContent = row ? row.text : '';
    }
    // Write first, close second: while the box is still in the list, the guard above keeps
    // the write's own re-render from rebuilding it, so a click already on its way to
    // another button on the same row still lands.
    function saveEventEdit(ta) {
        if (!ta.isConnected || closingEdits.has(ta)) return;
        writeEventEdit(ta);
        closeEventEdit(ta);
    }
    function closeOpenEventEdits() { document.querySelectorAll('.event-edit-box').forEach(saveEventEdit); }

    function wireEventEditing(container) {
        // Capture, not bubble: an agenda row's own click handler jumps the map to its
        // district, and it would run first.
        container.addEventListener('click', ev => {
            const btn = ev.target.closest('.event-edit, .agenda-edit');
            if (btn) { ev.stopPropagation(); beginEventEdit(btn); return; }
            if (ev.target.closest('.event-edit-box, .notes-save-hint')) ev.stopPropagation();
        }, true);
        container.addEventListener('input', ev => {
            const ta = ev.target;
            if (!ta.classList.contains('event-edit-box')) return;
            clearTimeout(editTimers.get(ta));
            editTimers.set(ta, setTimeout(() => writeEventEdit(ta), IDLE_SAVE_MS));
        });
        container.addEventListener('focusout', ev => {
            if (ev.target.classList.contains('event-edit-box')) saveEventEdit(ev.target);
        });
        container.addEventListener('keydown', ev => {
            const ta = ev.target;
            if (!ta.classList.contains('event-edit-box')) return;
            if (ev.key === 'Escape') {
                ev.preventDefault();
                clearTimeout(editTimers.get(ta));
                editTimers.delete(ta);
                closeEventEdit(ta);         // detaches the box; the focusout that follows is a no-op
            } else if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) {
                ev.preventDefault();
                saveEventEdit(ta);
            }
        });
    }
    ['eventsList', 'calAgenda'].forEach(id => wireEventEditing(document.getElementById(id)));
    window.addEventListener('beforeunload', closeOpenEventEdits);

    // ── Add Event ──
    const evMonth = document.getElementById('eventMonth');
    const evDay = document.getElementById('eventDayNum');
    const evYear = document.getElementById('eventYear');
    const evHint = document.getElementById('eventDateHint');

    function fillMonthSelect(sel) {
        sel.innerHTML = CAL.months.map((m, i) => `<option value="${i + 1}">${m}</option>`).join('');
    }
    function fillDaySelect(sel) {
        let html = '';
        for (let d = 1; d <= CAL.daysPerMonth; d++) html += `<option value="${d}">${d}</option>`;
        sel.innerHTML = html;
    }
    // Year inputs are shown in the chosen reckoning; convert back to the common count on read.
    function readDateFields(monthSel, daySel, yearInput) {
        const year = (parseInt(yearInput.value, 10) || 0) + CAL.eras[DATA.settings.era].offset;
        return toAbs(Math.max(1, year), +monthSel.value, +daySel.value);
    }
    function writeDateFields(monthSel, daySel, yearInput, abs) {
        const d = fromAbs(abs);
        monthSel.value = d.month;
        daySel.value = d.day;
        yearInput.value = eraYear(d.year, DATA.settings.era);
    }
    fillMonthSelect(evMonth);
    fillDaySelect(evDay);

    function setFormDate(abs) {
        writeDateFields(evMonth, evDay, evYear, abs);
        updateFormHint();
    }
    function getFormDate() { return readDateFields(evMonth, evDay, evYear); }
    function updateFormHint() {
        const d = fromAbs(getFormDate());
        const era = CAL.eras[DATA.settings.era];
        evHint.textContent = `${weekdayName(d.weekday)} · ${era.abbr ? era.label + ' · ' : ''}${otherEras(d.year)}`;
    }
    [evMonth, evDay, evYear].forEach(el => el.addEventListener('input', updateFormHint));

    document.getElementById('addEventBtn').addEventListener('click', () => {
        const text = document.getElementById('eventText').value.trim();
        if (!text || !currentDistrict) return;

        const day = getFormDate();
        const time = document.getElementById('eventTime').value;
        const character = document.getElementById('charSelect').value;
        const visibility = document.getElementById('eventVis').value;

        if (!addEvent(currentDistrict, day, time, text, character, null, visibility)) return;
        document.getElementById('eventText').value = '';
        renderEvents();
        renderCalendar();
        renderTimeline();
    });

    // ── Notes ──
    // A district holds one note row per author and visibility. Party (and public) notes
    // first, GM-only notes below a divider, each block by updated_at (PLAN.md §12 Q2).
    // Notes the caller may change are textareas that save on blur or after a pause --
    // never per keystroke, which would meet the API's write limit (PLAN.md §7.5).
    const notesList = document.getElementById('notesList');
    const noteTimers = new Map();

    function noteCard(n, editable) {
        const who = n.author_id === (me() && me().id) ? 'Your note' : playerName(n.author_id);
        const head = `<div class="note-head"><span>${escapeHtml(who)}</span><span class="note-meta">${lockGlyph(n)}${VISIBILITIES[n.visibility] || ''}</span></div>`;
        if (!editable) return `<div class="note-card${n.visibility === 'gm' ? ' vis-gm' : ''}">${head}<div class="note-text">${escapeHtml(n.text)}</div></div>`;
        return `<div class="note-card own${n.visibility === 'gm' ? ' vis-gm' : ''}">${head}
            <textarea data-id="${n.id || ''}" data-vis="${n.visibility}" data-place="${escapeHtml(n.place_id || '')}"
                placeholder="${n.visibility === 'gm' ? 'GM-only notes about this district...' : 'Notes about this district, shared with the party...'}">${escapeHtml(n.text)}</textarea>
            <div class="notes-save-hint">Saves when you pause</div></div>`;
    }
    function renderNotes() {
        // Never rebuild under someone's cursor; the next render catches up.
        if (notesList.contains(document.activeElement)) return;
        flushNoteSaves();
        const mine = me();
        const rows = notesFor(currentDistrict).slice()
            .sort((a, b) => (a.updated_at || '').localeCompare(b.updated_at || ''));
        const blocks = [{ vis: ['party', 'public'], own: 'party', label: null }];
        if (isGm()) blocks.push({ vis: ['gm'], own: 'gm', label: 'GM only' });
        let html = '';
        for (const b of blocks) {
            if (b.label) html += `<div class="notes-divider">🔒 ${b.label}</div>`;
            const inBlock = rows.filter(n => b.vis.includes(n.visibility));
            const hasOwn = mine && inBlock.some(n => n.author_id === mine.id);
            if (mine && !hasOwn) {
                html += noteCard({ id: '', place_id: currentDistrict, visibility: b.own, text: '', author_id: mine.id }, true);
            }
            html += inBlock.map(n => noteCard(n, canMutate(n))).join('');
        }
        if (!mine) html = '<div class="no-events">Connecting…</div>';
        notesList.innerHTML = html;
    }
    function saveNote(ta) {
        clearTimeout(noteTimers.get(ta));
        noteTimers.delete(ta);
        const text = ta.value;
        const id = ta.dataset.id;
        if (id) {
            const row = DATA.notes.find(n => n.id === id);
            if (!row) return;
            if (!text.trim()) { store.deleteNote(id); ta.dataset.id = ''; }
            else if (text !== row.text) store.updateNote(id, { text });
        } else if (text.trim() && me()) {
            const stamp = nowStamp();
            const row = {
                id: newId('note_'), scope: SCOPE, place_id: ta.dataset.place || null, text,
                author_id: me().id, visibility: ta.dataset.vis, created_at: stamp, updated_at: stamp, deleted_at: null
            };
            store.addNote(row);
            ta.dataset.id = row.id;
        }
    }
    function flushNoteSaves() { for (const ta of [...noteTimers.keys()]) saveNote(ta); }
    notesList.addEventListener('input', ev => {
        const ta = ev.target;
        if (ta.tagName !== 'TEXTAREA') return;
        clearTimeout(noteTimers.get(ta));
        noteTimers.set(ta, setTimeout(() => saveNote(ta), IDLE_SAVE_MS));
    });
    notesList.addEventListener('focusout', ev => { if (ev.target.tagName === 'TEXTAREA') saveNote(ev.target); });
    window.addEventListener('beforeunload', flushNoteSaves);

    // ── Details ──
    function renderDetails() {
        const district = DISTRICTS[currentDistrict];
        const details = district.details.split(' | ');
        document.getElementById('detailsContent').innerHTML = details.map(d => {
            const [label, ...rest] = d.split(': ');
            return `<div style="margin-bottom:8px;"><span style="color:#887750;font-size:13px;">${label}</span><br><span style="color:#ccc;font-size:14px;">${rest.join(': ')}</span></div>`;
        }).join('');
    }

    // ── Panel Toggle ──
    document.getElementById('panelToggle').addEventListener('click', () => {
        const panel = document.getElementById('sidePanel');
        const toggle = document.getElementById('panelToggle');
        const collapsed = panel.classList.toggle('collapsed');
        toggle.classList.toggle('collapsed');
        toggle.textContent = collapsed ? '◀' : '▶';
        toggle.style.right = collapsed ? '0' : '380px';
    });

    // ── Calendar Panel ──
    const calGrid = document.getElementById('calGrid');
    const calAgenda = document.getElementById('calAgenda');

    function toggleCalPanel(force) {
        const panel = document.getElementById('calPanel');
        const btn = document.getElementById('calToggle');
        const collapsed = typeof force === 'boolean' ? force : !panel.classList.contains('collapsed');
        panel.classList.toggle('collapsed', collapsed);
        btn.classList.toggle('collapsed', collapsed);
        btn.textContent = collapsed ? '▶' : '◀';
    }
    document.getElementById('calToggle').addEventListener('click', () => toggleCalPanel());

    // Absolute day range currently shown in the grid
    function calRange() {
        const d = fromAbs(calCursor);
        if (calView === 'month') {
            const s = toAbs(d.year, d.month, 1);
            return [s, s + CAL.daysPerMonth - 1];
        }
        if (calView === 'year') {
            const s = toAbs(d.year, 1, 1);
            return [s, s + CAL.daysPerYear - 1];
        }
        const y0 = yearsBlockStart(d.year);
        return [toAbs(y0, 1, 1), toAbs(y0 + YEARS_PER_BLOCK, 1, 1) - 1];
    }

    function selectDay(abs) {
        selectedDay = abs;
        if (abs !== null) {
            calCursor = abs;
            calView = 'month';
            setFormDate(abs);
        }
        document.getElementById('timelineCurrent').textContent = abs === null ? 'All Days' : formatDateShort(abs);
        renderCalendar();
        renderTimeline();
        renderCurrentTab();
    }

    function calStep(dir) {
        // Months and years are uniform, so stepping is plain arithmetic.
        const unit = calView === 'month' ? CAL.daysPerMonth
                   : calView === 'year' ? CAL.daysPerYear
                   : CAL.daysPerYear * YEARS_PER_BLOCK;
        const next = calCursor + dir * unit;
        if (next < 0) return;
        calCursor = next;
        renderCalendar();
    }
    document.getElementById('calPrev').addEventListener('click', () => calStep(-1));
    document.getElementById('calNext').addEventListener('click', () => calStep(1));
    document.getElementById('calTitle').addEventListener('click', () => {
        if (calView === 'month') calView = 'year';
        else if (calView === 'year') calView = 'years';
        else return;
        renderCalendar();
    });
    document.getElementById('calTodayBtn').addEventListener('click', () => {
        calCursor = getToday();
        calView = 'month';
        renderCalendar();
    });
    document.getElementById('calClearBtn').addEventListener('click', () => selectDay(null));

    function dotsHtml(evs) {
        if (!evs.length) return '<span class="cal-dots"></span>';
        if (evs.length > 4) return `<span class="cal-count">${evs.length}</span>`;
        return '<span class="cal-dots">' + evs.map(e =>
            `<span class="cal-dot" style="background:${eventColor(e)}"></span>`).join('') + '</span>';
    }

    function renderCalendar() {
        const d = fromAbs(calCursor);
        const era = DATA.settings.era;
        const today = getToday();
        const [rs, re] = calRange();
        const events = eventsInRange(rs, re);

        // Title
        const titleEl = document.getElementById('calTitle');
        const seasonEl = document.getElementById('calSeason');
        const mainEl = document.getElementById('calTitleMain');
        const subEl = document.getElementById('calTitleSub');
        titleEl.classList.toggle('top', calView === 'years');
        titleEl.title = calView === 'years' ? '' : 'Click to zoom out';
        if (calView === 'month') {
            const s = CAL.seasons[d.season];
            seasonEl.textContent = s.name;
            seasonEl.style.color = s.color;
            mainEl.textContent = `${CAL.months[d.month - 1]} ${formatYear(d.year, era)}`;
            subEl.textContent = otherEras(d.year);
        } else if (calView === 'year') {
            seasonEl.textContent = CAL.eras[era].label;
            seasonEl.style.color = '';
            mainEl.textContent = formatYear(d.year, era);
            subEl.textContent = otherEras(d.year);
        } else {
            const y0 = yearsBlockStart(d.year);
            seasonEl.textContent = CAL.eras[era].label;
            seasonEl.style.color = '';
            mainEl.textContent = `${formatYear(y0, era)} – ${formatYear(y0 + YEARS_PER_BLOCK - 1, era)}`;
            subEl.textContent = `${otherEras(y0)} …`;
        }

        // Grid
        calGrid.className = 'cal-grid ' + calView;
        calGrid.innerHTML = '';
        if (calView === 'month') {
            CAL.weekdays.forEach((w, i) => {
                const h = document.createElement('div');
                h.className = 'cal-wd' + (w.name ? '' : ' unnamed');
                h.textContent = w.abbr;
                h.title = w.name || `${weekdayName(i)} (unnamed)`;
                calGrid.appendChild(h);
            });
            for (let day = 1; day <= CAL.daysPerMonth; day++) {
                const abs = toAbs(d.year, d.month, day);
                const dayEvents = events.filter(e => e.day === abs);
                const cell = document.createElement('div');
                cell.className = 'cal-cell day'
                    + (abs === selectedDay ? ' selected' : '')
                    + (abs === today ? ' today' : '')
                    + (abs > today ? ' future' : '');
                cell.innerHTML = `<span class="cal-num">${day}</span>${dotsHtml(dayEvents)}`;
                cell.title = formatDate(abs)
                    + (abs === today ? ' (today)' : '')
                    + (dayEvents.length ? ` — ${dayEvents.length} event${dayEvents.length !== 1 ? 's' : ''}` : '');
                cell.addEventListener('click', () => selectDay(abs === selectedDay ? null : abs));
                calGrid.appendChild(cell);
            }
        } else if (calView === 'year') {
            for (let m = 1; m <= CAL.monthsPerYear; m++) {
                const s = toAbs(d.year, m, 1), e = s + CAL.daysPerMonth - 1;
                const count = events.filter(ev => ev.day >= s && ev.day <= e).length;
                const season = CAL.seasons[Math.floor((m - 1) / 4)];
                const cell = document.createElement('div');
                cell.className = 'cal-cell month'
                    + (today >= s && today <= e ? ' today' : '')
                    + (selectedDay !== null && selectedDay >= s && selectedDay <= e ? ' selected' : '')
                    + (s > today ? ' future' : '');
                cell.style.background = season.tint;
                cell.innerHTML = `<span class="cal-name">${CAL.months[m - 1]}</span><span class="cal-count">${count || ''}</span>`;
                cell.title = `${CAL.months[m - 1]} · ${season.name}`;
                cell.addEventListener('click', () => { calCursor = s; calView = 'month'; renderCalendar(); });
                calGrid.appendChild(cell);
            }
        } else {
            const y0 = yearsBlockStart(d.year);
            for (let y = y0; y < y0 + YEARS_PER_BLOCK; y++) {
                const s = toAbs(y, 1, 1), e = s + CAL.daysPerYear - 1;
                const count = events.filter(ev => ev.day >= s && ev.day <= e).length;
                const cell = document.createElement('div');
                cell.className = 'cal-cell year'
                    + (today >= s && today <= e ? ' today' : '')
                    + (selectedDay !== null && selectedDay >= s && selectedDay <= e ? ' selected' : '')
                    + (s > today ? ' future' : '');
                cell.innerHTML = `<span class="cal-name">${formatYear(y, era)}</span><span class="cal-count">${count || ''}</span>`;
                cell.title = otherEras(y);
                cell.addEventListener('click', () => { calCursor = s; calView = 'year'; renderCalendar(); });
                calGrid.appendChild(cell);
            }
        }

        renderAgenda(events);
        renderSettings();
        renderLogForm();
    }

    function renderAgenda(rangeEvents) {
        if (eventEditOpen(calAgenda)) return;   // as in renderEvents: not under a cursor
        let list, heading;
        if (selectedDay !== null) {
            list = eventsInRange(selectedDay, selectedDay);
            heading = formatDate(selectedDay);
        } else {
            list = rangeEvents;
            heading = { month: 'This month', year: 'This year', years: 'These years' }[calView];
        }

        let html = `<div class="agenda-heading">${escapeHtml(heading)}</div>`;
        if (!list.length) {
            html += `<div class="no-events">Nothing logged.${selectedDay !== null ? ' Use “+ Log” to add something here.' : ''}</div>`;
        } else {
            let lastDate = null;
            for (const e of list) {
                if (selectedDay === null && e.day !== lastDate) {
                    html += `<div class="agenda-day">${escapeHtml(formatDate(e.day))}</div>`;
                    lastDate = e.day;
                }
                const inDistrict = !!DISTRICTS[e.place_id];
                html += `
                    <div class="agenda-item${inDistrict ? '' : ' no-district'}${e.visibility === 'gm' ? ' vis-gm' : ''}" style="border-left-color:${eventColor(e)}" data-district="${e.place_id || ''}" title="${escapeHtml(eventWhoTitle(e))}${inDistrict ? ' · show on map' : ''}">
                        <div class="agenda-head">
                            <span class="agenda-district">${lockGlyph(e)}${escapeHtml(eventPlaceLabel(e))}</span>
                            <span class="event-date">${e.time_of_day}${canMutate(e) ? `<button class="agenda-edit" data-id="${e.id}" title="Edit">&#9998;</button><button class="agenda-delete" data-id="${e.id}" title="Delete">&times;</button>` : ''}</span>
                        </div>
                        <div class="agenda-text">${escapeHtml(e.text)}</div>
                    </div>`;
            }
        }
        calAgenda.innerHTML = html;
        calAgenda.querySelectorAll('.agenda-item').forEach(el => {
            el.addEventListener('click', () => {
                if (DISTRICTS[el.dataset.district]) selectDistrict(el.dataset.district);
            });
        });
        calAgenda.querySelectorAll('.agenda-delete').forEach(btn => {
            btn.addEventListener('click', (ev) => {
                ev.stopPropagation();
                deleteEvent(btn.dataset.id);
                renderCalendar();
                renderTimeline();
                renderCurrentTab();
            });
        });
    }

    // ── Log from the calendar (district optional) ──
    const calLogDistrict = document.getElementById('calLogDistrict');
    calLogDistrict.innerHTML = '<option value="">Elsewhere — no district</option>'
        + Object.entries(DISTRICTS).map(([k, d]) => `<option value="${k}">${d.name}</option>`).join('');

    document.getElementById('calLogBtn').addEventListener('click', () => {
        const box = document.getElementById('calLog');
        const open = box.style.display === 'none';
        box.style.display = open ? 'block' : 'none';
        document.getElementById('calLogBtn').classList.toggle('active', open);
        if (open) {
            renderLogForm();
            document.getElementById('calLogText').focus();
        }
    });

    // With no day selected the form logs on "today" rather than going dead: a greyed
    // Add Event with the reason above it reads as a broken button, not an instruction.
    function logDay() { return selectedDay !== null ? selectedDay : getToday(); }
    function renderLogForm() {
        const heading = document.getElementById('calLogHeading');
        heading.innerHTML = `Log on <span>${escapeHtml(formatDateShort(logDay()))}</span>`
            + (selectedDay === null ? ' <em>— today; tap a day above to change</em>' : '');
        document.getElementById('calLogAdd').disabled = false;
        if (currentDistrict && !calLogDistrict.dataset.touched) calLogDistrict.value = currentDistrict;
    }
    calLogDistrict.addEventListener('change', () => { calLogDistrict.dataset.touched = '1'; });

    document.getElementById('calLogAdd').addEventListener('click', () => {
        const text = document.getElementById('calLogText').value.trim();
        if (!text) return;
        const day = logDay();
        const district = calLogDistrict.value || null;
        const place = document.getElementById('calLogPlace').value.trim();
        const time = document.getElementById('calLogTime').value;
        const character = document.getElementById('charSelect').value;
        const visibility = document.getElementById('calLogVis').value;
        if (!addEvent(district, day, time, text, character, place, visibility)) return;
        document.getElementById('calLogText').value = '';
        document.getElementById('calLogPlace').value = '';
        renderCalendar();
        renderTimeline();
        renderCurrentTab();
    });

    // ── Calendar Settings ──
    const setEra = document.getElementById('setEra');
    const setStartMonth = document.getElementById('setStartMonth');
    const setStartDay = document.getElementById('setStartDay');
    const setStartYear = document.getElementById('setStartYear');
    setEra.innerHTML = Object.entries(CAL.eras)
        .map(([k, e]) => `<option value="${k}">${e.label}</option>`).join('');
    fillMonthSelect(setStartMonth);
    fillDaySelect(setStartDay);

    document.getElementById('calSettingsBtn').addEventListener('click', () => {
        const box = document.getElementById('calSettings');
        const open = box.style.display === 'none';
        box.style.display = open ? 'block' : 'none';
        document.getElementById('calSettingsBtn').classList.toggle('active', open);
    });

    function renderSettings() {
        const s = DATA.settings;
        const gm = isGm();
        [setEra, setStartMonth, setStartDay, setStartYear].forEach(el => { el.disabled = !gm; });
        document.getElementById('setHint').textContent = gm
            ? 'Shared by the whole table. Month, day, and reckoning names live in the CAL table at the top of the script.'
            : 'Campaign-wide settings; only the GM can change them.';
        setEra.value = s.era;
        document.getElementById('setTodayLabel').textContent =
            formatDateShort(getToday()) + (typeof s.today === 'number' ? '' : ' (auto)');
        document.getElementById('setTodayBtn').disabled = !gm || selectedDay === null || selectedDay === s.today;
        if (document.activeElement !== setStartYear) {
            writeDateFields(setStartMonth, setStartDay, setStartYear, s.campaignStart);
        }
    }

    setEra.addEventListener('change', () => {
        const formAbs = getFormDate();
        store.updateSettings({ era: setEra.value });
        setFormDate(formAbs);
        if (selectedDay !== null) document.getElementById('timelineCurrent').textContent = formatDateShort(selectedDay);
        renderCalendar();
        renderTimeline();
        renderCurrentTab();
    });
    document.getElementById('setTodayBtn').addEventListener('click', () => {
        if (selectedDay === null) return;
        store.updateSettings({ today: selectedDay });
        renderCalendar();
        renderTimeline();
    });
    [setStartMonth, setStartDay, setStartYear].forEach(el => el.addEventListener('change', () => {
        store.updateSettings({ campaignStart: readDateFields(setStartMonth, setStartDay, setStartYear) });
        renderCalendar();
        renderTimeline();
    }));

    // ── Timeline ──
    // Spans from the campaign's first day (or earliest event) to today (or latest event).
    function timelineRange() {
        let start = DATA.settings.campaignStart;
        let end = getToday();
        for (const e of DATA.events) {
            start = Math.min(start, e.day);
            end = Math.max(end, e.day);
        }
        end = Math.max(end, start + 9);
        return [start, end];
    }

    function renderTimeline() {
        const track = document.getElementById('timelineTrack');
        const dayLabels = document.getElementById('timelineDayLabels');
        const [start, end] = timelineRange();
        const n = end - start + 1;
        const today = getToday();
        const era = DATA.settings.era;

        track.querySelectorAll('.timeline-marker, .timeline-selected, .timeline-today').forEach(m => m.remove());
        dayLabels.innerHTML = '';

        // Pick a label step so roughly a dozen labels fit, snapping to month starts once days get dense.
        const step = n <= 12 ? 1 : n <= 24 ? 2 : n <= 48 ? 4 : n <= 96 ? 8
                   : Math.ceil(n / 12 / CAL.daysPerMonth) * CAL.daysPerMonth;
        const ticks = [];
        if (step < CAL.daysPerMonth) {
            for (let i = 0; i < n; i += step) ticks.push(start + i);
        } else {
            const every = step / CAL.daysPerMonth;
            const sd = fromAbs(start);
            for (let abs = toAbs(sd.year, sd.month, 1); abs <= end; abs += CAL.daysPerMonth) {
                const d = fromAbs(abs);
                if (abs >= start && ((d.year - 1) * CAL.monthsPerYear + d.month - 1) % every === 0) ticks.push(abs);
            }
        }
        ticks.forEach(abs => {
            const d = fromAbs(abs);
            const label = document.createElement('span');
            label.className = 'timeline-day-label' + (step === 1 ? '' : ' tick');
            label.style.left = ((abs - start + (step === 1 ? 0.5 : 0)) / n * 100) + '%';
            label.textContent = step >= CAL.daysPerMonth
                ? `${monthAbbr(d.month)} ${eraYear(d.year, era)}`
                : `${d.day} ${monthAbbr(d.month)}`;
            label.title = formatDate(abs);
            dayLabels.appendChild(label);
        });

        // Selected day band and today line
        if (selectedDay !== null && selectedDay >= start && selectedDay <= end) {
            const band = document.createElement('div');
            band.className = 'timeline-selected';
            band.style.left = ((selectedDay - start) / n * 100) + '%';
            band.style.width = (100 / n) + '%';
            track.appendChild(band);
        }
        if (today >= start && today <= end) {
            const line = document.createElement('div');
            line.className = 'timeline-today';
            line.style.left = `calc(${(today - start + 1) / n * 100}% - 1px)`;
            line.title = 'Today: ' + formatDate(today);
            track.appendChild(line);
        }

        // Event markers
        DATA.events.forEach(e => {
            if (e.day < start || e.day > end) return;
            const timeIdx = Math.max(0, CAL.timesOfDay.indexOf(e.time_of_day));
            const pct = (e.day - start + (timeIdx + 0.5) / CAL.timesOfDay.length) / n * 100;
            const marker = document.createElement('div');
            marker.className = 'timeline-marker';
            marker.style.background = eventColor(e);
            marker.style.left = `calc(${pct}% - 4px)`;
            marker.title = `${eventWho(e)} · ${formatDateShort(e.day)} · ${eventPlaceLabel(e)}: ${e.text.slice(0, 50)}`;
            track.appendChild(marker);
        });

        // Click on track to select a day
        track.onclick = function(event) {
            const rect = track.getBoundingClientRect();
            const pct = (event.clientX - rect.left) / rect.width;
            const dayIdx = Math.floor(pct * n);
            if (dayIdx < 0 || dayIdx >= n) return;
            const abs = start + dayIdx;
            selectDay(abs === selectedDay ? null : abs);
        };
    }

    // ── Helpers ──
    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function debounce(fn, ms) {
        let t;
        return function(...args) { clearTimeout(t); t = setTimeout(() => fn.apply(this, args), ms); };
    }

    // ── Export / Import ──
    document.getElementById('exportBtn').addEventListener('click', () => {
        const data = Object.assign({}, DATA, {
            _meta: {
                exported: new Date().toISOString(),
                player: me() ? me().display_name : null,
                eventCount: DATA.events.length,
                notesCount: DATA.notes.length,
                calendar: { daysPerMonth: CAL.daysPerMonth, monthsPerYear: CAL.monthsPerYear, epoch: '1 Naoweihan, year 1 (common reckoning)' }
            }
        });
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `seminarios-${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    });

    document.getElementById('importBtn').addEventListener('click', () => {
        document.getElementById('importFile').click();
    });

    document.getElementById('importFile').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const raw = JSON.parse(evt.target.result);
                if (!raw || !raw.events || !raw.notes) {
                    alert('Invalid file format — expected Seminarios Explorer JSON.');
                    return;
                }
                if (!me()) { alert('Not connected yet — try again in a moment.'); return; }
                // Legacy "day-N" files are dated against this campaign's start. Everything
                // imported is authored by this session; unknown characters are dropped.
                const incoming = normalizeData(raw, DATA.settings, me().id);
                const eventIds = new Set(DATA.events.map(ev => ev.id));
                const noteIds = new Set(DATA.notes.map(n => n.id));
                let added = 0;
                for (const ev of incoming.events) {
                    if (eventIds.has(ev.id)) continue;
                    store.addEvent(Object.assign(ev, {
                        author_id: me().id,
                        character_id: charOf(ev.character_id) ? ev.character_id : null,
                        visibility: allowedVisibilities().includes(ev.visibility) ? ev.visibility : 'party'
                    }));
                    added++;
                }
                for (const n of incoming.notes) {
                    if (!noteIds.has(n.id)) store.addNote(Object.assign(n, { author_id: me().id, visibility: 'party' }));
                }
                renderCalendar();
                renderTimeline();
                if (currentDistrict) renderCurrentTab();
                alert(`Imported! ${added} new event${added !== 1 ? 's' : ''} merged.`);
            } catch (err) {
                alert('Error reading file: ' + err.message);
            }
        };
        reader.readAsText(file);
        e.target.value = ''; // reset so same file can be re-imported
    });

    // ── Identity UI: character picker, visibility pickers, sync indicator, token box ──
    const charSelect = document.getElementById('charSelect');
    function fillSelect(sel, options, keep) {
        const prev = keep !== undefined ? keep : sel.value;
        sel.innerHTML = options.map(([v, label]) => `<option value="${escapeHtml(v)}">${escapeHtml(label)}</option>`).join('');
        if (options.some(([v]) => v === prev)) sel.value = prev;
    }
    function renderIdentity() {
        const chars = pickableCharacters();
        const opts = chars.map(c => [c.id, c.kind === 'npc' ? `${c.name} (NPC)` : c.name]);
        if (isGm() || !chars.length) opts.unshift(['', chars.length ? '— no character —' : '— no characters —']);
        fillSelect(charSelect, opts, charSelect.value || (chars.length === 1 ? chars[0].id : ''));

        const vis = allowedVisibilities().map(v => [v, VISIBILITIES[v]]);
        fillSelect(document.getElementById('eventVis'), vis);
        fillSelect(document.getElementById('calLogVis'), vis);

        const st = store.status();
        const el = document.getElementById('syncStatus');
        let text, cls = '';
        if (st.mode === 'local') { text = 'Local only'; cls = 'local'; }
        else if (st.auth === 'rejected') { text = 'Token rejected'; cls = 'error'; }
        else if (!me()) { text = st.online ? 'Connecting…' : 'Offline'; cls = st.online ? '' : 'offline'; }
        else if (!st.online) { text = `Offline · ${st.pending} pending`; cls = 'offline'; }
        else if (st.pending) { text = `Syncing · ${st.pending} pending`; cls = 'pending'; }
        else if (st.error) { text = `Retrying (${st.error})`; cls = 'offline'; }
        else { text = me().display_name + (isGm() ? ' · GM' : ''); cls = 'ok'; }
        el.textContent = text;
        el.className = 'sync-status ' + cls;
        el.title = st.mode === 'local'
            ? 'No token: entries stay in this browser. Use your enrollment link, or enter your token, to join the table.'
            : (st.lastSync ? 'Last sync ' + new Date(st.lastSync).toLocaleTimeString() : '') + (st.auth === 'rejected' ? ' — enter a valid token' : '');
    }
    const tokenBox = document.getElementById('tokenBox');
    document.getElementById('tokenBtn').addEventListener('click', () => {
        const open = tokenBox.style.display === 'none';
        tokenBox.style.display = open ? 'flex' : 'none';
        if (open) document.getElementById('tokenInput').focus();
    });
    document.getElementById('tokenSave').addEventListener('click', () => {
        const v = document.getElementById('tokenInput').value.trim();
        if (!v) return;
        localStorage.setItem(TOKEN_KEY, v);
        localStorage.removeItem(CACHE_KEY);   // a new identity must not inherit another's cache
        location.reload();
    });
    document.getElementById('tokenInput').addEventListener('keydown', ev => { if (ev.key === 'Enter') document.getElementById('tokenSave').click(); });
    document.getElementById('tokenClear').addEventListener('click', () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(CACHE_KEY);   // the outbox is kept: pending writes flush under the next token
        location.reload();
    });

    // ── Unsaved writes ──
    // `logConflict` has been collecting every refused or overwritten write since Phase 3
    // (PLAN.md §7.8) and nothing ever showed it. Two shapes land in that log: a write the
    // server refused for good (`refused`, with the body we tried to send), and a row
    // someone else changed while ours was still queued (`ours` lost, `theirs` kept).
    // Both mean text someone typed at the table is not where they think it is, so the
    // button appears on its own when there is something to say and hides again when there
    // is not -- it is not worth hiding behind the Token button.
    const conflictPanel = document.getElementById('conflictPanel');
    const conflictList = document.getElementById('conflictList');
    const conflictBtn = document.getElementById('conflictBtn');
    const REFUSALS = {
        400: 'the server would not accept it',
        401: 'your token was not accepted',
        403: 'you are not allowed to change that entry',
        404: 'that entry is no longer there',
        409: 'something else already had that id'
    };

    function conflictsNow() { return store.conflicts ? store.conflicts() : []; }
    function conflictWhen(at) {
        const d = new Date(String(at).replace(' ', 'T') + 'Z');   // stamps are UTC (nowStamp)
        return isNaN(d) ? String(at) : d.toLocaleString();
    }
    function conflictCard(c) {
        const what = { events: 'Event', notes: 'Note', settings: 'Calendar settings' }[c.table] || c.table;
        const mine = c.refused ? ((c.body && c.body.text) || JSON.stringify(c.body || {})) : c.ours;
        const head = c.refused
            ? `${what} · refused`
            : `${what} · overwritten`;
        const why = c.refused
            ? `The server refused this write: ${REFUSALS[c.refused] || c.detail || 'it would not say why'} (${c.refused}).`
            : 'Another device changed this while your version was still queued, and theirs was kept.';
        return `<div class="conflict-card">
            <div class="conflict-head"><span>${escapeHtml(head)}</span><span class="conflict-when">${escapeHtml(conflictWhen(c.at))}</span></div>
            <div class="conflict-why">${escapeHtml(why)}</div>
            <div class="conflict-label">What you wrote</div>
            <div class="conflict-text">${escapeHtml(mine === undefined || mine === null ? '' : String(mine))}</div>
            ${c.theirs !== undefined ? `<div class="conflict-label">What is there now</div>
            <div class="conflict-text theirs">${escapeHtml(String(c.theirs))}</div>` : ''}
        </div>`;
    }
    function renderConflicts() {
        const log = conflictsNow();
        conflictBtn.style.display = log.length ? '' : 'none';
        conflictBtn.textContent = `Unsaved ${log.length}`;
        conflictBtn.title = `${log.length} write${log.length === 1 ? '' : 's'} that never landed — the text is kept here`;
        if (!log.length) { conflictPanel.style.display = 'none'; return; }
        if (conflictPanel.style.display === 'none') return;         // closed: nothing to draw
        conflictList.innerHTML = log.slice().reverse().map(conflictCard).join('');
    }
    function toggleConflictPanel(open) {
        const show = open === undefined ? conflictPanel.style.display === 'none' : open;
        conflictPanel.style.display = show ? 'block' : 'none';
        if (show) { conflictList.innerHTML = conflictsNow().slice().reverse().map(conflictCard).join(''); }
    }
    conflictBtn.addEventListener('click', () => toggleConflictPanel());
    document.getElementById('conflictClose').addEventListener('click', () => toggleConflictPanel(false));
    document.getElementById('conflictClear').addEventListener('click', () => {
        store.clearConflicts();
        toggleConflictPanel(false);
        renderConflicts();
    });
    document.addEventListener('keydown', ev => {
        if (ev.key === 'Escape' && conflictPanel.style.display !== 'none') toggleConflictPanel(false);
    });

    // ── Init ──
    function renderAll() {
        renderIdentity();
        renderConflicts();
        renderCalendar();
        renderTimeline();
        renderCurrentTab();
    }
    store.onChange(renderAll);
    renderIdentity();
    renderConflicts();
    calCursor = getToday();
    setFormDate(getToday());
    if (window.innerWidth < 1100) toggleCalPanel(true);
    renderCalendar();
    renderTimeline();
    store.start();
    console.log(`Seminarios Explorer initialized (${store.mode}${store.mode === 'remote' ? ', ' + API_BASE : ''})`);
})();
