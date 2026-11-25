/* Abandoned Places. Plain JavaScript, no build step or external runtime. */
const CATEGORIES = [
  {
    id: "hospitals",
    name: "Abandoned hospitals",
    short: "HOSPITALS",
    color: "sage",
  },
  {
    id: "amusement-parks",
    name: "Forgotten amusement parks",
    short: "AMUSEMENT PARKS",
    color: "salmon",
  },
  {
    id: "factories",
    name: "Empty factories",
    short: "FACTORIES",
    color: "steel",
  },
  {
    id: "railway-stations",
    name: "Old railway stations",
    short: "RAILWAY STATIONS",
    color: "sky",
  },
  { id: "hotels", name: "Abandoned hotels", short: "HOTELS", color: "peach" },
  {
    id: "villages",
    name: "Deserted villages",
    short: "VILLAGES",
    color: "lime",
  },
  {
    id: "military",
    name: "Forgotten military structures",
    short: "MILITARY STRUCTURES",
    color: "periwinkle",
  },
];
const PLACES = [
  {
    id: "beelitz",
    number: "01",
    name: "Beelitz-Heilstätten",
    category: "hospitals",
    location: "Brandenburg, Germany",
    country: "Germany",
    period: "Sanatorium opened 1902",
    photoAlt:
      "Peeling paint, rubble and an open window in a disused Beelitz-Heilstätten room",
    title: "When the rooms fall quiet.",
    summary:
      "Beyond the peeling paint: a former sanatorium, and the traces of lives spent inside it.",
    source: "https://www.beelitz-heilstaetten.de/ortsteil/",
    sourceLabel: "Beelitz-Heilstätten local history",
    history:
      "The men’s sanatorium at Beelitz opened in 1902. Built in the woodland outside Berlin, the complex belongs to a period when the architecture of care placed great importance on fresh air, space and light.",
    observation:
      "In Wendelin Jacober’s 2015 photograph, a single window illuminates a floor scattered with fallen plaster. The paint has separated into layers; the room’s original purpose is harder to read than its slow transformation. This is a record of a particular room at a particular moment, rather than a description of the entire complex today.",
    note: "The wider complex includes reused and visitor-managed areas. The archival image does not describe every building or establish current access.",
  },
  {
    id: "spreepark",
    number: "02",
    name: "Spreepark",
    category: "amusement-parks",
    location: "Berlin, Germany",
    country: "Germany",
    period: "Park opened 1969",
    photoAlt:
      "Aerial photograph of Spreepark and its Ferris wheel surrounded by woodland",
    title: "The fairground between the trees.",
    summary:
      "A Ferris wheel above the canopy. A former amusement park held in a moment of transition.",
    source: "https://en.wikipedia.org/wiki/Spreepark",
    sourceLabel: "Spreepark history and references",
    history:
      "Spreepark began in 1969 as Kulturpark Plänterwald in East Berlin. Its later life as Spreepark ended with the closure of the amusement business in 2001. The site subsequently became the subject of plans for a different kind of public park.",
    observation:
      "A.Savin’s aerial photographs from 2017 show the park from above. The geometry of the rides is interrupted by the canopy, and the Ferris wheel remains a clear landmark. Seen from this distance, the fairground reads as a collection of shapes inside a much larger landscape.",
    note: "These are archival photographs from 2017. The former park has been undergoing redevelopment; consult its operator for present conditions.",
  },
  {
    id: "packard",
    number: "03",
    name: "Packard Automotive Plant",
    category: "factories",
    location: "Detroit, United States",
    country: "United States",
    period: "Plant opened 1903",
    photoAlt:
      "Archival view of the abandoned Packard Automotive Plant in Detroit",
    title: "After the assembly line.",
    summary:
      "An industrial building after production: open floors, exposed structure and the scale of work.",
    source: "https://en.wikipedia.org/wiki/Packard_Automotive_Plant",
    sourceLabel: "Packard Automotive Plant history and references",
    history:
      "The Packard Automotive Plant opened in Detroit in 1903. Its buildings were associated with architect Albert Kahn and the development of reinforced-concrete industrial construction. Automotive production at the complex ended in the 1950s.",
    observation:
      "The photographs preserve the plant after its manufacturing life. Structure becomes the subject: repeated columns, long sightlines and the spaces between them. Those empty volumes once organised the movement of people, parts and finished cars.",
    note: "This entry preserves historical photographs. The site has undergone demolition; these images should not be treated as a current site survey.",
  },
  {
    id: "anhalter",
    number: "04",
    name: "Anhalter Bahnhof",
    category: "railway-stations",
    location: "Berlin, Germany",
    country: "Germany",
    period: "Original station opened 1841",
    photoAlt: "The surviving brick entrance ruin of Anhalter Bahnhof in Berlin",
    title: "An entrance without a station.",
    summary:
      "A fragment of a railway terminus holds the outline of a vanished building.",
    source: "https://en.wikipedia.org/wiki/Anhalter_Bahnhof",
    sourceLabel: "Anhalter Bahnhof history and references",
    history:
      "Anhalter Bahnhof was one of Berlin’s major railway termini. Severely damaged during the Second World War, it closed to mainline traffic in 1952. Most of the station was demolished, leaving part of the entrance façade.",
    observation:
      "The surviving fragment makes absence unusually legible. An entrance normally promises a space beyond it; here, the architectural threshold has become the object itself. The photograph records that tension between the scale of the fragment and the building it once introduced.",
    note: "This entry concerns the historic mainline terminus, rather than the functioning S-Bahn station that shares its name.",
  },
  {
    id: "haludovo",
    photos: "hachijo",
    number: "05",
    name: "Haludovo Palace Hotel",
    category: "hotels",
    location: "Malinska, Croatia",
    country: "Croatia",
    period: "Hotel opened 1972",
    photoAlt:
      "The disused lobby of Haludovo Palace Hotel, with exposed concrete and broken surfaces",
    title: "The holiday is over.",
    summary:
      "A modernist hotel on the Adriatic, photographed long after its guests departed.",
    source: "https://en.wikipedia.org/wiki/Haludovo_Palace_Hotel",
    sourceLabel: "Haludovo Palace Hotel history and references",
    history:
      "Haludovo Palace Hotel opened on the Croatian island of Krk in 1972. Designed by Boris Magaš, the resort joined ambitious modernist architecture with the leisure culture of the Adriatic coast. The Palace Hotel later ceased operating.",
    observation:
      "The lobby photograph concentrates on what a hotel leaves behind: the scale of gathering spaces, routes between levels and the architectural promise of a shared holiday. Without furniture and guests, those arrangements become more visible.",
    note: "The photograph documents the Palace Hotel ruin. It does not imply that every building in the wider resort is abandoned or publicly accessible.",
  },
  {
    id: "craco",
    number: "06",
    name: "Craco",
    category: "villages",
    location: "Basilicata, Italy",
    country: "Italy",
    period: "Historic hilltop settlement",
    photoAlt: "The old hilltop village of Craco above the hills of Basilicata",
    title: "A village on borrowed ground.",
    summary:
      "Stone houses and a hilltop silhouette: the old settlement of Craco, seen from a distance.",
    source: "https://en.wikipedia.org/wiki/Craco",
    sourceLabel: "Craco history and references",
    history:
      "The old settlement of Craco stands on a hill in Basilicata, southern Italy. Landslides prompted residents to relocate from the historic centre in the 1960s. Subsequent natural hazards contributed to its abandonment.",
    observation:
      "From a distance the village retains a coherent silhouette. The roofs, walls and tower still suggest the density of an inhabited settlement. Photography can preserve that appearance, while the history reminds us that leaving was a matter of safety and displacement.",
    note: "The abandoned historic centre is distinct from the modern municipality and its inhabited areas. Check official arrangements for any visit.",
  },
  {
    id: "teufelsberg",
    number: "07",
    name: "Teufelsberg Field Station",
    category: "military",
    location: "Berlin, Germany",
    country: "Germany",
    period: "Former Cold War listening station",
    photoAlt:
      "The distinctive white radomes of the former Teufelsberg listening station",
    title: "Listening to the silence.",
    summary:
      "The unmistakable radomes of a former intelligence station above Berlin.",
    source: "https://en.wikipedia.org/wiki/Teufelsberg",
    sourceLabel: "Teufelsberg history and references",
    history:
      "During the Cold War, Teufelsberg was the location of an American listening station in West Berlin. The station stood on a hill built from wartime rubble. Its distinctive radomes outlasted the intelligence operation they once served.",
    observation:
      "The photographs emphasise an architecture made to contain instruments rather than to announce itself. Yet the rounded radomes have become the site’s most recognisable visual feature. Their silhouette gives a visible form to a former activity that was largely invisible.",
    note: "The former station has since acquired cultural and visitor uses. This archive records its earlier military purpose and later appearance.",
  },
];
PLACES.push(...ADDITIONAL_PLACES);
const COUNTRIES = [...new Set(PLACES.map((p) => p.country))].sort();
const $ = (s) => document.querySelector(s);
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const cat = (p) => CATEGORIES.find((c) => c.id === p.category);
const photos = (p) => PHOTOS[p.photos || p.id] || [];
const photo = (p) => photos(p)[0];
const dateLabel = (ph) => ph.displayDate || ph.date || "Date not recorded";
const tint = (p) => `var(--${cat(p).color})`;
let saved = new Set();
try {
  const s = JSON.parse(localStorage.getItem("abandoned-places-saved") || "[]");
  if (Array.isArray(s))
    saved = new Set(s.filter((id) => PLACES.some((p) => p.id === id)));
} catch {}
let archiveState = {
  category: "all",
  country: "all",
  search: "",
  sort: "index",
  view: "grid",
  saved: false,
};
let viewerPlace = null,
  viewerIndex = 0,
  viewerTrigger = null;
