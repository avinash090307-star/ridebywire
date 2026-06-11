/* -------------------------------------------------------------
   PRODUCT & INVENTORY DATA ( bikes, helmets, accessories )
   ------------------------------------------------------------- */
const initialInventory = [
  {
    id: "bike-ktm-250",
    type: "bike",
    brand: "KTM",
    model: "Duke 250",
    year: 2023,
    price: 215000,
    odo: "10,800 km",
    owners: "1st Owner",
    condition: "Excellent (Certified)",
    issues: "None",
    details: "Equipped with RideByWire throttle calibration, custom carbon frame sliders, and exhaust shield. Lapsed claims: None. Under manufacturer warranty.",
    img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=400",
    userSubmitted: false
  },
  {
    id: "bike-kawa-400",
    type: "bike",
    brand: "Kawasaki",
    model: "Ninja 400",
    year: 2022,
    price: 465000,
    odo: "8,500 km",
    owners: "1st Owner",
    condition: "Mint (Chassis Verified)",
    issues: "Minor scuff on left bar-end",
    details: "Special green edition. Zero engine wear, ECU tuned for linear torque. Fitted with radiator guard and tank pads.",
    img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=400",
    userSubmitted: false
  },
  {
    id: "bike-tri-street",
    type: "bike",
    brand: "Triumph",
    model: "Street Triple R",
    year: 2021,
    price: 790000,
    odo: "14,200 km",
    owners: "2nd Owner",
    condition: "Excellent (Dyno Tested)",
    issues: "Rear tyre tread at 40%",
    details: "Matte carbon grey. 765cc triple engine outputting 118 BHP. Service history registered at Triumph Delhi.",
    img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&q=80&w=400",
    userSubmitted: false
  },
  {
    id: "bike-re-inter",
    type: "bike",
    brand: "Royal Enfield",
    model: "Interceptor 650",
    year: 2023,
    price: 295000,
    odo: "4,300 km",
    owners: "1st Owner",
    condition: "Like New (100% Stock)",
    issues: "None",
    details: "Canyon red finish. Dual touring exhausts, engine guard, and touring seat setup included.",
    img: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=400",
    userSubmitted: false
  },
  {
    id: "helmet-mt-hummer",
    type: "helmet",
    brand: "MT Helmets",
    model: "Hummer Solid Gloss Black",
    price: 5200,
    spec: "ECE 22.06 & DOT Certified",
    weight: "1450g (+/- 50g)",
    details: "High-impact polycarbonate shell. Max-vision pinlock ready visor, aerodynamic ventilation channels.",
    img: "https://images.unsplash.com/photo-1595348020949-87cdfcd44174?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "helmet-mt-thunder4",
    type: "helmet",
    brand: "MT Helmets",
    model: "Thunder 4 SV Aerodynamic",
    price: 6800,
    spec: "ECE 22.06 / Triple Shell",
    weight: "1500g (+/- 50g)",
    details: "Integrated drop-down sun visor. Micrometric buckle, laser-cut comfort lining, Bluetooth communicator ready.",
    img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "helmet-agv-k1",
    type: "helmet",
    brand: "AGV",
    model: "K1 S Mono Matte Black",
    price: 21500,
    spec: "ECE 22.06 (Race Spec)",
    weight: "1500g",
    details: "Integrated spoiler for high-speed stability. Dry-comfort fabric, pinlock anti-fog insert included.",
    img: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "acc-rbw-spacer",
    type: "accessory",
    brand: "RideByWire",
    model: "Precision Throttle Spacer Kit",
    price: 1800,
    spec: "CNC Delrin Machined",
    details: "Eliminates physical throttle grip slop/play on ride-by-wire sensors for instant engine response.",
    img: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "acc-evotech-sliders",
    type: "accessory",
    brand: "Evotech",
    model: "Frame Crash Protection Sliders",
    price: 14500,
    spec: "Aircraft grade aluminum brackets",
    details: "Impact-absorbing nylon sliders. Direct chassis mount without fairing cuts. Protects engine cases during drops.",
    img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400"
  }
];

// In-Memory state
let inventory = [...initialInventory];
let cart = [];

// Autocomplete Brand/Model lists
const bikeBrandModels = {
  "KTM": ["Duke 390", "Duke 250", "Duke 200", "RC 390", "Adventure 390"],
  "Kawasaki": ["Ninja 300", "Ninja 400", "Ninja 650", "Z650", "Z900", "ZX-10R"],
  "Triumph": ["Street Triple RS", "Street Triple R", "Trident 660", "Tiger Sport 660"],
  "Ducati": ["Panigale V4", "Panigale V2", "Monster 937", "Scrambler Icon", "Multistrada V4"],
  "BMW": ["G 310 R", "G 310 GS", "S 1000 RR", "F 900 XR", "R 1250 GS"],
  "Royal Enfield": ["Interceptor 650", "Continental GT 650", "Himalayan 450", "Hunter 350", "Super Meteor 650"],
  "Yamaha": ["R15 V4", "MT-15 V2", "R3", "MT-03", "R6", "R1"],
  "Honda": ["CBR150R", "CBR650R", "CB300R", "Africa Twin"],
  "Suzuki": ["Hayabusa", "V-Strom 800DE", "Gixxer SF 250"]
};

