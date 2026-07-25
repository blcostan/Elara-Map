// Initialize map centered over downtown Raleigh
const map = L.map('map', {
    zoomControl: false
}).setView([35.775, -78.650], 13);

// Add CartoDB Dark Matter No-Labels basemap with correct URL for hidden labels/roads
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    subdomains: 'abcd',
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
}).addTo(map);

// 1. Spire District Boundary Coordinates (Updated with your new border points)
const spireCoords = [
    [35.804623, -78.623870],
    [35.792988, -78.624918],
    [35.792937, -78.612899],
    [35.769760, -78.614413],
    [35.757857, -78.612825],
    [35.753120, -78.623897],
    [35.754583, -78.638917],
    [35.754625, -78.642027],
    [35.770438, -78.648150],
    [35.774372, -78.655836],
    [35.777774, -78.650595],
    [35.778192, -78.650526],
    [35.788695, -78.651009],
    [35.788580, -78.643067],
    [35.79191673897838, -78.64221217284486],
    [35.79267646558805, -78.64207439510058],
    [35.796071936207646, -78.6407752468515],
    [35.79762326673279, -78.63972871076196],
    [35.79894041038236, -78.63796042564516],
    [35.7996721474187, -78.63601170327156],
    [35.804623, -78.623870] // Connects back to the very first Spire coordinate
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

// 4. Downtown District Boundary Coordinates
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

// --- The Cinder Complete Boundary Coordinates & Rendering (Fully Aligned to Sumptown's exact northern curve) ---
const cinderCoords = [
    // Western & Northern Border Points
    [35.769760, -78.614413],
    [35.771741888040616, -78.61443535378109],
    [35.773108325402845, -78.61382293099518],
    [35.77414348959127, -78.61349120198614],
    [35.774661066632156, -78.6135422372183],
    [35.77660712615811, -78.61420569523638],
    [35.77722819895949, -78.61423121285246],
    [35.777745755921394, -78.61397603669165],
    [35.77992758618707, -78.61346330450664],
    [35.792937, -78.612899],
    [35.79395390299946, -78.6128851152093],
    [35.79451085674623, -78.61267053849042],
    [35.795016, -78.612166],
    [35.7955290277444, -78.61137234933204],
    [35.79597284177925, -78.61091100938646],
    [35.796268716425246, -78.6107500768473],
    [35.79651237707113, -78.61070716150351],
    [35.79699969612116, -78.61071789033946],
    [35.79726946077986, -78.6108144498326],
    [35.7985399527917, -78.61101829771553],
    [35.799331824520976, -78.6106213307856],
    [35.80011498659975, -78.60936605698018],
    [35.80086333434779, -78.60861503844362],
    [35.804474447812524, -78.60797130828698],
    [35.805106114263765, -78.60770368768836],
    [35.80577870166686, -78.6070785060944],
    [35.80658579903248, -78.60557296674567],
    [35.80724802664277, -78.6043736387899],
    [35.807806776894004, -78.60378673362005],
    [35.809596820672915, -78.60237050592761],
    [35.81002104478729, -78.60165601267735],
    [35.81012546884592, -78.60158075389512],
    [35.80289657931754, -78.59411066750982],
    [35.80099413110796, -78.59192738230607],
    [35.795754845852684, -78.58447534265073],
    [35.791183281888884, -78.57798043991784],
    [35.78813726583865, -78.57454721241582],
    [35.786725503027895, -78.57374283114497],
    [35.785649106191656, -78.57346213836747],
    [35.78440709172871, -78.57318144558997],
    [35.7680797630841, -78.57432836499183],
    // Southern Border (Exact match to Sumptown's northern border curve points in reverse order)
    [35.76790691580093, -78.5742381736827],
    [35.76787585863594, -78.57690476429848],
    [35.768424533432345, -78.57949480207363],
    [35.76983243641054, -78.5820975990514],
    [35.77112644284386, -78.58324589166106],
    [35.77202705893353, -78.58444522009997],
    [35.77235831744404, -78.58549144225545],
    [35.77264614945426, -78.59082395897302],
    [35.772515577836465, -78.59151060502968],
    [35.771949765117476, -78.59292681123374],
    [35.77148840715171, -78.59451467879587],
    [35.77182789723571, -78.59616691936726],
    [35.77235018684068, -78.59799082222679],
    [35.77261133035784, -78.59906370571471],
    [35.7722718436183, -78.60065157327683],
    [35.772054223151194, -78.6011880150208],
    [35.77138394837071, -78.60274369607828],
    [35.771061866271864, -78.60458905567752],
    [35.771035751447016, -78.60714251927578],
    [35.771061866268965, -78.60818321625906],
    [35.7710096366165, -78.61075813663008],
    [35.77076589778483, -78.61172373176922],
    [35.76981382377968, -78.61443431358302]
];

// Render The Cinder
const cinderPolygon = L.polygon(cinderCoords, {
    color: "#f97316", 
    weight: 3, 
    dashArray: '6, 6',
    fillColor: "#f97316", 
    fillOpacity: 0.12
}).addTo(map);

cinderPolygon.bindPopup(`<strong>SECTOR: THE CINDER</strong>`);

const cinderCenter = cinderPolygon.getBounds().getCenter();
const cinderMarker = L.marker(cinderCenter, {
    icon: L.divIcon({
        className: 'scifi-label-cinder', 
        html: 'THE CINDER', 
        iconSize: [0, 0]
    })
}).addTo(map);

// --- Fringe City Boundary Coordinates ---
const fringeCityCoords = [
    [35.752037, -78.694747],
    [35.75169739800973, -78.70127013509891],
    [35.75213274975152, -78.70661309544835],
    [35.7527074104098, -78.70992830578047],
    [35.753420307728284, -78.71177513632514],
    [35.75468857508139, -78.7145214249445],
    [35.75593219631328, -78.71711598500323],
    [35.757139, -78.721364],
    [35.757496, -78.725112],
    [35.757828, -78.728223],
    [35.758493, -78.730165],
    [35.760303, -78.732471],
    [35.761670, -78.733392],
    [35.766560, -78.735648],
    [35.768610, -78.729134],
    [35.770572, -78.723125],
    [35.777086, -78.709178],
    [35.783937, -78.700030],
    [35.788032, -78.697488],
    [35.792250, -78.696356],
    [35.795627, -78.695262],
    [35.799908, -78.693996],
    [35.803719, -78.693631]
];

// Render Fringe City (Placeholder theme style, e.g., Slate/Steely Blue)
const fringeCityPolygon = L.polygon(fringeCityCoords, {
    color: "#64748b", 
    weight: 3, 
    dashArray: '6, 6',
    fillColor: "#64748b", 
    fillOpacity: 0.12
}).addTo(map);

fringeCityPolygon.bindPopup(`<strong>SECTOR: FRINGE CITY</strong>`);

const fringeCityCenter = fringeCityPolygon.getBounds().getCenter();
const fringeCityMarker = L.marker(fringeCityCenter, {
    icon: L.divIcon({
        className: 'scifi-label-fringecity', 
        html: 'FRINGE CITY', 
        iconSize: [0, 0]
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

// --- POI 11 (Fort Mordecai) ---
const fortMordecaiMarker = L.marker([35.7960939686416, -78.65020263393107], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const fortMordecaiImageUrl = "https://lh3.googleusercontent.com/d/1CWlN8sCb1-mD2x3kdYaUbf85rHlsa45F";
fortMordecaiMarker.bindPopup(`
    <div class="story-popup">
        <h3>Fort Mordecai</h3>
        <img src="${fortMordecaiImageUrl}" alt="Fort Mordecai Neighborhood">
        <p><strong>Atmosphere:</strong> The most exclusive neighborhood outside of The Spire, situated within the Downtown District. A heavily secured enclave where the corporate elite reside when they want private backyards rather than tower living.</p>
        <p><em>"Lush, manicured greenery and high-security seclusion just a stone's throw from the vertical corporate sprawl."</em></p>
    </div>
`);

// --- POI 12 (The Rose Gardens) ---
const roseGardensMarker = L.marker([35.7925, -78.6575], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const roseGardensImageUrl = "https://lh3.googleusercontent.com/d/1X48VJsgGYVnag77RDbmN1y6xX0lqqA15";
roseGardensMarker.bindPopup(`
    <div class="story-popup">
        <h3>The Rose Gardens</h3>
        <img src="${roseGardensImageUrl}" alt="The Rose Gardens">
        <p><strong>Atmosphere:</strong> A breathtaking sanctuary nestled within the Downtown District. Engineered with subtle bio-luminescent traits, these meticulously curated blossoms emit a faint, ethereal glow against the evening shadows of the urban core.</p>
        <p><em>"Walking past the glowing petals under the smog-filtered sky, the corporate elite enjoy a synthetic masterpiece of nature that pulses with quiet, engineered life."</em></p>
    </div>
`);

// --- POI 13 (Five Points Bar District) ---
const fivePointsMarker = L.marker([35.804140, -78.645885], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const fivePointsImageUrl = "https://lh3.googleusercontent.com/d/1eaREGou9UBO9hBs8tJ74710nQKeJ7vHL";
fivePointsMarker.bindPopup(`
    <div class="story-popup">
        <h3>Five Points Bar District</h3>
        <img src="${fivePointsImageUrl}" alt="Five Points Bar District">
        <p><strong>Atmosphere:</strong> A vibrant, chaotic anomaly within the city where every walk of life—from outer sector scrappers to the occasional corporate elite—mingles to drink. Tucked deep inside is The Alley Bar, where Elara witnesses a chilling sight: a man in the throes of a grotesque, unnatural transformation.</p>
        <p><em>"Neon signs flicker through the damp night air, casting a deceptive warmth over a district where danger lurks in the shadows of every alleyway."</em></p>
    </div>
`);

// --- POI 14 (Foundry of Origins - Main Cathedral) ---
const foundryMainMarker = L.marker([35.80028721396566, -78.67582514547222], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const foundryMainImageUrl = "https://lh3.googleusercontent.com/d/1viGg1UA5lk16b_8NSwNY6hZoawtg2Rk7";
foundryMainMarker.bindPopup(`
    <div class="story-popup">
        <h3>Foundry of Origins (Main Cathedral)</h3>
        <img src="${foundryMainImageUrl}" alt="Foundry of Origins Main Cathedral">
        <p><strong>Atmosphere:</strong> The monumental epicenter of the dominant faith in the world, located in the western sector of Downtown. Here, silent monks tend to the ancient worship of the primordial Titans, safeguarding sacred rites beneath vaulted stone and towering arches.</p>
        <p><em>"Within the shadowed sanctuary, a colossal statue of a Titan reaches out its massive stone hand, cradling a pulsing bio-luminescent sphere that bathes the devout in an ethereal, shifting glow."</em></p>
    </div>
`);

// --- POI 15 (Elysia Corporate Headquarters) ---
const elysiaHqMarker = L.marker([35.77670560229435, -78.63882962888806], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const elysiaHqImageUrl = "https://lh3.googleusercontent.com/d/11yoxIaCYJXBDAOptyShtXW4DXK4D5W9Y";
elysiaHqMarker.bindPopup(`
    <div class="story-popup">
        <h3>Elysia Corporate Headquarters (Southeast Division)</h3>
        <img src="${elysiaHqImageUrl}" alt="Elysia Corporate Headquarters">
        <p><strong>Atmosphere:</strong> A towering, sleek monolith of mirrored glass and gleaming steel standing proudly in the Downtown District. As the regional nerve center for the long-standing corporate titan, this tower oversees the distribution of their flagship, highly sought-after euphoric drug—known simply as <em>Elysia</em>—which temporarily grants superhuman strength and profound mood boosts to those who can afford it.</p>
        <p><em>"From glass-walled executive suites high above the streets, executives manage an empire built on artificial joy and fleeting, synthetic power."</em></p>
    </div>
`);
// --- POI 17 (Grid-Lock Plaza) ---
const gridLockPlazaMarker = L.marker([35.78752297957874, -78.58771925954728], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const gridLockPlazaImageUrl = "https://lh3.googleusercontent.com/d/1lh_XD9fyLwMyk8Qj975iAty7pZyMHHm1";
gridLockPlazaMarker.bindPopup(`
    <div class="story-popup">
        <h3>Grid-Lock Plaza</h3>
        <img src="${gridLockPlazaImageUrl}" alt="Grid-Lock Plaza">
        <p><strong>Atmosphere:</strong> A claustrophobic, dimly lit intersection trapped beneath a colossal, brutalist overpass of pre-collapse concrete roadways casting deep shadows. Illegal stall vendors hustle beneath flickering neon, selling pressurized air canisters, heavy-duty soot rags, and synthetic ration blocks to the passing crowds.</p>
        <p><em>"In the shadows beneath the concrete sky, everything comes at a price—from a clean breath of air to a handful of synthetic rations."</em></p>
    </div>
`);
// --- POI 18 (Elara's Childhood Room) ---
const elaraRoomMarker = L.marker([35.79325538505903, -78.60349683068041], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const elaraRoomImageUrl = "https://lh3.googleusercontent.com/d/1PTlbvNbWIWVYp8jRKPVfSKY5R6dUmOH7";
elaraRoomMarker.bindPopup(`
    <div class="story-popup">
        <h3>Elara's Childhood Room</h3>
        <img src="${elaraRoomImageUrl}" alt="Elara's Childhood Room">
        <p><strong>Atmosphere:</strong> A cramped, soot-dusted habitation cell tucked deep inside the hulking, monolithic apartment blocks of The Cinder. Here, people live crammed into narrow vertical spaces, filtering the heavy gray-black soot through damp rags and learning to endure the constant, grinding vibrations of the massive exhaust fans overhead.</p>
        <p><em>"Where the walls carry the gray stain of permanent grit, and every breath is a reminder of the relentless industrial sprawl pressing down from above."</em></p>
    </div>
`);
// --- POI 19 (The Smut-Sinks) ---
const smutSinksMarker = L.marker([35.784051913490444, -78.59586851141059], {
    icon: L.divIcon({ className: 'poi-pulse-marker', iconSize: [12, 12], iconAnchor: [6, 6] })
}).addTo(map);
const smutSinksImageUrl = "https://lh3.googleusercontent.com/d/1p22kbjAFNfnB5LrlvqdKBk859erMmg7S";
smutSinksMarker.bindPopup(`
    <div class="story-popup">
        <h3>The Smut-Sinks</h3>
        <img src="${smutSinksImageUrl}" alt="The Smut-Sinks">
        <p><strong>Atmosphere:</strong> A stagnant, synthetic-looking body of dark industrial water coated in a thick, iridescent sheen of oily runoff and chemical sludge, reflecting a hazy palette of charcoal gray, dull violet, and sickly amber.</p>
        <p><em>"Surrounded by shores choked with discarded synthetic debris and gray silt, a sulfurous mist hangs low over the oily ripples while the constant drift of fine gray-black soot dimples the dark water."</em></p>
    </div>
`);

// Dynamic zoom-scaling function for labels
function updateLabelSizes() {
    const zoom = map.getZoom();
    let fontSize = 9 + (zoom - 11) * 1.2;
    if (fontSize < 8) fontSize = 8;    
    if (fontSize > 15) fontSize = 15; 

    const elements = document.querySelectorAll('.scifi-label-spire, .scifi-label-green, .scifi-label-sumptown, .scifi-label-downtown, .scifi-label-cinder');
    elements.forEach(el => {
        el.style.fontSize = fontSize + 'px';
        el.style.padding = '0px';
    });
}

map.on('zoomend', updateLabelSizes);
updateLabelSizes();