function updateSaved() {
  $("#saved-count").textContent = saved.size;
  try {
    localStorage.setItem("abandoned-places-saved", JSON.stringify([...saved]));
  } catch {}
}
function saveButton(p) {
  return `<button class="save" data-save="${p.id}" aria-label="${saved.has(p.id) ? "Unsave" : "Save"} ${esc(p.name)}" aria-pressed="${saved.has(p.id)}">${saved.has(p.id) ? "▣" : "⊞"}</button>`;
}
function card(p) {
  return `<article class="place-card"><a class="card-image" href="#/place/${p.id}" aria-label="Explore ${esc(p.name)}"><img src="${photo(p).src}" alt="${esc(p.photoAlt)}" loading="lazy"><span class="card-index">PLATE ${p.number}</span></a><div class="ribbon-title"><h3><a href="#/place/${p.id}">${esc(p.name)}</a></h3>${saveButton(p)}</div><div class="ribbon-body" style="background:${tint(p)}"><span>${esc(p.location)}</span><span class="label">${cat(p).short}</span></div></article>`;
}
function categoryIndex() {
  return `<div class="category-index">${CATEGORIES.map((c, i) => `<a class="category-row" href="#/archive?category=${c.id}"><span class="category-title">0${i + 1} / ${c.short}</span><span class="category-body" style="background:var(--${c.color})"><span>${esc(c.name)}</span><span aria-hidden="true">↗</span></span></a>`).join("")}<a class="category-row" href="#/archive"><span class="category-title">THE COMPLETE INDEX</span><span class="category-body"><span>Enter the archive</span><span aria-hidden="true">→</span></span></a></div>`;
}
function home() {
  const p = PLACES[0];
  return `<div class="eyebrow"><span>DOCUMENTING ABSENCE. PRESERVING MEMORY.</span><span>THE OPEN INDEX / FIELD NOTES</span></div><div class="intro"><h1>PLACES LEFT BEHIND.</h1><p>A photographic record of deserted spaces.<br>Look through the windows. Read between the walls.</p></div><section class="feature" aria-label="Featured place"><figure class="feature-photo"><a href="#/place/${p.id}"><img src="${photo(p).src}" alt="${esc(p.photoAlt)}" fetchpriority="high"><span class="plate-label">FROM THE ARCHIVE / PLATE 01</span><span class="photo-bottom"><span>BEELITZ-HEILSTÄTTEN, GERMANY</span><span>PHOTOGRAPHED 2015 ↗</span></span></a></figure><div class="feature-copy"><div class="tag">FOCUS / ABANDONED HOSPITALS</div><h2>WHEN THE<br>ROOMS FALL<br>QUIET.</h2><span class="meta">BEELITZ-HEILSTÄTTEN · GERMANY</span><p>${p.summary}</p><a class="button" href="#/place/${p.id}">OPEN THE FILE <span aria-hidden="true">↗</span></a></div></section><section aria-labelledby="browse-heading"><div class="section-bar"><h2 id="browse-heading">01 / BROWSE BY FORMER LIFE</h2><span>Choose a way in ↓</span></div>${categoryIndex()}</section><section aria-labelledby="selected-heading"><div class="section-bar"><h2 id="selected-heading">02 / SELECTED FROM THE ARCHIVE</h2><a class="text-link" href="#/archive">VIEW ALL PLACES ↗</a></div><div class="places-grid">${[
    "kolmanskop",
    "hashima",
    "humberstone",
  ]
    .map((id) => PLACES.find((p) => p.id === id))
    .map(card)
    .join(
      "",
    )}</div></section><section aria-labelledby="countries-heading"><div class="section-bar"><h2 id="countries-heading">03 / PLACES ACROSS BORDERS</h2><span>Browse by country ↓</span></div><div class="country-index">${COUNTRIES.map((country) => `<a href="#/archive?country=${encodeURIComponent(country)}">${esc(country)} <span aria-hidden="true">↗</span></a>`).join("")}</div></section><aside class="field-note"><h2>LOOK CLOSELY.<br>LEAVE LIGHTLY.</h2><div><p>These places were part of someone’s everyday life. We document their traces with context, care and credit.</p><a class="text-link" href="#/about">OUR APPROACH ↗</a></div></aside>`;
}
function archive() {
  return `<div class="eyebrow"><span>HOME / THE ARCHIVE</span><span>A LIBRARY, ONE PLACE AT A TIME</span></div><div class="page-heading"><h1>${archiveState.saved ? "YOUR SAVED PLACES." : "THE ARCHIVE."}</h1><p>Find a place by its name, country or former life.</p></div><div class="archive-layout"><aside class="filters" aria-label="Filter by category"><h2>FORMER LIFE</h2><button class="filter" data-category="all" aria-pressed="${archiveState.category === "all"}">ALL PLACES</button>${CATEGORIES.map((c) => `<button class="filter" data-category="${c.id}" aria-pressed="${archiveState.category === c.id}"><span class="swatch" style="background:var(--${c.color})"></span>${c.short}</button>`).join("")}<div class="country-filter"><label class="label" for="country-filter">COUNTRY</label><select id="country-filter"><option value="all">All countries</option>${COUNTRIES.map((country) => `<option value="${esc(country)}" ${archiveState.country === country ? "selected" : ""}>${esc(country)}</option>`).join("")}</select></div><p>Our photographs record a moment in time. Places can change, disappear or find a new use.</p></aside><section aria-label="Archive results"><form class="searchbar" id="search-form" role="search"><input id="archive-search" type="search" aria-label="Search places" placeholder="Search a place, a country, a memory…" value="${esc(archiveState.search)}"><button type="submit">FIND →</button></form><div class="results-toolbar"><span id="result-count" role="status"></span><div><label for="sort">Order </label><select id="sort"><option value="index">Archive number</option><option value="name">Name A–Z</option><option value="country">Country A–Z</option></select></div><div role="group" aria-label="Display results"><button class="view-button" data-view="grid" aria-pressed="${archiveState.view === "grid"}">▦ GRID</button><button class="view-button" data-view="list" aria-pressed="${archiveState.view === "list"}">≡ LIST</button></div></div>${archiveState.saved ? '<p>Saved on this device. <a href="#/archive">Browse all places →</a></p>' : ""}<div id="archive-results" class="places-grid archive-grid ${archiveState.view === "list" ? "list" : ""}"></div></section></div>`;
}
function renderResults() {
  let results = PLACES.filter(
    (p) =>
      (archiveState.category === "all" ||
        p.category === archiveState.category) &&
      (archiveState.country === "all" || p.country === archiveState.country) &&
      (!archiveState.saved || saved.has(p.id)) &&
      `${p.name} ${p.location} ${cat(p).name}`
        .toLowerCase()
        .includes(archiveState.search.toLowerCase().trim()),
  );
  if (archiveState.sort === "name")
    results.sort((a, b) => a.name.localeCompare(b.name));
  if (archiveState.sort === "country")
    results.sort((a, b) => a.country.localeCompare(b.country));
  $("#result-count").textContent =
    `${results.length} ${results.length === 1 ? "place" : "places"} in this selection`;
  $("#archive-results").innerHTML = results.length
    ? results.map(card).join("")
    : `<div class="empty"><h2>NOTHING HERE. YET.</h2><p>${archiveState.saved ? "Save a place using the ⊞ beside its name." : "Try a different name or explore another category."}</p><button class="button" data-reset>RESET FILTERS →</button></div>`;
  $("#archive-results").classList.toggle("list", archiveState.view === "list");
}
function credit(ph) {
  return `${esc(ph.artist)} · <a href="${esc(ph.licenseUrl)}" target="_blank" rel="noopener">${esc(ph.license)}</a> · <a href="${esc(ph.page)}" target="_blank" rel="noopener">Original photograph ↗</a>`;
}
function detail(p, isStory) {
  let ph = photo(p);
  return `<div class="eyebrow"><span><a href="#/archive">THE ARCHIVE</a> / ${cat(p).short} / FILE ${p.number}</span><span>PHOTOGRAPHIC RECORD</span></div><div class="detail-heading"><div><span class="label">${cat(p).name.toUpperCase()}</span><h1>${esc(p.name.toUpperCase())}</h1><p>${esc(p.location)}</p></div><div>${saveButton(p)} <button class="button white" id="print-place">PRINT FILE ↗</button></div></div><div class="detail-layout"><div><figure class="detail-main-photo"><button data-photo="0" data-place="${p.id}" aria-label="Enlarge photograph of ${esc(p.name)}"><img src="${ph.src}" alt="${esc(p.photoAlt)}"></button><figcaption><span>PLATE ${p.number}.01 / ${esc(dateLabel(ph))}</span><span>SELECT TO ENLARGE ↗</span></figcaption></figure><nav class="detail-tabs" aria-label="Place sections"><a href="#/place/${p.id}" ${!isStory ? 'aria-current="page"' : ""}>LOCATION FILE</a><a href="#/story/${p.id}" ${isStory ? 'aria-current="page"' : ""}>THE STORY</a><a href="#/place/${p.id}/photographs">PHOTOGRAPHS ↓</a></nav><article class="article">${isStory ? `<span class="label">A STORY FROM THE ARCHIVE / ${p.number}</span><h2 style="margin-top:16px">${esc(p.title)}</h2><p class="lead">${esc(p.summary)}</p><p>${esc(p.history)}</p><h2 style="margin-top:28px">Reading the photograph</h2><p>${esc(p.observation)}</p>` : `<h2>A place, in context.</h2><p class="lead">${esc(p.summary)}</p><p>${esc(p.history)}</p><a class="button" href="#/story/${p.id}">READ THE PLACE’S STORY <span aria-hidden="true">↗</span></a>`}<p class="source-note">Historical source: <a href="${p.source}" target="_blank" rel="noopener">${p.sourceLabel} ↗</a>. Photographic observations are editorial descriptions, not eyewitness accounts.</p></article><section id="photographs" aria-labelledby="photos-heading"><div class="section-bar"><h2 id="photos-heading">PHOTOGRAPH PLATES</h2><span>${photos(p).length} ${photos(p).length === 1 ? "photograph" : "photographs"}</span></div><div class="photo-grid">${photos(
    p,
  )
    .map(
      (x, i) =>
        `<figure><button data-photo="${i}" data-place="${p.id}" aria-label="Enlarge plate ${p.number}.${i + 1}"><img src="${x.src}" loading="lazy" alt="${esc(i === 0 ? p.photoAlt : x.caption || x.title.replace(/\.(jpg|jpeg)$/i, ""))}"></button><figcaption>PLATE ${p.number}.0${i + 1} · ${esc(dateLabel(x))}${x.caption ? `<br><strong>${esc(x.caption)}</strong>` : ""}<br>${credit(x)}</figcaption></figure>`,
    )
    .join(
      "",
    )}</div></section></div><aside class="detail-aside"><h2 style="background:${tint(p)}">FIELD RECORD / ${p.number}</h2><dl><dt>PLACE</dt><dd>${esc(p.name)}</dd><dt>LOCATION</dt><dd>${esc(p.location)}</dd><dt>FORMER LIFE</dt><dd>${esc(cat(p).name)}</dd><dt>HISTORICAL CONTEXT</dt><dd>${esc(p.period)}</dd><dt>PHOTOGRAPHER</dt><dd>${esc(ph.artist)}</dd></dl><p>${esc(p.note)}</p><p>Photographs are historical records, not an invitation to enter. Obtain permission and follow local access rules.</p></aside></div><div class="section-bar"><h2>CONTINUE THROUGH THE ARCHIVE</h2><a class="text-link" href="#/place/${PLACES[(PLACES.indexOf(p) + 1) % PLACES.length].id}">NEXT FILE →</a></div>`;
}
function stories() {
  return `<div class="eyebrow"><span>HOME / STORIES</span><span>THE HUMAN SIDE OF EMPTY SPACE</span></div><div class="page-heading" style="background:var(--salmon)"><h1>BETWEEN THE WALLS.</h1><p>Histories and photographic observations from the archive.</p></div>${PLACES.map((p) => `<article class="story-row"><span class="story-number">${p.number}</span><div class="story-copy"><span class="meta">${cat(p).short} / ${esc(p.location.toUpperCase())}</span><h2><a href="#/story/${p.id}" style="color:black">${esc(p.title)}</a></h2><p>${esc(p.summary)}</p><a class="text-link" href="#/story/${p.id}">READ THE STORY ↗</a></div><a href="#/story/${p.id}" aria-label="Read about ${esc(p.name)}"><img src="${photo(p).src}" alt="${esc(p.photoAlt)}" loading="lazy"></a></article>`).join("")}`;
}
function about() {
  return `<div class="eyebrow"><span>HOME / ABOUT THE PROJECT</span><span>A RECORD OF WHAT REMAINS</span></div><div class="page-heading" style="background:var(--sky)"><h1>EVERY PLACE WAS SOMEWHERE.</h1><p>About Abandoned Places.</p></div><div class="about-layout"><article class="article"><p class="lead">Before a place was abandoned, it was ordinary. Someone worked here. Someone arrived, recovered, stayed the night, or called it home.</p><p>Abandoned Places is a photographic library of deserted buildings and landscapes. It brings hospitals, amusement parks, factories, railway stations, hotels, villages and military structures into a single, browsable index.</p><h2 id="ethics">Look closely. Leave lightly.</h2><p>We pair photographs with short histories and sources. We credit the people who made each image. We distinguish what a photograph shows from what is known about a place.</p><p>Abandonment is a chapter, not a permanent identity. Some places in this archive have been reused, restored or demolished. The photographs describe the time they were made; they do not promise that a place looks the same today.</p><h2>About this edition</h2><p>This growing edition brings together sourced records from Africa, Asia, Europe, North America and South America. Saved places stay in your browser. There are no accounts, tracking scripts, invented testimonials or visitor statistics.</p></article><aside class="about-poster"><span class="label">THE ARCHIVE’S APPROACH</span><strong>DOCUMENT.<br>CONTEXTUALISE.<br>REMEMBER.</strong><p>Not a collection of empty buildings.<br>A way of looking at what remains.</p><a class="button" href="#/archive">EXPLORE THE INDEX ↗</a></aside></div><section class="credits" id="credits"><h2>PHOTOGRAPHY & SOURCE CREDITS</h2><p>Images are presented with crops in the catalogue; the viewer shows the full photograph. Follow each original for the complete file and licensing details.</p>${PLACES.map(
    (p) =>
      `<div class="credit-row"><div><strong>${esc(p.name)}</strong><br><a href="${p.source}" target="_blank" rel="noopener">Historical source ↗</a></div><div>${photos(
        p,
      )
        .map((ph) => `<p>${esc(ph.title)}<br>${credit(ph)}</p>`)
        .join("<br>")}</div></div>`,
  ).join("")}</section>`;
}
function route() {
  const raw = location.hash.slice(1) || "/";
  const [path, query = ""] = raw.split("?");
  const args = path.split("/").filter(Boolean);
  const params = new URLSearchParams(query);
  let section = args[0] || "home";
  let html, title;
  const p = PLACES.find((p) => p.id === args[1]);
  if (section === "archive") {
    archiveState.category = CATEGORIES.some(
      (c) => c.id === params.get("category"),
    )
      ? params.get("category")
      : "all";
    archiveState.saved = params.get("saved") === "1";
    archiveState.country = COUNTRIES.includes(params.get("country"))
      ? params.get("country")
      : "all";
    html = archive();
    title = archiveState.saved ? "Saved places" : "The archive";
  } else if (section === "stories") {
    html = stories();
    title = "Stories";
  } else if (section === "about") {
    html = about();
    title = "About the project";
  } else if ((section === "place" || section === "story") && p) {
    html = detail(p, section === "story");
    title = `${p.name}${section === "story" ? " - The story" : ""}`;
  } else if (section === "home") {
    html = home();
    title = "A photographic library";
  } else {
    html =
      '<div class="page-heading"><h1>404 - FILE NOT FOUND</h1><p>The place you requested is not in this edition.</p></div><a class="button" href="#/archive">RETURN TO THE ARCHIVE →</a>';
    title = "File not found";
  }
  $("#content").innerHTML = html;
  document.title = `${title} - Abandoned Places`;
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const active =
      a.dataset.nav ===
      (section === "place"
        ? "archive"
        : section === "story"
          ? "stories"
          : section);
    if (active) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  if (section === "archive") {
    renderResults();
    $("#sort").value = archiveState.sort;
    $("#country-filter").addEventListener("change", (e) => {
      archiveState.country = e.target.value;
      renderResults();
    });
    $("#search-form").addEventListener("submit", (e) => {
      e.preventDefault();
      archiveState.search = $("#archive-search").value;
      renderResults();
    });
    $("#archive-search").addEventListener("input", (e) => {
      archiveState.search = e.target.value;
      renderResults();
    });
    $("#sort").addEventListener("change", (e) => {
      archiveState.sort = e.target.value;
      renderResults();
    });
  }
  updateSaved();
  if (args[2] === "photographs") $("#photographs")?.scrollIntoView();
  else if (section === "about" && args[1] === "ethics")
    $("#ethics")?.scrollIntoView();
  else window.scrollTo(0, 0);
}
function showPhoto(p, index) {
  viewerPlace = p;
  viewerIndex = (index + photos(p).length) % photos(p).length;
  const ph = photos(p)[viewerIndex];
  $("#viewer-title").textContent =
    `${p.name.toUpperCase()} / PLATE ${p.number}.0${viewerIndex + 1}`;
  $("#viewer-image").src = ph.src;
  $("#viewer-image").alt =
    ph.caption || (viewerIndex === 0 ? p.photoAlt : ph.title);
  $("#viewer-caption").textContent =
    `${viewerIndex + 1} / ${photos(p).length} · ${dateLabel(ph)}`;
  $("#viewer-credit").innerHTML = credit(ph);
  $("#prev-photo").disabled = $("#next-photo").disabled = photos(p).length < 2;
  if (!$("#viewer").open) $("#viewer").showModal();
}
document.addEventListener("click", (e) => {
  const s = e.target.closest("[data-save]");
  if (s) {
    const id = s.dataset.save;
    if (saved.has(id)) saved.delete(id);
    else saved.add(id);
    updateSaved();
    const p = PLACES.find((x) => x.id === id);
    document.querySelectorAll(`[data-save="${id}"]`).forEach((b) => {
      b.setAttribute("aria-pressed", String(saved.has(id)));
      b.setAttribute(
        "aria-label",
        `${saved.has(id) ? "Unsave" : "Save"} ${p.name}`,
      );
      b.textContent = saved.has(id) ? "▣" : "⊞";
    });
    if (archiveState.saved && $("#archive-results")) renderResults();
  }
  const f = e.target.closest("[data-category]");
  if (f) {
    archiveState.category = f.dataset.category;
    document
      .querySelectorAll("[data-category]")
      .forEach((b) => b.setAttribute("aria-pressed", String(b === f)));
    renderResults();
  }
  const v = e.target.closest("[data-view]");
  if (v) {
    archiveState.view = v.dataset.view;
    document
      .querySelectorAll("[data-view]")
      .forEach((b) => b.setAttribute("aria-pressed", String(b === v)));
    renderResults();
  }
  if (e.target.closest("[data-reset]")) {
    archiveState.category = "all";
    archiveState.country = "all";
    $("#country-filter").value = "all";
    archiveState.search = "";
    $("#archive-search").value = "";
    document
      .querySelectorAll("[data-category]")
      .forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.category === "all")),
      );
    renderResults();
  }
  const ph = e.target.closest("[data-photo]");
  if (ph) {
    viewerTrigger = ph;
    showPhoto(
      PLACES.find((p) => p.id === ph.dataset.place),
      Number(ph.dataset.photo),
    );
  }
  if (e.target.closest("#print-place")) window.print();
});
$("#close-viewer").addEventListener("click", () => $("#viewer").close());
$("#viewer").addEventListener("close", () => viewerTrigger?.focus());
$("#prev-photo").addEventListener("click", () =>
  showPhoto(viewerPlace, viewerIndex - 1),
);
$("#next-photo").addEventListener("click", () =>
  showPhoto(viewerPlace, viewerIndex + 1),
);
$("#viewer").addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    showPhoto(viewerPlace, viewerIndex - 1);
  }
  if (e.key === "ArrowRight") {
    e.preventDefault();
    showPhoto(viewerPlace, viewerIndex + 1);
  }
});
$("#viewer").addEventListener("click", (e) => {
  if (e.target === $("#viewer")) $("#viewer").close();
});
window.addEventListener("hashchange", route);
route();
