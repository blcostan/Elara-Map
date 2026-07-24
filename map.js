// Initialize map centered over downtown Raleigh
const map = L.map('map', {
    zoomControl: false
}).setView([35.775, -78.650], 13);

// Add CartoDB Dark Matter No-Labels basemap
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    subdomains: 'abcd',
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

// 1. Spire District Boundary Coordinates
const spireCoords = [
    [35.804623, -78.623870], [35.792988, -78.624918], [35.792937, -78.612899],
    [35.769760, -78.614413], [35.757857, -78.612825], [35.753120, -78.623897],
    [35.754583, -78.638917], [35.754625, -78.642027], [35.770438, -78.648150],
    [35.774372, -78.655836], [35.777774, -78.650595], [35.778192, -78.650526],
    [35.788695, -78.651009], [35.788580, -78.643067], [35.804518, -78.623968]
];

// Render Spire District (Cyan theme)
const spirePolygon = L.polygon(spireCoords, {
    color: "#00f0ff", weight: 3, dashArray: '6, 6',
    fillColor: "#00f0ff", fillOpacity: 0.12
}).addTo(map);

spirePolygon.bindPopup(`<strong>SECTOR: SPIRE DISTRICT</strong>`);

const spireCenter = spirePolygon.getBounds().getCenter();
const spireMarker = L.marker(spireCenter, {
    icon: L.divIcon({
        className: 'scifi-label-spire', html: 'SPIRE DISTRICT', iconSize: [0, 0]
    })
}).addTo(map);

// 2. Green District Boundary Coordinates
const greenCoords = [
    [35.757379, -78.665168], [35.756508, -78.659847], [35.754784, -78.655040],
    [35.753339, -78.651349], [35.752938, -78.649096], [35.754625, -78.642027],
    [35.770438, -78.648150], [35.774372, -78.655836], [35.777774, -78.650595],
    [35.778192, -78.650526], [35.788695, -78.651009], 
    [35.780953, -78.650566], [35.781101, -78.652045], [35.782196, -78.654488],
    [35.782701, -78.655254], [35.783673, -78.656665], [35.784381, -78.658311],
    [35.785345, -78.660508], [35.786128, -78.662385], [35.787863, -78.668862],
    [35.788682, -78.672191], [35.790478, -78.679075], [35.793469, -78.684431],
    [35.788423, -78.686798], [35.775556, -78.680922], [35.773335, -78.683289],
    [35.769294, -78.691066], [35.769123, -78.691268], [35.759764, -78.690935],
    [35.754413, -78.694246], [35.753638, -78.694550], [35.752037, -78.694747],
    [35.754893, -78.679786], [35.756769, -78.670554], [35.757326, -78.665232]
];

// Render Green District (Neon Green theme)
const greenPolygon = L.polygon(greenCoords, {
    color: "#28a745", weight: 3, dashArray: '6, 6',
    fillColor: "#28a745", fillOpacity: 0.12
}).addTo(map);

greenPolygon.bindPopup(`<strong>SECTOR: GREEN DISTRICT</strong>`);

const greenCenter = greenPolygon.getBounds().getCenter();
const adjustedGreenCenter = [greenCenter.lat - 0.008, greenCenter.lng + 0.0];

const greenMarker = L.marker(adjustedGreenCenter, {
    icon: L.divIcon({
        className: 'scifi-label-green', html: 'GREEN DISTRICT', iconSize: [0, 0]
    })
}).addTo(map);

// 3. Sumptown Boundary Coordinates
const sumptownCoords = [
    [35.75780993474421, -78.61280301624038], [35.76981382377968, -78.61443431358302],
    [35.77076589778483, -78.61172373176922], [35.7710096366165, -78.61075813663008],
    [35.771061866268965, -78.60818321625906], [35.771035751447016, -78.60714251927578],
    [35.771061866271864, -78.60458905567752], [35.77138394837071, -78.60274369607828],
    [35.772054223151194, -78.6011880150208], [35.7722718436183, -78.60065157327683],
    [35.77261133035784, -78.59906370571471], [35.77235018684068, -78.59799082222679],
    [35.77182789723571, -78.59616691936726], [35.77148840715171, -78.59451467879587],
    [35.771949765117476, -78.59292681123374], [35.772515577836465, -78.59151060502968],
    [35.77264614945426, -78.59082395897302], [35.77235831744404, -78.58549144225545],
    [35.77202705893353, -78.58444522009997], [35.77112644284386, -78.58324589166106],
    [35.76983243641054, -78.5820975990514], [35.768424533432345, -78.57949480207363],
    [35.76787585863594, -78.57690476429848], [35.76790691580093, -78.5742381736827],
    [35.7679089212448, -78.57417198368348], [35.761888550283054, -78.5747030339163],
    [35.75830925788647, -78.57659671392976], [35.756785573836844, -78.5778412904846],
    [35.754748226341334, -78.58089900873085], [35.75386013546752, -78.58333445474182],
    [35.75339873349045, -78.58878467035257], [35.75334711169578, -78.59122349178183],
    [35.754506782725905, -78.59818980028047], [35.757547368962925, -78.60660214172542],
    [35.75752937590674, -78.60658119192838], [35.75780798086611, -78.61280391615834]
];

