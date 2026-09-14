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

    // ── Characters ──
    const CHARACTERS = {
        gondgieaux: { name: 'Gondgieaux', color: '#c9b882', cssClass: 'gondgieaux' },
        xghchli: { name: 'Xghchli', color: '#7ca7bf', cssClass: 'xghchli' },
        gm: { name: 'GM', color: '#a33', cssClass: 'gm' }
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

    // ── Storage ──
    const STORAGE_KEY = 'seminarios-explorer';
    const DEFAULT_START = toAbs(6329, 5, 1);   // 1 Gaoweihan 6329, the first day of spring
    const DEFAULT_SETTINGS = { era: 'common', campaignStart: DEFAULT_START, today: null };

    function normalizeData(data, fallbackSettings) {
        data = data && typeof data === 'object' ? data : {};
        data.events = Array.isArray(data.events) ? data.events : [];
        data.notes = data.notes && typeof data.notes === 'object' ? data.notes : {};
        data.settings = Object.assign({}, DEFAULT_SETTINGS, fallbackSettings || {}, data.settings || {});
        if (!CAL.eras[data.settings.era]) data.settings.era = 'common';
        // Migrate "day-N" events from the old ten-day placeholder calendar onto real dates,
        // counting from the campaign's first day.
        for (const e of data.events) {
            if (typeof e.date !== 'number' && typeof e.day === 'string') {
                const n = parseInt(e.day.split('-')[1], 10);
                e.date = data.settings.campaignStart + (isNaN(n) ? 0 : n - 1);
                delete e.day;
            }
            if (!CAL.timesOfDay.includes(e.time)) e.time = CAL.timesOfDay[0];
        }
        data.events = data.events.filter(e => typeof e.date === 'number');
        return data;
    }
    function loadData() {
        let raw = null;
        try { raw = JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { /* empty or corrupt */ }
        return normalizeData(raw);
    }
    const DATA = loadData();
    function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify(DATA)); }

    function getToday() {
        if (typeof DATA.settings.today === 'number') return DATA.settings.today;
        // Until "today" is set explicitly, it floats to the latest logged event.
        return DATA.events.reduce((m, e) => Math.max(m, e.date), DATA.settings.campaignStart);
    }
    function sortEvents(list) {
        return list.sort((a, b) => a.date - b.date
            || CAL.timesOfDay.indexOf(a.time) - CAL.timesOfDay.indexOf(b.time)
            || (a.timestamp || 0) - (b.timestamp || 0));
    }
    function eventsInRange(start, end) {
        return sortEvents(DATA.events.filter(e => e.date >= start && e.date <= end));
    }
    function getEvents(districtKey) {
        let events = DATA.events.filter(e => e.district === districtKey);
        if (selectedDay !== null) events = events.filter(e => e.date === selectedDay);
        return sortEvents(events);
    }
    // `districtKey` may be null for events that happen outside any district (travel, the open sea);
    // `place` is optional free text describing where.
    function addEvent(districtKey, date, time, text, character, place) {
        DATA.events.push({
            id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
            district: districtKey || null,
            place: place || undefined,
            date, time, text, character,
            timestamp: Date.now()
        });
        persist();
    }
    function eventPlaceLabel(e) {
        const district = DISTRICTS[e.district];
        if (district) return e.place ? `${district.name} · ${e.place}` : district.name;
        return e.place || 'Elsewhere';
    }
    function deleteEvent(eventId) {
        DATA.events = DATA.events.filter(e => e.id !== eventId);
        persist();
    }
    function getNotes(districtKey) { return DATA.notes[districtKey] || ''; }
    function saveNotes(districtKey, text) { DATA.notes[districtKey] = text; persist(); }

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
        const events = getEvents(currentDistrict);

        if (events.length === 0) {
            list.innerHTML = selectedDay === null
                ? '<div class="no-events">No events logged for this district yet.</div>'
                : `<div class="no-events">Nothing logged here on ${escapeHtml(formatDateShort(selectedDay))}.</div>`;
        } else {
            list.innerHTML = events.map(e => {
                const char = CHARACTERS[e.character] || CHARACTERS.gondgieaux;
                return `
                    <div class="event-item event-border-${char.cssClass}">
                        <div class="event-header">
                            <span class="event-date" title="${escapeHtml(formatDate(e.date))}">${escapeHtml(formatDateShort(e.date))}, ${e.time}${e.place ? ' · ' + escapeHtml(e.place) : ''}</span>
                            <span>
                                <span class="event-char char-${char.cssClass}">${char.name}</span>
                                <button class="event-delete" data-id="${e.id}" title="Delete">&times;</button>
                            </span>
                        </div>
                        <div class="event-text">${escapeHtml(e.text)}</div>
                    </div>
                `;
            }).join('');
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

        const date = getFormDate();
        const time = document.getElementById('eventTime').value;
        const character = document.getElementById('charSelect').value;

        addEvent(currentDistrict, date, time, text, character);
        document.getElementById('eventText').value = '';
        renderEvents();
        renderCalendar();
        renderTimeline();
    });

    // ── Notes ──
    function renderNotes() {
        const textarea = document.getElementById('notesText');
        textarea.value = getNotes(currentDistrict);
    }

    document.getElementById('notesText').addEventListener('input', debounce(() => {
        if (currentDistrict) {
            saveNotes(currentDistrict, document.getElementById('notesText').value);
        }
    }, 500));

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
        return '<span class="cal-dots">' + evs.map(e => {
            const char = CHARACTERS[e.character] || CHARACTERS.gondgieaux;
            return `<span class="cal-dot" style="background:${char.color}"></span>`;
        }).join('') + '</span>';
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
                const dayEvents = events.filter(e => e.date === abs);
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
                const count = events.filter(ev => ev.date >= s && ev.date <= e).length;
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
                const count = events.filter(ev => ev.date >= s && ev.date <= e).length;
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
                if (selectedDay === null && e.date !== lastDate) {
                    html += `<div class="agenda-day">${escapeHtml(formatDate(e.date))}</div>`;
                    lastDate = e.date;
                }
                const char = CHARACTERS[e.character] || CHARACTERS.gondgieaux;
                const inDistrict = !!DISTRICTS[e.district];
                html += `
                    <div class="agenda-item event-border-${char.cssClass}${inDistrict ? '' : ' no-district'}" data-district="${e.district || ''}" title="${char.name}${inDistrict ? ' · show on map' : ''}">
                        <div class="agenda-head">
                            <span class="agenda-district">${escapeHtml(eventPlaceLabel(e))}</span>
                            <span class="event-date">${e.time}<button class="agenda-delete" data-id="${e.id}" title="Delete">&times;</button></span>
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
            if (selectedDay !== null) document.getElementById('calLogText').focus();
        }
    });

    function renderLogForm() {
        const heading = document.getElementById('calLogHeading');
        const canLog = selectedDay !== null;
        heading.innerHTML = canLog
            ? `Log on <span>${escapeHtml(formatDateShort(selectedDay))}</span>`
            : 'Select a day above to log an event';
        document.getElementById('calLogAdd').disabled = !canLog;
        if (currentDistrict && !calLogDistrict.dataset.touched) calLogDistrict.value = currentDistrict;
    }
    calLogDistrict.addEventListener('change', () => { calLogDistrict.dataset.touched = '1'; });

    document.getElementById('calLogAdd').addEventListener('click', () => {
        const text = document.getElementById('calLogText').value.trim();
        if (!text || selectedDay === null) return;
        const district = calLogDistrict.value || null;
        const place = document.getElementById('calLogPlace').value.trim();
        const time = document.getElementById('calLogTime').value;
        const character = document.getElementById('charSelect').value;
        addEvent(district, selectedDay, time, text, character, place);
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
        setEra.value = s.era;
        document.getElementById('setTodayLabel').textContent =
            formatDateShort(getToday()) + (typeof s.today === 'number' ? '' : ' (auto)');
        document.getElementById('setTodayBtn').disabled = selectedDay === null || selectedDay === s.today;
        if (document.activeElement !== setStartYear) {
            writeDateFields(setStartMonth, setStartDay, setStartYear, s.campaignStart);
        }
    }

    setEra.addEventListener('change', () => {
        const formAbs = getFormDate();
        DATA.settings.era = setEra.value;
        persist();
        setFormDate(formAbs);
        if (selectedDay !== null) document.getElementById('timelineCurrent').textContent = formatDateShort(selectedDay);
        renderCalendar();
        renderTimeline();
        renderCurrentTab();
    });
    document.getElementById('setTodayBtn').addEventListener('click', () => {
        if (selectedDay === null) return;
        DATA.settings.today = selectedDay;
        persist();
        renderCalendar();
        renderTimeline();
    });
    [setStartMonth, setStartDay, setStartYear].forEach(el => el.addEventListener('change', () => {
        DATA.settings.campaignStart = readDateFields(setStartMonth, setStartDay, setStartYear);
        persist();
        renderCalendar();
        renderTimeline();
    }));

    // ── Timeline ──
    // Spans from the campaign's first day (or earliest event) to today (or latest event).
    function timelineRange() {
        let start = DATA.settings.campaignStart;
        let end = getToday();
        for (const e of DATA.events) {
            start = Math.min(start, e.date);
            end = Math.max(end, e.date);
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
            if (e.date < start || e.date > end) return;
            const timeIdx = Math.max(0, CAL.timesOfDay.indexOf(e.time));
            const pct = (e.date - start + (timeIdx + 0.5) / CAL.timesOfDay.length) / n * 100;
            const marker = document.createElement('div');
            marker.className = 'timeline-marker';
            const char = CHARACTERS[e.character] || CHARACTERS.gondgieaux;
            marker.style.background = char.color;
            marker.style.left = `calc(${pct}% - 4px)`;
            marker.title = `${char.name} · ${formatDateShort(e.date)} · ${eventPlaceLabel(e)}: ${e.text.slice(0, 50)}`;
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
                character: document.getElementById('charSelect').value,
                eventCount: DATA.events.length,
                notesCount: Object.keys(DATA.notes).length,
                calendar: { daysPerMonth: CAL.daysPerMonth, monthsPerYear: CAL.monthsPerYear, epoch: '1 Naoweihan, year 1 (common reckoning)' }
            }
        });
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `seminarios-${data._meta.character}-${new Date().toISOString().slice(0,10)}.json`;
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
                // Legacy "day-N" files are dated against this browser's campaign start.
                const incoming = normalizeData(raw, DATA.settings);
                // Merge events: add any with IDs we don't already have
                const existingIds = new Set(DATA.events.map(ev => ev.id));
                let added = 0;
                for (const ev of incoming.events) {
                    if (!existingIds.has(ev.id)) {
                        DATA.events.push(ev);
                        added++;
                    }
                }
                // Merge notes: incoming overwrites only if current is empty for that district
                for (const [district, note] of Object.entries(incoming.notes)) {
                    if (!DATA.notes[district] && note) {
                        DATA.notes[district] = note;
                    }
                }
                persist();
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

    // ── Init ──
    persist();                       // write back any migrated legacy events
    calCursor = getToday();
    setFormDate(getToday());
    if (window.innerWidth < 1100) toggleCalPanel(true);
    renderCalendar();
    renderTimeline();
    console.log('Seminarios Explorer initialized!');
})();