// Simulated Instagram & Google Maps photos
const mediaItems = [
  { id: 1, type: "garage", title: "Main Showroom Floor", src: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=600", likes: 324, source: "Google Maps", coords: "Lat: 28.5020, Lon: 77.1770" },
  { id: 2, type: "rides", title: "Sunday Run to Gurgaon Hills", src: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=600", likes: 890, source: "Instagram @ridebywire13", coords: "Lat: 28.4595, Lon: 77.0266" },
  { id: 3, type: "garage", title: "Diagnostic Bay & Calibration Tool", src: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=600", likes: 180, source: "Google Maps", coords: "Lat: 28.5021, Lon: 77.1771" },
  { id: 4, type: "rides", title: "Track Day Briefing at BIC", src: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=600", likes: 1205, source: "Instagram @ridebywire13", coords: "Lat: 28.3499, Lon: 77.5342" },
  { id: 5, type: "garage", title: "Helmet Display Bay", src: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&q=80&w=600", likes: 450, source: "Instagram @ridebywire13", coords: "Lat: 28.5020, Lon: 77.1770" },
  { id: 6, type: "rides", title: "Lansdowne Weekend Expedition", src: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&q=80&w=600", likes: 980, source: "Instagram @ridebywire13", coords: "Lat: 29.8377, Lon: 78.5344" }
];

// Community updates
const communityRides = [
  {
    id: 1,
    title: "Sunday Morning Breakfast Run",
    date: "14-JUN-2026 // 05:30 AM",
    route: "Chhattarpur -> Greater Noida Expressway -> Murthal Toll",
    difficulty: "Cruising Speed: 80-100 km/h",
    desc: "Join us for our weekly breakfast meetup. Focus is group formation, road safety, and throttle sweeps. Meet at RideByWire Showroom."
  },
  {
    id: 2,
    title: "Monsoon Curves: Lansdowne Hill Climb",
    date: "28-JUN-2026 // 04:00 AM (2 Days)",
    route: "Delhi -> Meerut Bypass -> Kotdwar -> Lansdowne",
    difficulty: "Rain conditions, steep switchbacks",
    desc: "Pre-ride mechanical diagnostics at our workshop is mandatory. Checking tyre tread health and ECU safety sensors before climb. Limited to 25 superbikes."
  },
  {
    id: 3,
    title: "BIC Track Day & Throttle Mapping Seminar",
    date: "12-JUL-2026 // 08:00 AM",
    route: "Buddh International Circuit (BIC), Greater Noida",
    difficulty: "Full leather gear mandatory",
    desc: "Track session supervised by certified racers. Exclusive pit booth with RideByWire technicians offering custom ECU track mappings for Ducati/Triumph/KTM."
  }
];

const activeGiveaways = [
  {
    id: 1,
    title: "MT Thunder 4 SV (Helmet)",
    desc: "Complete our diagnostic survey or purchase any pre-owned bike this month to enter the draw. ECE 22.06 certified. Winner gets custom fitting session.",
    timerEnd: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000) // 6 days from now
  },
  {
    id: 2,
    title: "Alpinestars SP-8 Gloves",
    desc: "Submit your pre-owned bike for listing and get automatically entered. Full-grain leather gloves with carbon fiber knuckle guards.",
    timerEnd: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) // 2 days from now
  }
];

// 15-Angle Reference Guide database (Unsplash bike close-ups)
const mandatoryAngles = [
  { id: 1, name: "Front Profile (0° View)", tip: "Align front wheel straight. Capture the entire front headlamp, forks, and indicators in center frame.", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=400", x: 80, y: 150 },
  { id: 2, name: "Rear Profile (180° View)", tip: "Capture rear tail light, turn indicators, license plate holder, and exhaust muffler from dead center.", img: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=400", x: 420, y: 150 },
  { id: 3, name: "Left Side Profile (90° View)", tip: "Side-on profile from the left. Ensure side panels, engine cases, and full wheelbase are in view.", img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&q=80&w=400", x: 250, y: 80 },
  { id: 4, name: "Right Side Profile (270° View)", tip: "Side-on profile from the right showing full exhaust system, engine casing, and frame details.", img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=400", x: 250, y: 220 },
  { id: 5, name: "Odometer & Instrument Cluster", tip: "Close-up shot of the dashboard. Make sure key is turned ON and mileage (odo) reading is clearly legible.", img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=400", x: 340, y: 95 },
  { id: 6, name: "Engine Left Case", tip: "Macro shot of the left engine crankcase cover, check for scratches, bolt wear, or oil leaks.", img: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=400", x: 230, y: 175 },
  { id: 7, name: "Engine Right Case", tip: "Macro shot of the right engine clutch cover. Check for scuffs or modifications.", img: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=400", x: 270, y: 175 },
  { id: 8, name: "Front Tire & Alloy Tread", tip: "Close-up of the front tyre tread depth and alloy wheel rim. Check for cracks or dented lips.", img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=400", x: 380, y: 220 },
  { id: 9, name: "Rear Tire & Alloy Tread", tip: "Close-up of the rear tyre tread depth and alloy wheel rim. Note any flat spots or wear indicators.", img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=400", x: 120, y: 220 },
  { id: 10, name: "Exhaust Muffler Profile", tip: "Close-up of exhaust muffler and heat shield. Check for scratches or aftermarket installations.", img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&q=80&w=400", x: 170, y: 230 },
  { id: 11, name: "Front Brake Rotor & Caliper", tip: "Detail of the front disc plate, checking thickness, scoring lines, and brake pads wear.", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400", x: 390, y: 200 },
  { id: 12, name: "Rear Brake Rotor & Caliper", tip: "Detail of the rear brake disc plate and caliper placement.", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400", x: 110, y: 200 },
  { id: 13, name: "Drive Chain & Sprocket", tip: "Detail shot of the drive sprocket and chain tension/lubrication. Check for tooth wear.", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=400", x: 150, y: 195 },
  { id: 14, name: "Rider & Pillion Seat Quality", tip: "Top down view of the seat cover. Inspect for tears, stitch splits, or aftermarket seat covers.", img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=400", x: 200, y: 135 },
  { id: 15, name: "Fuel Tank Profile (Top)", tip: "Top view of the tank. Check around the filler cap for paint chipping, tank pad wear, or dents.", img: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&q=80&w=400", x: 280, y: 115 }
];

// State variables
let uploadedAnglesStatus = Array(15).fill(false);
let uploadedImages = Array(15).fill(null);
let activeAngleIdx = 0;
let attemptsCounter = Array(15).fill(0); // Tracks upload attempts for mock validation error trigger
let leafletMap = null;

// Pending Submissions Database (Admin Desk)
let pendingSubmissions = [
  {
    id: "sub-duke-9923",
    brand: "KTM",
    model: "Duke 390",
    year: 2024,
    price: 280000,
    odo: "6,500 km",
    owners: "1st Owner",
    issues: "Minor scratch on right exhaust guard",
    details: "Immaculate condition. Exhaust guard has a minor scratch from parking. Slipper clutch and quickshifter working smoothly. Regularly serviced at KTM Okhla showroom.",
    images: Array(15).fill("https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=500")
  }
];

/* -------------------------------------------------------------
   INITIALIZATION & ROOT LISTENERS
   ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Theme management
  initThemes();
  
  // Navigation Tabs switching
  initNavigation();

  // Load datasets into DOM
  renderMediaGallery("all");
  renderCatalog("all");
  renderGiveaways();
  renderRidesTimeline();
  initBlueprintHotspots();
  selectActiveAngle(0);

  // Sell Auto-complete systems
  initSellAutocomplete();

  // Cart elements listeners
  initCartListeners();

  // Insurance modal listeners
  initInsuranceListeners();

  // Initialize Maps
  initLeafletMap();
  
  // Initialize Admin desk list
  renderAdminSubmissions();
});

/* -------------------------------------------------------------
   THEME SWITCHING LOGIC (Carbon Black <-> Titanium Light)
   ------------------------------------------------------------- */
function initThemes() {
  const toggler = document.getElementById("theme-toggler");
  const themeName = document.getElementById("theme-name");
  
  const themes = ["classic-dark", "classic-light"];
  let currentThemeIdx = 0;

  toggler.addEventListener("click", () => {
    currentThemeIdx = (currentThemeIdx + 1) % themes.length;
    const activeTheme = themes[currentThemeIdx];
    document.documentElement.setAttribute("data-theme", activeTheme);
    
    const label = activeTheme === "classic-dark" ? "CARBON BLACK" : "TITANIUM LIGHT";
    themeName.textContent = label;
    showNotification(`THEME CONFIGURATION: ${label} ACTIVE`, "success");
  });
}

/* -------------------------------------------------------------
   NAVIGATION TABS CONTROLS
   ------------------------------------------------------------- */
function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetSection = tab.getAttribute("data-tab");
      switchTab(targetSection);
    });
  });
}

function switchTab(sectionId) {
  // Toggle active tab buttons
  document.querySelectorAll(".nav-tab").forEach(t => {
    t.classList.remove("active");
    if (t.getAttribute("data-tab") === sectionId) {
      t.classList.add("active");
    }
  });

  // Toggle visible sections
  document.querySelectorAll(".viewport-section").forEach(sec => {
    sec.classList.remove("active");
  });
  
  const activeSec = document.getElementById(`sec-${sectionId}`);
  if (activeSec) {
    activeSec.classList.add("active");
  }

  // Trigger leaflet map refresh if we hit the About Us section
  if (sectionId === "about" && leafletMap) {
    setTimeout(() => {
      leafletMap.invalidateSize();
    }, 200);
  }

  // Trigger admin list reload
  if (sectionId === "admin") {
    renderAdminSubmissions();
  }
}

/* -------------------------------------------------------------
   NOTIFICATION TOAST SYSTEM
   ------------------------------------------------------------- */
function showNotification(msg, type = "success") {
  const container = document.getElementById("notification-container");
  const notif = document.createElement("div");
  notif.className = `notif ${type}`;
  notif.textContent = `>> ${msg}`;
  container.appendChild(notif);

  setTimeout(() => {
    notif.style.opacity = '0';
    setTimeout(() => notif.remove(), 300);
  }, 5000);
}

/* -------------------------------------------------------------
   HOME PORTAL: SIMULATED INSTAGRAM & GOOGLE MAPS FEEDS
   ------------------------------------------------------------- */
function renderMediaGallery(filter) {
  const container = document.getElementById("home-media-gallery");
  if (!container) return;
  container.innerHTML = "";

  const items = filter === "all" ? mediaItems : mediaItems.filter(m => m.type === filter);

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.innerHTML = `
      <div class="g-img-container">
        <img class="g-img" src="${item.src}" alt="${item.title}">
      </div>
      <div class="g-details">
        <span class="g-src-badge ${item.type === 'garage' ? 'maps' : 'ig'}">${item.source}</span>
        <h4 class="g-title">${item.title}</h4>
        <div class="g-meta-row">
          <span>Likes: ${item.likes}</span>
          <span>${item.coords}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterMedia(type) {
  document.querySelectorAll(".m-tab").forEach(btn => {
    btn.classList.remove("active");
    if (btn.textContent.toLowerCase().includes(type) || (type === 'all' && btn.textContent.toLowerCase().includes('all'))) {
      btn.classList.add("active");
    }
  });
  renderMediaGallery(type);
}

/* -------------------------------------------------------------
   BUY PORTAL: INVENTORY RENDERING, SEARCH, & FILTERS
   ------------------------------------------------------------- */
function renderCatalog(filter = "all") {
  const container = document.getElementById("catalog-products-grid");
  if (!container) return;
  container.innerHTML = "";

  const searchVal = document.getElementById("inventory-search").value.toLowerCase();

  const filteredItems = inventory.filter(item => {
    const matchesFilter = (filter === "all") || (item.type === filter);
    const searchString = `${item.brand} ${item.model} ${item.type} ${item.details} ${item.condition || ""}`.toLowerCase();
    const matchesSearch = searchString.includes(searchVal);
    
    return matchesFilter && matchesSearch;
  });

  if (filteredItems.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; font-family: var(--font-display); color: var(--text-secondary);">>> 0 matches found for: "${searchVal}"</div>`;
    return;
  }

  filteredItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    let actionButton = "";
    let specsContent = "";

    if (item.type === "bike") {
      specsContent = `
        <table class="bike-specs-table">
          <tr><td>Manufacture Year:</td><td class="spec-val">${item.year}</td></tr>
          <tr><td>Odometer:</td><td class="spec-val">${item.odo}</td></tr>
          <tr><td>Ownership:</td><td class="spec-val">${item.owners}</td></tr>
          <tr><td>Inspection:</td><td class="spec-val">${item.condition}</td></tr>
          <tr><td>Issues:</td><td class="spec-val" style="color: ${item.issues === "None" ? "#10b981" : "#ff334b"}">${item.issues}</td></tr>
        </table>
      `;
      actionButton = `
        <button class="btn btn-secondary btn-block" onclick="inquireBike('${item.id}')">
          INQUIRE NOW
        </button>
      `;
    } else {
      specsContent = `
        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.5; min-height: 80px;">
          <strong>Specs:</strong> ${item.spec}<br>
          <strong>Description:</strong> ${item.details}
        </div>
      `;
      actionButton = `
        <button class="btn btn-primary btn-block" onclick="addToCart('${item.id}')">
          ADD TO CART
        </button>
      `;
    }

    card.innerHTML = `
      <div class="p-img-area">
        <img src="${item.img}" alt="${item.brand} ${item.model}">
        <span class="product-category-tag">${item.type.toUpperCase()}</span>
        ${item.userSubmitted ? `<span class="product-user-badge">Pre-Owned Listing</span>` : ""}
      </div>
      <div class="p-content">
        <h3 class="p-title">${item.brand} ${item.model}</h3>
        <p class="p-subinfo">Product ID: ${item.id.toUpperCase()}</p>
        ${specsContent}
        <div class="p-price-row">
          <span class="p-price">₹${item.price.toLocaleString("en-IN")}</span>
          <div style="width: 55%">${actionButton}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Bind search and filter events
const searchInput = document.getElementById("inventory-search");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const activeFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter");
    renderCatalog(activeFilter);
  });
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const activeFilter = btn.getAttribute("data-filter");
    renderCatalog(activeFilter);
  });
});

function inquireBike(bikeId) {
  const bike = inventory.find(i => i.id === bikeId);
  if (!bike) return;

  const formMsg = `Hello RideByWire, I am interested in purchasing the pre-owned ${bike.brand} ${bike.model} (${bike.year}) listed at ₹${bike.price.toLocaleString('en-IN')}. Please share the inspection details.`;
  
  const link = `https://wa.me/919992228554?text=${encodeURIComponent(formMsg)}`;
  window.open(link, "_blank");
  showNotification(`REDIRECTING INQUIRY FOR: ${bike.brand} ${bike.model}`, "success");
}

/* -------------------------------------------------------------
   SHOPPING CART SYSTEM
   ------------------------------------------------------------- */
function initCartListeners() {
  const cartBtn = document.getElementById("btn-open-cart");
  const closeCartBtn = document.getElementById("btn-close-cart");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-overlay");
  const checkoutBtn = document.getElementById("btn-checkout");

  if (cartBtn) {
    const toggleCart = () => {
      cartDrawer.classList.toggle("open");
      cartOverlay.classList.toggle("open");
    };

    cartBtn.addEventListener("click", toggleCart);
    closeCartBtn.addEventListener("click", toggleCart);
    cartOverlay.addEventListener("click", toggleCart);

    checkoutBtn.addEventListener("click", () => {
      if (cart.length === 0) {
        showNotification("TRANSACTION ERROR: Cart is empty", "error");
        return;
      }
      showNotification("PROCESSING SECURE CHECKOUT...", "success");
      setTimeout(() => {
        showNotification("TRANSACTION SUCCESSFUL: Receipt Generated", "success");
        cart = [];
        updateCartUI();
        toggleCart();
      }, 1500);
    });
  }
}

function addToCart(productId) {
  const product = inventory.find(p => p.id === productId);
  if (!product) return;

  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  showNotification(`ADDED TO CART: ${product.model}`, "success");
  updateCartUI();
  
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
}

function updateCartUI() {
  const countBadge = document.getElementById("cart-badge");
  const itemsContainer = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("cart-subtotal");
  const totalEl = document.getElementById("cart-total");

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  countBadge.textContent = totalQty;

  itemsContainer.innerHTML = "";
  let subtotal = 0;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 40px 0;">[ CART IS EMPTY ]</div>`;
    subtotalEl.textContent = "₹0.00";
    totalEl.textContent = "₹0.00";
    return;
  }

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.img}" class="ci-img" alt="${item.model}">
      <div class="ci-details">
        <div class="ci-name">${item.brand} ${item.model}</div>
        <div class="ci-price">₹${item.price.toLocaleString("en-IN")} x ${item.qty}</div>
        <div class="ci-qty-row">
          <button class="qty-btn" onclick="adjustQty('${item.id}', -1)">-</button>
          <span class="ci-qty">${item.qty}</span>
          <button class="qty-btn" onclick="adjustQty('${item.id}', 1)">+</button>
          <button class="ci-remove" onclick="removeCartItem('${item.id}')">Remove</button>
        </div>
      </div>
    `;
    itemsContainer.appendChild(div);
  });

  subtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  totalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
}

function adjustQty(id, amt) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  item.qty += amt;
  if (item.qty <= 0) {
    removeCartItem(id);
  } else {
    updateCartUI();
  }
}

function removeCartItem(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
  showNotification("Item removed from cart", "error");
}

/* -------------------------------------------------------------
   SELL PORTAL: 15-ANGLE DIAGNOSTIC CHECKLIST & AUTOCOMPLETE
   ------------------------------------------------------------- */
function initBlueprintHotspots() {
  const hotspotGroup = document.getElementById("hotspot-group");
  const checklistContainer = document.getElementById("angle-checklist-container");
  if (!hotspotGroup) return;

  hotspotGroup.innerHTML = "";
  checklistContainer.innerHTML = "";

  mandatoryAngles.forEach((angle, idx) => {
    // 1. Add circles to SVG
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", angle.x);
    circle.setAttribute("cy", angle.y);
    circle.setAttribute("r", 5.5);
    circle.setAttribute("class", "hotspot-node");
    circle.setAttribute("id", `hotspot-node-${idx}`);
    circle.setAttribute("title", angle.name);
    
    circle.addEventListener("click", () => {
      selectActiveAngle(idx);
    });

    hotspotGroup.appendChild(circle);

    // 2. Add text checklist item
    const item = document.createElement("div");
    item.className = "checklist-item";
    item.setAttribute("id", `checklist-item-${idx}`);
    item.innerHTML = `
      <span class="check-indicator" id="indicator-box-${idx}"></span>
      <span>${idx + 1}. ${angle.name}</span>
    `;
    
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      selectActiveAngle(idx);
    });

    checklistContainer.appendChild(item);
  });
}

// Update UI to focus on selected angle uploader guide
function selectActiveAngle(idx) {
  activeAngleIdx = idx;
  
  // Highlight active hotspot in SVG
  document.querySelectorAll(".hotspot-node").forEach((node, i) => {
    node.setAttribute("r", i === idx ? 7.5 : 5.5);
    if (uploadedAnglesStatus[i]) {
      node.className.baseVal = "hotspot-node active";
    } else {
      node.className.baseVal = i === idx ? "hotspot-node" : "hotspot-node";
    }
  });

  // Highlight active text checklist item
  document.querySelectorAll(".checklist-item").forEach((item, i) => {
    item.style.fontWeight = i === idx ? "700" : "400";
    item.style.borderColor = i === idx ? "var(--accent-color)" : "transparent";
  });

  // Update example photo guide viewport
  const ref = mandatoryAngles[idx];
  document.getElementById("ref-photo-img").src = ref.img;
  document.getElementById("ref-photo-title").textContent = `Angle ${String(idx + 1).padStart(2, '0')}: ${ref.name}`;
  document.getElementById("ref-photo-tip-text").textContent = ref.tip;

  // Update upload dropzone labels
  document.getElementById("upload-main-label").textContent = `Upload Portfolio (${ref.name})`;
  document.getElementById("drag-text").textContent = `DRAG & DROP IMAGE FOR ANGLE ${String(idx + 1).padStart(2, '0')}`;
}

// Drag & drop logic with simulated AI alignment validation
const dragZone = document.getElementById("drag-zone");
const sellFileInput = document.getElementById("sell-images");
const scanOverlay = document.getElementById("ai-scan-layer");
const scanText = document.getElementById("ai-scan-text");

if (dragZone) {
  dragZone.addEventListener("click", () => {
    sellFileInput.click();
  });

  sellFileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      simulateAiVerification(e.target.files[0]);
    }
  });

  dragZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragZone.style.borderColor = "var(--accent-color)";
  });
  dragZone.addEventListener("dragleave", () => {
    dragZone.style.borderColor = "var(--border-color)";
  });
  dragZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dragZone.style.borderColor = "var(--border-color)";
    if (e.dataTransfer.files.length > 0) {
      simulateAiVerification(e.dataTransfer.files[0]);
    }
  });
}

function simulateAiVerification(file) {
  // Show scanning overlay
  scanOverlay.style.display = "flex";
  scanText.textContent = "AI GEOMETRY ALIGNMENT CHECK...";
  
  // Track attempts for this angle
  attemptsCounter[activeAngleIdx]++;

  setTimeout(() => {
    // 10-year experienced detail: Trigger mismatch failure on 1st attempt to show detection
    if (attemptsCounter[activeAngleIdx] === 1) {
      scanOverlay.style.display = "none";
      showNotification(`ALIGNMENT ERROR: Silhouette mismatch detected for "${mandatoryAngles[activeAngleIdx].name}". Please align your camera angle to match the reference guide image.`, "error");
      sellFileInput.value = "";
    } else {
      // Success on 2nd attempt
      scanText.textContent = "VERIFYING EXHAUST/ENGINE MATCH... 93% CORRECT";
      setTimeout(() => {
        scanOverlay.style.display = "none";
        
        // Mark as verified
        uploadedAnglesStatus[activeAngleIdx] = true;
        uploadedImages[activeAngleIdx] = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=500";
        
        // Update nodes in checklist & blueprint
        const circle = document.getElementById(`hotspot-node-${activeAngleIdx}`);
        if (circle) circle.classList.add("active");
        
        const checklistItem = document.getElementById(`checklist-item-${activeAngleIdx}`);
        if (checklistItem) checklistItem.classList.add("validated");
        
        const indicator = document.getElementById(`indicator-box-${activeAngleIdx}`);
        if (indicator) {
          indicator.textContent = "✓";
        }

        showNotification(`IMAGE VALIDATED: ${mandatoryAngles[activeAngleIdx].name} matches reference template.`, "success");
        
        // Count verified angles
        const verifiedCount = uploadedAnglesStatus.filter(s => s === true).length;
        const submitBtn = document.getElementById("btn-submit-listing");
        submitBtn.textContent = `SUBMIT FOR OWNER APPRAISAL (${verifiedCount}/15 VERIFIED)`;

        if (verifiedCount === 15) {
          submitBtn.disabled = false;
          showNotification("All 15 camera angles validated. Form submission unlocked.", "success");
        } else {
          // Auto-select next unverified angle for faster flow
          const nextUnverified = uploadedAnglesStatus.findIndex(s => s === false);
          if (nextUnverified !== -1) {
            selectActiveAngle(nextUnverified);
          }
        }
      }, 1000);
    }
  }, 1800);
}

// Autocomplete logic for Brand & Model dropdowns
function initSellAutocomplete() {
  const brandInput = document.getElementById("sell-brand");
  const modelInput = document.getElementById("sell-model");
  const brandList = document.getElementById("brand-autocomplete-list");
  const modelList = document.getElementById("model-autocomplete-list");

  if (brandInput && modelInput) {
    brandInput.addEventListener("focus", () => {
      showBrandOptions();
    });
    brandInput.addEventListener("input", () => {
      showBrandOptions();
    });
    
    function showBrandOptions() {
      brandList.innerHTML = "";
      const filter = brandInput.value.toLowerCase();
      const brands = Object.keys(bikeBrandModels);
      
      brands.forEach(b => {
        if (b.toLowerCase().includes(filter)) {
          const item = document.createElement("div");
          item.textContent = b;
          item.addEventListener("click", () => {
            brandInput.value = b;
            brandList.innerHTML = "";
            modelInput.disabled = false;
            modelInput.value = "";
            modelInput.focus();
          });
          brandList.appendChild(item);
        }
      });
    }

    modelInput.addEventListener("focus", () => {
      showModelOptions();
    });
    modelInput.addEventListener("input", () => {
      showModelOptions();
    });

    function showModelOptions() {
      modelList.innerHTML = "";
      const selectedBrand = brandInput.value;
      const models = bikeBrandModels[selectedBrand];
      if (!models) return;

      const filter = modelInput.value.toLowerCase();
      models.forEach(m => {
        if (m.toLowerCase().includes(filter)) {
          const item = document.createElement("div");
          item.textContent = m;
          item.addEventListener("click", () => {
            modelInput.value = m;
            modelList.innerHTML = "";
          });
          modelList.appendChild(item);
        }
      });
    }

    document.addEventListener("click", (e) => {
      if (e.target !== brandInput) brandList.innerHTML = "";
      if (e.target !== modelInput) modelList.innerHTML = "";
    });
  }
}

// Handle Form Submission - Submits to owner's review desk
const sellForm = document.getElementById("sell-bike-form");
if (sellForm) {
  sellForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const allValidated = uploadedAnglesStatus.every(s => s === true);
    if (!allValidated) {
      showNotification("SUBMISSION ERROR: Please complete all 15 camera angles", "error");
      return;
    }

    const brand = document.getElementById("sell-brand").value;
    const model = document.getElementById("sell-model").value;
    const year = document.getElementById("sell-year").value;
    const odo = parseInt(document.getElementById("sell-odometer").value);
    const price = parseInt(document.getElementById("sell-price").value);
    const owners = document.getElementById("sell-owners").value + " Owner";
    const desc = document.getElementById("sell-description").value;

    const damageBoxes = document.querySelectorAll("input[name='damage']:checked");
    let issuesArr = [];
    damageBoxes.forEach(box => {
      issuesArr.push(box.nextElementSibling.textContent);
    });
    const issuesString = issuesArr.length > 0 ? issuesArr.join(", ") : "None";

    // Create pending submission
    const newSubmission = {
      id: `sub-${brand.substring(0,3).toLowerCase()}-${Date.now().toString().slice(-4)}`,
      brand: brand,
      model: model,
      year: parseInt(year),
      price: price,
      odo: `${odo.toLocaleString()} km`,
      owners: owners,
      issues: issuesString,
      details: desc,
      images: [...uploadedImages] // Copy verified photos
    };

    pendingSubmissions.push(newSubmission);

    showNotification(`SUBMISSION SUCCESS: ${brand} ${model} sent to Owner Review Desk.`, "success");
    
    // Reset uploader state
    sellForm.reset();
    uploadedAnglesStatus = Array(15).fill(false);
    uploadedImages = Array(15).fill(null);
    attemptsCounter = Array(15).fill(0);
    initBlueprintHotspots();
    selectActiveAngle(0);
    document.getElementById("sell-model").disabled = true;
    
    const submitBtn = document.getElementById("btn-submit-listing");
    submitBtn.textContent = `SUBMIT FOR OWNER APPRAISAL (0/15 VERIFIED)`;
    submitBtn.disabled = true;

    // Direct owner desk update
    renderAdminSubmissions();
  });
}

/* -------------------------------------------------------------
   OWNER ADMIN DESK BUSINESS LOGIC
   ------------------------------------------------------------- */
function renderAdminSubmissions() {
  const listPanel = document.getElementById("admin-submissions-list");
  const countEl = document.getElementById("admin-pending-count");
  if (!listPanel) return;

  listPanel.innerHTML = "";
  countEl.textContent = `${pendingSubmissions.length} PENDING`;

  if (pendingSubmissions.length === 0) {
    listPanel.innerHTML = `<div style="text-align: center; padding: 40px 0; color: var(--text-secondary); font-family: var(--font-display);">[ NO PENDING SUBMISSIONS ]</div>`;
    document.getElementById("admin-workspace-area").innerHTML = `
      <div class="workspace-empty-msg">
        <h3>No pending items. All trades have been finalized and pushed to the showroom.</h3>
      </div>
    `;
    return;
  }

  pendingSubmissions.forEach(sub => {
    const item = document.createElement("div");
    item.className = "admin-submission-item";
    item.setAttribute("id", `sub-item-${sub.id}`);
    item.innerHTML = `
      <div class="admin-sub-title">${sub.brand} ${sub.model} (${sub.year})</div>
      <div class="admin-sub-meta">
        <span>Expected: ₹${sub.price.toLocaleString("en-IN")}</span>
        <span>Odo: ${sub.odo}</span>
      </div>
    `;
    item.addEventListener("click", () => {
      document.querySelectorAll(".admin-submission-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
      loadAdminWorkspace(sub);
    });
    listPanel.appendChild(item);
  });
}

function loadAdminWorkspace(sub) {
  const area = document.getElementById("admin-workspace-area");
  area.innerHTML = "";

  // Specs panels and inputs
  area.innerHTML = `
    <h2 class="workspace-active-title">${sub.brand} ${sub.model}</h2>
    <div class="workspace-subtitle">Submission ID: ${sub.id.toUpperCase()}</div>

    <div class="admin-workspace-row">
      <div class="admin-specs-card">
        <h4>Seller Registration Details</h4>
        <p><strong>Year of Manufacture:</strong> ${sub.year}</p>
        <p><strong>Odometer:</strong> ${sub.odo}</p>
        <p><strong>Ownership count:</strong> ${sub.owners}</p>
      </div>
      <div class="admin-specs-card">
        <h4>Chassis & Structural Condition</h4>
        <p><strong>Seller Declared Damages:</strong> ${sub.issues}</p>
        <p><strong>Seller Extra Notes:</strong> ${sub.details}</p>
      </div>
    </div>

    <!-- Verified Images Inspector -->
    <div class="tech-panel-header">15 VERIFIED PORTFOLIO IMAGES (CLICK TO VIEW)</div>
    
    <div class="admin-photo-view-area">
      <img id="admin-large-preview" src="${sub.images[0]}" alt="Full View">
      <div class="admin-photo-view-caption" id="admin-large-caption">Angle 01: ${mandatoryAngles[0].name}</div>
    </div>

    <div class="admin-photos-grid" id="admin-thumbnails-grid">
      <!-- Generated below -->
    </div>

    <!-- Owner Finalization Form -->
    <div class="admin-form-group">
      <div class="form-group">
        <label class="tech-label">Final Valuation Price (₹) - Owner Decision</label>
        <input type="number" id="admin-final-price" value="${sub.price}" class="tech-input-luxe" style="font-weight:700; color:var(--accent-color); font-size:18px;">
      </div>
      <div class="form-group">
        <label class="tech-label">Add Official Showroom / Warranty notes</label>
        <textarea id="admin-official-notes" rows="2" class="tech-textarea" placeholder="e.g. Approved. Added 1-year RideByWire engine warranty. Recalibrated throttle spacer."></textarea>
      </div>
      
      <div class="form-row" style="margin-top:20px;">
        <button class="btn btn-primary" onclick="adminApproveListing('${sub.id}')">Approve & Push to Showroom</button>
        <button class="btn btn-outline" onclick="adminRejectListing('${sub.id}')">Reject Trade-In</button>
      </div>
    </div>
  `;

  // Render thumbnail buttons
  const thumbGrid = document.getElementById("admin-thumbnails-grid");
  sub.images.forEach((img, idx) => {
    const thumb = document.createElement("div");
    thumb.className = `admin-photo-thumb ${idx === 0 ? 'active' : ''}`;
    thumb.innerHTML = `
      <img src="${img}" alt="Thumb ${idx + 1}">
      <span class="admin-photo-thumb-label">A${String(idx + 1).padStart(2, '0')}</span>
    `;
    thumb.addEventListener("click", () => {
      document.querySelectorAll(".admin-photo-thumb").forEach(el => el.classList.remove("active"));
      thumb.classList.add("active");
      document.getElementById("admin-large-preview").src = img;
      document.getElementById("admin-large-caption").textContent = `Angle ${String(idx + 1).padStart(2, '0')}: ${mandatoryAngles[idx].name}`;
    });
    thumbGrid.appendChild(thumb);
  });
}

// Admin approves listing: officially joins public showroom catalog
window.adminApproveListing = function(subId) {
  const subIdx = pendingSubmissions.findIndex(s => s.id === subId);
  if (subIdx === -1) return;

  const sub = pendingSubmissions[subIdx];
  const finalPrice = parseInt(document.getElementById("admin-final-price").value);
  const adminNotes = document.getElementById("admin-official-notes").value.trim();

  // Create public bike object
  const approvedBike = {
    id: `bike-${sub.brand.substring(0,3).toLowerCase()}-${Date.now().toString().slice(-4)}`,
    type: "bike",
    brand: sub.brand,
    model: sub.model,
    year: sub.year,
    price: finalPrice,
    odo: sub.odo,
    owners: sub.owners,
    condition: adminNotes !== "" ? `Certified (${adminNotes})` : "Certified Showroom Pre-Owned",
    issues: sub.issues,
    details: sub.details,
    img: sub.images[0], // Uses the first verified photo as cover
    userSubmitted: true
  };

  // Push to main catalog
  inventory.unshift(approvedBike);

  // Remove from pending
  pendingSubmissions.splice(subIdx, 1);

  showNotification(`TRADE FINALIZED: ${approvedBike.brand} ${approvedBike.model} published at ₹${approvedBike.price.toLocaleString('en-IN')}`, "success");
  
  // Reload desk list
  renderAdminSubmissions();
  
  // Redirect to buy showroom
  renderCatalog("all");
  switchTab("buy");
};

window.adminRejectListing = function(subId) {
  const subIdx = pendingSubmissions.findIndex(s => s.id === subId);
  if (subIdx === -1) return;

  pendingSubmissions.splice(subIdx, 1);
  showNotification("TRADE REJECTED: Submission deleted from evaluation desks", "error");
  
  renderAdminSubmissions();
};

/* -------------------------------------------------------------
   INSURANCE RENEWAL WIZARD CALCULATOR LOGIC
   ------------------------------------------------------------- */
function initInsuranceListeners() {
  const openBtn = document.getElementById("btn-open-insurance");
  const closeBtn = document.getElementById("btn-close-insurance");
  const modal = document.getElementById("insurance-modal");
  const overlay = document.getElementById("insurance-overlay");

  if (openBtn) {
    const toggleModal = () => {
      modal.classList.toggle("open");
      overlay.classList.toggle("open");
      
      if (modal.classList.contains("open")) {
        resetInsuranceWizard();
      }
    };

    openBtn.addEventListener("click", toggleModal);
    closeBtn.addEventListener("click", toggleModal);
    overlay.addEventListener("click", toggleModal);
  }
}

function resetInsuranceWizard() {
  document.querySelectorAll(".wiz-step").forEach(s => s.classList.remove("active"));
  document.getElementById("wiz-step-1").classList.add("active");

  document.querySelectorAll(".step-dot").forEach(dot => {
    dot.classList.remove("active", "completed");
  });
  document.querySelector('.step-dot[data-step="1"]').classList.add("active");

  document.getElementById("ins-brand").value = "";
  document.getElementById("ins-cc").value = "";
  document.getElementById("ins-year").value = "";
  document.getElementById("ins-reg-no").value = "";
  
  document.getElementById("ins-addon-zero-dep").checked = false;
  document.getElementById("ins-addon-engine").checked = false;
  document.getElementById("ins-addon-rsa").checked = false;
  document.getElementById("ins-addon-consumables").checked = false;
}

function insNextStep(stepNum) {
  if (stepNum === 2) {
    const brand = document.getElementById("ins-brand").value;
    const cc = document.getElementById("ins-cc").value;
    const year = document.getElementById("ins-year").value;
    const reg = document.getElementById("ins-reg-no").value.trim();

    if (!brand || !cc || !year || !reg) {
      showNotification("VALIDATION ERROR: Please fill out all fields", "error");
      return;
    }
  }

  if (stepNum === 3) {
    calculateInsurancePremium();
  }

  if (stepNum === 4) {
    processInsuranceRenewalPayment();
    return;
  }

  document.querySelectorAll(".wiz-step").forEach(s => s.classList.remove("active"));
  document.getElementById(`wiz-step-${stepNum}`).classList.add("active");

  document.querySelectorAll(".step-dot").forEach(dot => {
    const dotStep = parseInt(dot.getAttribute("data-step"));
    dot.classList.remove("active");
    if (dotStep < stepNum) {
      dot.classList.add("completed");
    } else if (dotStep === stepNum) {
      dot.classList.add("active");
    }
  });
}

function insPrevStep(stepNum) {
  document.querySelectorAll(".wiz-step").forEach(s => s.classList.remove("active"));
  document.getElementById(`wiz-step-${stepNum}`).classList.add("active");

  document.querySelectorAll(".step-dot").forEach(dot => {
    const dotStep = parseInt(dot.getAttribute("data-step"));
    dot.classList.remove("active");
    if (dotStep < stepNum) {
      dot.classList.add("completed");
    } else if (dotStep === stepNum) {
      dot.classList.add("active");
    }
  });
}

function calculateInsurancePremium() {
  const cc = document.getElementById("ins-cc").value;
  const ncb = parseInt(document.getElementById("ins-ncb").value);
  
  let basePremium = 1500;
  if (cc === "250") basePremium = 2200;
  else if (cc === "400") basePremium = 3500;
  else if (cc === "650") basePremium = 5800;
  else if (cc === "1000") basePremium = 9800;

  let addonsTotal = 0;
  if (document.getElementById("ins-addon-zero-dep").checked) addonsTotal += 1500;
  if (document.getElementById("ins-addon-engine").checked) addonsTotal += 1200;
  if (document.getElementById("ins-addon-rsa").checked) addonsTotal += 500;
  if (document.getElementById("ins-addon-consumables").checked) addonsTotal += 300;

  const thirdPartyFixed = 2800;
  const ncbDiscount = (basePremium) * (ncb / 100);
  
  const taxablePremium = basePremium + thirdPartyFixed + addonsTotal - ncbDiscount;
  const gstTax = taxablePremium * 0.18;
  const totalPremium = taxablePremium + gstTax;

  document.getElementById("ins-lbl-base").textContent = `₹${basePremium.toLocaleString("en-IN")}`;
  document.getElementById("ins-lbl-tp").textContent = `₹${thirdPartyFixed.toLocaleString("en-IN")}`;
  document.getElementById("ins-lbl-ncb-val").textContent = `-₹${ncbDiscount.toLocaleString("en-IN")}`;
  document.getElementById("ins-lbl-addons").textContent = `₹${addonsTotal.toLocaleString("en-IN")}`;
  document.getElementById("ins-lbl-gst").textContent = `₹${gstTax.toLocaleString("en-IN", {maximumFractionDigits:2})}`;
  document.getElementById("ins-lbl-total").textContent = `₹${totalPremium.toLocaleString("en-IN", {maximumFractionDigits:2})}`;
}

function processInsuranceRenewalPayment() {
  showNotification("CONNECTING TO SECURE GATEWAY...", "success");
  
  setTimeout(() => {
    const regNum = document.getElementById("ins-reg-no").value.toUpperCase();
    const finalPremiumText = document.getElementById("ins-lbl-total").textContent;
    const policyNum = "RBW/INS/" + Math.floor(10000 + Math.random() * 90000) + "/2026";

    document.getElementById("ins-success-policy-no").textContent = policyNum;
    document.getElementById("ins-success-reg-no").textContent = regNum;
    document.getElementById("ins-success-premium").textContent = finalPremiumText;

    document.querySelectorAll(".wiz-step").forEach(s => s.classList.remove("active"));
    document.getElementById("wiz-step-4").classList.add("active");

    document.querySelectorAll(".step-dot").forEach(dot => {
      dot.classList.add("completed");
    });
    
    showNotification("POLICY RENEWED SUCCESSFULLY", "success");
  }, 1200);
}

function closeInsuranceModal() {
  document.getElementById("insurance-modal").classList.remove("open");
  document.getElementById("insurance-overlay").classList.remove("open");
}

/* -------------------------------------------------------------
   NEWS SECTION: RIDES TIMELINE & COUNTDOWNS
   ------------------------------------------------------------- */
function renderRidesTimeline() {
  const container = document.getElementById("rides-timeline");
  if (container) {
    container.innerHTML = "";

    communityRides.forEach(ride => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <div class="timeline-date">${ride.date}</div>
        <h3 class="timeline-title">${ride.title}</h3>
        <p class="timeline-desc">${ride.desc}</p>
        <div class="timeline-desc" style="font-size:12.5px; color:var(--text-primary);"><strong>Route:</strong> ${ride.route}</div>
        <div class="timeline-meta">${ride.difficulty}</div>
      `;
      container.appendChild(item);
    });
  }
}

function renderGiveaways() {
  const container = document.getElementById("giveaway-list");
  if (container) {
    container.innerHTML = "";

    activeGiveaways.forEach((give, idx) => {
      const card = document.createElement("div");
      card.className = "giveaway-card";
      card.innerHTML = `
        <h3 class="giveaway-title">🎁 ${give.title}</h3>
        <p class="giveaway-desc">${give.desc}</p>
        <div class="giveaway-timer" id="giveaway-timer-${idx}">CLOSING IN: --d --h --m --s</div>
      `;
      container.appendChild(card);
      
      startGiveawayCountdown(give.timerEnd, `giveaway-timer-${idx}`);
    });
  }
}

function startGiveawayCountdown(endDate, elementId) {
  const timerEl = document.getElementById(elementId);
  if (!timerEl) return;

  const updateTimer = () => {
    const now = new Date().getTime();
    const diff = endDate.getTime() - now;

    if (diff <= 0) {
      timerEl.textContent = "CONTEST FINISHED - PROCESSING WINNERS";
      timerEl.style.color = "#10b981";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerEl.textContent = `CLOSING IN: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* -------------------------------------------------------------
   LEAFLET MAP INTEGRATION
   ------------------------------------------------------------- */
function initLeafletMap() {
  const rbwCoords = [28.5020, 77.1770]; 

  leafletMap = L.map('map', {
    center: rbwCoords,
    zoom: 13,
    zoomControl: true
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(leafletMap);

  const marker = L.marker(rbwCoords).addTo(leafletMap);
  marker.bindPopup(`
    <div style="font-family: var(--font-body); color: #0f0f12; line-height: 1.5; padding: 5px;">
      <strong style="color: #ff334b; font-family: var(--font-display); font-size:14px; display:block; margin-bottom:4px;">RIDEBYWIRE Showroom</strong>
      Plot No. 13, Chhattarpur Main Rd,<br>
      New Delhi, Delhi 110074<br>
      <a href="tel:9992228554" style="font-weight: 700; color: #ff334b; text-decoration: none; display:inline-block; margin-top:5px;">Call: 999-222-8554</a>
    </div>
  `).openPopup();
}