// Render Sumptown (Polluted Indigo/Violet theme)
const sumptownPolygon = L.polygon(sumptownCoords, {
    color: "#a855f7", weight: 3, dashArray: '6, 6',
    fillColor: "#a855f7", fillOpacity: 0.12
}).addTo(map);

sumptownPolygon.bindPopup(`<strong>SECTOR: SUMPTOWN</strong>`);

const sumptownCenter = sumptownPolygon.getBounds().getCenter();
const sumptownMarker = L.marker(sumptownCenter, {
    icon: L.divIcon({
        className: 'scifi-label-sumptown', html: 'SUMPTOWN', iconSize: [0, 0]
    })
}).addTo(map);

// 4. Downtown District Boundary Coordinates (With added transition point before closing back to the first point)
const downtownCoords = [
    [35.78094518805033, -78.65057234059867],
    [35.780953, -78.650566],                 
    [35.781101, -78.652045],
    [35.782196, -78.654488],
    [35.782701, -78.655254],
    [35.783673, -78.656665],
    [35.784381, -78.658311],
    [35.785345, -78.660508],
    [35.786128, -78.662385],
    [35.787863, -78.668862],
    [35.788682, -78.672191],
    [35.78950736145439, -78.67592941986129],
    [35.79128143315624, -78.67581007024339],
    [35.79344752581452, -78.6757038601968],
    [35.794222874176995, -78.67579489737957],
    [35.79525666022489, -78.67590110742614],
    [35.79638888665428, -78.67621973756583],
    [35.79689346068792, -78.67637146615867],
    [35.797865679550206, -78.67670526916216],
    [35.7992070759173, -78.67646250334144],
    [35.80005620503034, -78.67623491038452],
    [35.80105299728193, -78.67614387308156],
    [35.80103415170096, -78.67344813082701],
    [35.80093645921858, -78.67202017677961],
    [35.8007104243478, -78.67155331170761],
    [35.800536390301936, -78.67093103928462],
    [35.800501583447016, -78.6685063226019],
    [35.80046677657685, -78.66466539971515],
    [35.800501583447016, -78.66382855059456],
    [35.80049138881914, -78.65990179600898],
    [35.80084469146403, -78.6596653998012],
    [35.80214912446809, -78.65869433323151],
    [35.803305867891495, -78.6580115520497],
    [35.805004035165744, -78.65699496673456],
    [35.8064294498179, -78.65609407593395],
    [35.8078239469107, -78.6555061044201],
    [35.80858963514937, -78.65542955157946],
    [35.80933462202571, -78.65549334561332],
    [35.80933985721444, -78.655266706719],
    [35.80930123797292, -78.65440802504617],
    [35.809196647289404, -78.6541349122281],
    [35.80906744684314, -78.6538769723444],
    [35.80759085538634, -78.65145688931783],
    [35.80669874602903, -78.65000030765427],
    [35.80684025483134, -78.64899889864382],
    [35.80705559382935, -78.64768644592559],
    [35.807022656690414, -78.64624538524394],
    [35.807353769364504, -78.64526295712234],
    [35.80770271513842, -78.64419692887927],
    [35.80771141606474, -78.64396625892938],
    [35.80769401421115, -78.64363366504811],
    [35.807686, -78.642871],
    [35.804585, -78.640200],
    [35.80414756422597, -78.63915850809553],
    [35.80331078449564, -78.63815709908508],
    [35.8023509380677, -78.63761087598847],
    [35.80116873841821, -78.63783949728618],
    [35.80077551134574, -78.63924296603133],
    [35.80078585945154, -78.63958745381424],
    [35.80054785267728, -78.64028918818681],
    [35.800175318856404, -78.64003401225625],
    [35.798447153223634, -78.63933227788367],
    [35.797482098141, -78.63990469982937],
    [35.79568945636564, -78.64104195632657],
    [35.79368791523968, -78.64185734770652],
    [35.7893896016572, -78.64288731598992],
    [35.788716318438, -78.64303166541058],
    [35.788704, -78.650999]
];

// Render Downtown District (Amber/Gold theme for urban core)
const downtownPolygon = L.polygon(downtownCoords, {
    color: "#f59e0b", weight: 3, dashArray: '6, 6',
    fillColor: "#f59e0b", fillOpacity: 0.12
}).addTo(map);

downtownPolygon.bindPopup(`<strong>SECTOR: DOWNTOWN DISTRICT</strong>`);

const downtownCenter = downtownPolygon.getBounds().getCenter();
const downtownMarker = L.marker(downtownCenter, {
    icon: L.divIcon({
        className: 'scifi-label-downtown', html: 'DOWNTOWN', iconSize: [0, 0]
    })
}).addTo(map);

// --- POI 1 (Cloud Plaza) ---
const cloudPlazaMarker = L.marker([35.778, -78.630], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const plazaImageUrl = "https://lh3.googleusercontent.com/d/1NuJHvWA7OAOvuuVykhITMF09OhzfJYXp";
cloudPlazaMarker.bindPopup(`
    <div class="story-popup">
        <h3>Cloud Plaza & Apex Overlook</h3>
        <img src="${plazaImageUrl}" alt="Cloud Plaza Overlook">
        <p><strong>Atmosphere:</strong> High above the smog layer. Pierced by obsidian-glass towers cutting through the clouds with violet and magenta neon lighting reflecting across polished glass floors.</p>
        <p><em>"Standing on the transparent glass terrace, the elite look down on the entire Raleigh Sector as a map of their own making."</em></p>
    </div>
`);

// --- POI 2 (The Aetherium) ---
const aetheriumMarker = L.marker([35.765, -78.640], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const aetheriumImageUrl = "https://lh3.googleusercontent.com/d/1DqQCWTxOn2YxdQCAl9ccXtAYvhtQNkaI";
aetheriumMarker.bindPopup(`
    <div class="story-popup">
        <h3>The Aetherium</h3>
        <img src="${aetheriumImageUrl}" alt="The Aetherium Restaurant">
        <p><strong>Description:</strong> The most exclusive dining experience in the Raleigh Sector. Suspended high within an obsidian-glass spire, this ultra-luxury establishment serves the corporate elite.</p>
        <p><em>"Where deals are sealed and destinies are decided over synthetic delicacies, far above the common streets."</em></p>
    </div>
`);

// --- POI 3 (Ashby Library) ---
const ashbyLibraryMarker = L.marker([35.769317805556604, -78.6764427497249], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const ashbyLibraryImageUrl = "https://lh3.googleusercontent.com/d/1zqAedRg2aIA6oE4_p_85iPUQsQC9pdBv";
ashbyLibraryMarker.bindPopup(`
    <div class="story-popup">
        <h3>Ashby Library</h3>
        <img src="${ashbyLibraryImageUrl}" alt="Ashby Library">
        <p><strong>Description:</strong> A foundational cornerstone of the university campus within the Green District. This towering repository of historic archives, digital data feeds, and quiet study atriums stands surrounded by dense campus flora, preserving knowledge away from the sterile corporate sprawl.</p>
        <p><em>"Within these walls, the history of the old world meets the quiet resistance of academic preservation."</em></p>
    </div>
`);

// --- POI 4 (University Arboretum) ---
const arboretumMarker = L.marker([35.759486645620534, -78.67901893867499], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const arboretumImageUrl = "https://lh3.googleusercontent.com/d/1sKqoS2QRg_ijWfT6TxSdKehOV3xvXNjN";
arboretumMarker.bindPopup(`
    <div class="story-popup">
        <h3>University Arboretum & Experimental Forest</h3>
        <img src="${arboretumImageUrl}" alt="University Arboretum">
        <p><strong>Description:</strong> A sprawling, humid expanse of botanical research. While open to students and researchers, large sections are high-security genetic modification labs disguised as exotic rainforests. The air is thick with bio-engineered oxygen.</p>
        <p><em>"Beyond the manicured paths lie the true experiments of the university's bio-engineering division."</em></p>
    </div>
`);

// --- POI 5 (The Belltower) ---
const belltowerMarker = L.marker([35.786145509915215, -78.66350503961789], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const belltowerImageUrl = "https://lh3.googleusercontent.com/d/1fYaBMEnXuVL-cmLcAiRIXItMCjhJj3Ix";
belltowerMarker.bindPopup(`
    <div class="story-popup">
        <h3>The Belltower</h3>
        <img src="${belltowerImageUrl}" alt="The Belltower">
        <p><strong>Description:</strong> Standing proudly on Main Campus as an enduring monument of stone and historical memory. Surrounded by the encroaching canopy of the Green District, its classic architecture acts as a beacon of tradition amidst the shifting tides of the city.</p>
        <p><em>"A timeless landmark keeping watch over the heart of the university grounds."</em></p>
    </div>
`);

// --- POI 6 (Jax's Lab) ---
const jaxLabMarker = L.marker([35.787401971966204, -78.67419610066574], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const jaxLabImageUrl = "https://lh3.googleusercontent.com/d/1P2jttP6jYS4TjrlYwqgxyhRZIofxecUX";
jaxLabMarker.bindPopup(`
    <div class="story-popup">
        <h3>Jax's Lab</h3>
        <img src="${jaxLabImageUrl}" alt="Jax's Lab">
        <p><strong>Description:</strong> Tucked away within the academic sector, Jax's workspace hums with custom monitors, specialized research equipment, and focused studies on bivalve genetics and genetic disorders.</p>
        <p><em>"Screens glow against the dim room, charting delicate biological data streams and intricate genomic sequences late into the night."</em></p>
    </div>
`);

// --- POI 7 (Cypress-Mire Market) ---
const cypressMireMarker = L.marker([35.758527336270575, -78.59404209450196], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const cypressMireImageUrl = "https://lh3.googleusercontent.com/d/1kZAtW-YnX4AnMzlmQ1P1sJRWWUqa6h5z";
cypressMireMarker.bindPopup(`
    <div class="story-popup">
        <h3>Cypress-Mire Market (The Float-Bazaar)</h3>
        <img src="${cypressMireImageUrl}" alt="Cypress-Mire Market">
        <p><strong>Atmosphere:</strong> A chaotic shanty-town built on unstable platforms floating above the polluted marshes of southern Sumptown. Illuminated by haphazard neon and bioluminescent runoff from the Spire.</p>
        <p><em>"Where scavengers trade in salvage and black-market tech, all beneath the watchful, uncaring gaze of the corporate towers."</em></p>
    </div>
`);

// --- POI 8 (The Sump-Lock) ---
const sumpLockMarker = L.marker([35.75652862710869, -78.57890195312048], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const sumpLockImageUrl = "https://lh3.googleusercontent.com/d/1FQ5Fo_TfCO060ZjmqExgnf2-RM9l1pKk";
sumpLockMarker.bindPopup(`
    <div class="story-popup">
        <h3>The Sump-Lock (Gate 7)</h3>
        <img src="${sumpLockImageUrl}" alt="The Sump-Lock Control Gate">
        <p><strong>Atmosphere:</strong> A colossal, brutalist-industrial sluice gate controlling the final catchment basin. Cold, violet-tinted mist rises from oily water, illuminated by the warm, chaotic glow of the "Sump-Lock Pub," a shanty tavern bolted to the side of the main structure.</p>
        <p><em>"The bottleneck of the Raleigh Sector. Traders gather here, beneath the towering, rust-streaked concrete pillars, to watch the water gauges and swap stories in the shadow of the pre-collapse machinery."</em></p>
    </div>
`);

// --- POI 9 (KiKi's Childhood Home) ---
const kikiHomeMarker = L.marker([35.76526751892501, -78.59848199754718], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const kikiHomeImageUrl = "https://lh3.googleusercontent.com/d/1fXo2qZ-jBoyB-DklFHsZt2Sx8CNlAp52";
kikiHomeMarker.bindPopup(`
    <div class="story-popup">
        <h3>KiKi's Childhood Shanty</h3>
        <img src="${kikiHomeImageUrl}" alt="KiKi's Childhood Home">
        <p><strong>Atmosphere:</strong> A cramped, weather-beaten dwelling retrofitted into a rusted shipping container, wedged against a massive concrete drainage pillar within Sumptown's lower tiers, connected by walkable industrial walkways instead of waterways.</p>
        <p><em>"Where the past lingers in the rust and damp air—a fragile shelter before the foster system took her away."</em></p>
    </div>
`);

// --- POI 10 (The Glass Horizon) ---
const glassHorizonMarker = L.marker([35.80253699799375, -78.62560689468366], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const glassHorizonImageUrl = "https://lh3.googleusercontent.com/d/1u4eV2sXGMvDANTwqm_tOmQU8EPgsgvb0";
glassHorizonMarker.bindPopup(`
    <div class="story-popup">
        <h3>The Glass Horizon</h3>
        <img src="${glassHorizonImageUrl}" alt="The Glass Horizon Gate">
        <p><strong>Atmosphere:</strong> A towering, heavily fortified security perimeter and shimmering energy barrier sealing off the Spire District from the rest of Raleigh. Guarded by corporate enforcers and automated surveillance drones.</p>
        <p><em>"The ultimate divider between the sterile corporate luxury above and the struggles of the outer sectors below."</em></p>
    </div>
`);

// Dynamic zoom-scaling function for labels
function updateLabelSizes() {
    const zoom = map.getZoom();
    let fontSize = 9 + (zoom - 11) * 1.2;
    if (fontSize < 8) fontSize = 8;    
    if (fontSize > 15) fontSize = 15; 

    const elements = document.querySelectorAll('.scifi-label-spire, .scifi-label-green, .scifi-label-sumptown, .scifi-label-downtown');
    elements.forEach(el => {
        el.style.fontSize = fontSize + 'px';
        el.style.padding = '0px';
    });
}

map.on('zoomend', updateLabelSizes);
updateLabelSizes();
