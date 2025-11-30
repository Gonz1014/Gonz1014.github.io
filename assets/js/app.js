(()=>{const e=()=>{document.documentElement.style.setProperty("--body-scroll-width",window.innerWidth-document.documentElement.clientWidth+"px")};window.addEventListener("resize",e),e()})();
feather.replace({class:"icon"});{const e=$(window),t=t=>{const o=e.height()||0,n=t.height()||0,s=(t.offset()||{top:0}).top,r=s+n,i=e.scrollTop()||0,a=i+o,l=n-(Math.max(r,a)-Math.min(s,i)-o);return l<=0?0:l/n},o=.25,n=$("[data-viewport-dark]").toArray().map((e=>({ratio:parseFloat(e.getAttribute("data-viewport-dark")||"")||o,$el:$(e)})));if(n.length){const o=()=>{const e=n.some((e=>t(e.$el)>e.ratio));setDarkMode(e)};e.on("scroll resize load",o),o()}}{class e{constructor(e){this.dd=e,this.placeholder=this.dd.find("span"),this.opts=this.dd.find(".uk-droplist-dropdown li"),this.val="",this.index=-1,this.initEvents(),this.onChangeHandlers=new Set}initEvents(){const e=this;e.dd.on("click",(function(e){e.preventDefault(),e.stopPropagation(),$(this).toggleClass("uk-active")})),e.opts.on("click",(function(){const t=$(this);e.val=t.text(),e.index=t.index(),e.placeholder.text(e.val),t.siblings().removeClass("uk-active"),t.filter(':contains("'+e.val+'")').addClass("uk-active"),e.dd.trigger("change")})).trigger("change"),$(document).on("click",(function(){e.dd.removeClass("uk-active")}))}get options(){return this.opts}get value(){return this.val}get selectedIndex(){return this.index}}$((function(){document.querySelectorAll(".uk-droplist").forEach((t=>{const o=new e($(t));t.classList.contains("uk-droplist-filter")&&o.dd.on("change",(()=>{const e=o.options[o.selectedIndex];UIkit.filter(o.dd.closest("[data-uk-filter]")).apply(e)}))}))}))}{const e=[...document.querySelectorAll(".uk-navbar-nav ul")],t=()=>{if(!e[0]||!e[0].offsetParent)return;const t=document.documentElement.clientWidth;e.forEach((e=>{e.classList.remove("reverse-submenu-open");e.getBoundingClientRect().right>t&&e.classList.add("reverse-submenu-open")}))};window.addEventListener("load",t),window.addEventListener("resize",t),setInterval(t,1e3)}{const e=document.querySelectorAll("[data-image-hover-revealer]");if(e.length){const t=17,o=400,n=!0,s=document.createElement("img");let r,i;s.alt="",s.className="image-hover-revealer",document.body.append(s);let a=!1;e.forEach((e=>{if(!(e instanceof HTMLElement))return;if(!(s instanceof Image))return;const l=e.getAttribute("data-image-hover-revealer");e.addEventListener("mouseover",(()=>{s.setAttribute("src",l),s.classList.add("uk-active"),r=Date.now(),a=!0,clearTimeout(i)})),window.addEventListener("mousemove",(e=>{if(!a)return;let o=e.pageX,r=e.pageY;const i=s.clientWidth,l=s.clientHeight;o+i>=window.scrollX+window.innerWidth-t&&(n?o-=i:o=window.innerWidth-t-i),r+l>=window.scrollY+window.innerHeight&&(n?r-=l:r=window.scrollY+window.innerHeight-l),s.style.setProperty("--move-x",o+"px"),s.style.setProperty("--move-y",r+"px")})),e.addEventListener("mouseleave",(()=>{const e=Date.now()-r;i=setTimeout((()=>{s.classList.remove("uk-active"),i=setTimeout((()=>{a=!1,s.style.setProperty("--move-x","0px"),s.style.setProperty("--move-y","0px")}),o)}),Math.max(0,o-e))}))}))}}const stickyItemContrast=(e,t,o,n={})=>{n=Object.assign({black:"contrast-black",white:"contrast-white"},n);const s=(e=>{const t={};return o=>{if(null!=t[o])return t[o];{const n=e(o);return t[o]=n,n}}})((e=>{if(!e.startsWith("rgb("))return"black";const t=e.slice(4,-1).split(",").map(Number);return(299*t[0]+587*t[1]+114*t[2])/1e3>=128?"black":"white"})),r=$(window);let i="";const a=()=>{const r="function"==typeof o?o(t):o,a=e.map((e=>e instanceof HTMLElement&&window.scrollY+r>=e.offsetTop)).lastIndexOf(!0),l=(e=>{let t="";for(;e&&(t=window.getComputedStyle(e,null).getPropertyValue("background-color"),/rgba\(.*?,\s*0\)$/.test(t));)e=e.parentElement;return t})(e[-1===a?0:a]),c=s(l);i!==c&&n[i]&&t.classList.remove(n[i]),n[c]&&t.classList.add(n[c]),i=c};r.on("scroll resize load darkmodechange",a),a()},getElementParents=e=>{const t=[];for(;e=e.parentNode;)t.push(e);return t},stickyItemsDarkMode=(e,t)=>{const o=[...document.querySelectorAll('.uk-section, [class*="uk-section-"]')],n=[...document.querySelectorAll(e)];for(const e of n)stickyItemContrast(o,e,t,{black:"",white:"uk-dark"})};stickyItemsDarkMode(".uni-header, .uni-sticky-menu, .uni-header-social",(e=>e.offsetTop+e.clientHeight/2)),stickyItemsDarkMode(".uni-header-location, .uni-header-section-indicator",(()=>window.innerHeight/2));{const e=document.querySelector(".uni-header-section-indicator");if(e){const t=[...e.querySelectorAll("li[data-selector]")].map((e=>document.querySelector(e.getAttribute("data-selector")))),o=$(window);let n=0;const s=()=>{const o=window.innerHeight/2,s=t.map((e=>e instanceof HTMLElement&&window.scrollY+o>=e.offsetTop)).lastIndexOf(!0);-1!==s&&n!==s&&(n=s,e.style.setProperty("--section-indicator-index",n+""))};o.on("scroll resize load darkmodechange",s),s()}}document.querySelectorAll("[data-darkmode-toggle] input").forEach((e=>{e.addEventListener("change",(()=>{setDarkMode(!isDarkMode());const e=isDarkMode();localStorage.setItem("darkMode",e?"1":"0")})),e.checked=isDarkMode()})),document.querySelectorAll("[data-uk-modal] [data-uk-scrollspy-nav] a").forEach((e=>{e.addEventListener("click",(t=>{UIkit.toggle(e.closest("[data-uk-modal].uk-open")).toggle()}))})),document.querySelectorAll(".uk-horizontal-scroll").forEach((e=>{e.addEventListener("wheel",(t=>{t.preventDefault(),e.scrollBy(t.deltaY,0)}))}));
/* ====== City data (deduped, normalized, with coordinates) ====== */
var cityData = [
  // Spain
  { id: "madrid-es",               name: "Madrid, Spain",                status: "visited", lat: 40.4168, lng: -3.7038, image: "assets/images/cities/madrid-es.jpg",               caption: "" },
  { id: "segovia-es",              name: "Segovia, Spain",               status: "visited", lat: 40.9429, lng: -4.1088, image: "assets/images/cities/segovia-es.jpg",              caption: "" },
  { id: "valle-de-los-caidos-es",  name: "Valle de los Caídos, Spain",   status: "visited", lat: 40.6414, lng: -4.1513, image: "assets/images/cities/valle-de-los-caidos-es.jpg",   caption: "" },
  { id: "barcelona-es",            name: "Barcelona, Spain",             status: "visited", lat: 41.3874, lng: 2.1686,  image: "assets/images/cities/barcelona-es.jpg",            caption: "" },
  { id: "ibiza-es",                name: "Ibiza, Spain",                 status: "visited", lat: 38.9067, lng: 1.4206,  image: "assets/images/cities/ibiza-es.jpg",                caption: "" },

  // United States
  { id: "miami-us",                name: "Miami, USA",                   status: "visited", lat: 25.7617, lng: -80.1918, image: "assets/images/cities/miami-us.jpg",                caption: "" },
  { id: "new-york-us",             name: "New York, USA",                status: "visited", lat: 40.7128, lng: -74.0060, image: "assets/images/cities/new-york-us.jpg",             caption: "" },
  { id: "boston-us",               name: "Boston, USA",                  status: "visited", lat: 42.3601, lng: -71.0589, image: "assets/images/cities/boston-us.jpg",               caption: "" },
  { id: "philadelphia-us",         name: "Philadelphia, USA",            status: "visited", lat: 39.9526, lng: -75.1652, image: "assets/images/cities/philadelphia-us.jpg",         caption: "" },
  { id: "new-haven-us",            name: "New Haven, USA",               status: "visited", lat: 41.3083, lng: -72.9279, image: "assets/images/cities/new-haven-us.jpg",            caption: "" },
  { id: "hanover-us",              name: "Hanover, USA",                 status: "visited", lat: 43.7022, lng: -72.2895, image: "assets/images/cities/hanover-us.jpg",              caption: "" },
  { id: "san-diego-us",            name: "San Diego, USA",               status: "visited", lat: 32.7157, lng: -117.1611, image: "assets/images/cities/san-diego-us.jpg",           caption: "" },
  { id: "san-francisco-us",        name: "San Francisco, USA",           status: "visited", lat: 37.7749, lng: -122.4194, image: "assets/images/cities/san-francisco-us.jpg",       caption: "" },
  { id: "vail-us",                 name: "Vail, USA",                    status: "visited", lat: 39.6403, lng: -106.3742, image: "assets/images/cities/vail-us.jpg",                caption: "" },
  { id: "oak-ridge-us",            name: "Oak Ridge, USA",               status: "visited", lat: 36.0104, lng: -84.2696,  image: "assets/images/cities/oak-ridge-us.jpg",           caption: "" },
  { id: "hubbard-glacier-us",      name: "Hubbard Glacier, Alaska, USA", status: "visited", lat: 60.002,  lng: -139.505, image: "assets/images/cities/hubbard-glacier-us.jpg",      caption: "" },
  { id: "honolulu-us",             name: "Honolulu, USA",                status: "visited", lat: 21.3069, lng: -157.8583, image: "assets/images/cities/honolulu-us.jpg",             caption: "" },
  { id: "kauai-us",                name: "Kauai, USA",                   status: "visited", lat: 22.0964, lng: -159.5261, image: "assets/images/cities/kauai-us.jpg",                caption: "" },
  { id: "hawaii-island-us",        name: "Hawaii Island (Big Island), USA", status: "visited", lat: 19.5429, lng: -155.6659, image: "assets/images/cities/hawaii-island-us.jpg",      caption: "" },

  // Mexico
  { id: "cancun-mx",               name: "Cancún, Mexico",               status: "visited", lat: 21.1619, lng: -86.8515, image: "assets/images/cities/cancun-mx.jpg",               caption: "" },
  { id: "oaxaca-mx",               name: "Oaxaca, Mexico",               status: "visited", lat: 17.0732, lng: -96.7266, image: "assets/images/cities/oaxaca-mx.jpg",               caption: "" },
  { id: "bacalar-mx",              name: "Bacalar, Mexico",              status: "visited", lat: 18.6772, lng: -88.3923, image: "assets/images/cities/bacalar-mx.jpg",              caption: "" },
  { id: "mexico-city-mx",          name: "Ciudad de México, Mexico",     status: "visited", lat: 19.4326, lng: -99.1332, image: "assets/images/cities/mexico-city-mx.jpg",          caption: "" },
  { id: "merida-mx",               name: "Mérida, Mexico",               status: "visited", lat: 20.9674, lng: -89.5926, image: "assets/images/cities/merida-mx.jpg",               caption: "" },
  { id: "monterrey-mx",            name: "Monterrey, Mexico",            status: "visited", lat: 25.6866, lng: -100.3161, image: "assets/images/cities/monterrey-mx.jpg",           caption: "" },
  { id: "puerto-vallarta-mx",      name: "Puerto Vallarta, Mexico",      status: "visited", lat: 20.6534, lng: -105.2253, image: "assets/images/cities/puerto-vallarta-mx.jpg",      caption: "" },
  { id: "valle-de-bravo-mx",       name: "Valle de Bravo, Mexico",       status: "visited", lat: 19.1950, lng: -100.1310, image: "assets/images/cities/valle-de-bravo-mx.jpg",       caption: "" },
  { id: "aguascalientes-mx",       name: "Aguascalientes, Mexico",       status: "visited", lat: 21.8853, lng: -102.2916, image: "assets/images/cities/aguascalientes-mx.jpg",      caption: "" },

  // Australia
  { id: "sydney-au",               name: "Sydney, Australia",            status: "visited", lat: -33.8688, lng: 151.2093, image: "assets/images/cities/sydney-au.jpg",               caption: "" },
  { id: "melbourne-au",            name: "Melbourne, Australia",         status: "visited", lat: -37.8136, lng: 144.9631, image: "assets/images/cities/melbourne-au.jpg",            caption: "" },
  { id: "hamilton-island-au",      name: "Hamilton Island, Australia",   status: "visited", lat: -20.3489, lng: 148.9568, image: "assets/images/cities/hamilton-island-au.jpg",      caption: "" },
  { id: "blue-mountains-au",       name: "Blue Mountains, Australia",    status: "visited", lat: -33.7000, lng: 150.3000, image: "assets/images/cities/blue-mountains-au.jpg",       caption: "" },
  { id: "airlie-beach-au",         name: "Airlie Beach, Australia",      status: "visited", lat: -20.2675, lng: 148.7169, image: "assets/images/cities/airlie-beach-au.jpg",         caption: "" },
  { id: "brisbane-au",             name: "Brisbane, Australia",          status: "visited", lat: -27.4698, lng: 153.0251, image: "assets/images/cities/brisbane-au.jpg",             caption: "" },
  { id: "gold-coast-au",           name: "Gold Coast, Australia",        status: "visited", lat: -28.0167, lng: 153.4000, image: "assets/images/cities/gold-coast-au.jpg",           caption: "" },
  { id: "byron-bay-au",            name: "Byron Bay, Australia",         status: "visited", lat: -28.6474, lng: 153.6020, image: "assets/images/cities/byron-bay-au.jpg",            caption: "" },

  // Malaysia
  { id: "cameron-highlands-my",    name: "Cameron Highlands, Malaysia",  status: "visited", lat: 4.4700,  lng: 101.3780, image: "assets/images/cities/cameron-highlands-my.jpg",    caption: "" },
  { id: "kuala-lumpur-my",         name: "Kuala Lumpur, Malaysia",       status: "visited", lat: 3.1390,  lng: 101.6869, image: "assets/images/cities/kuala-lumpur-my.jpg",         caption: "" },
  { id: "perhentian-islands-my",   name: "Perhentian Islands, Malaysia", status: "visited", lat: 5.9133,  lng: 102.7426, image: "assets/images/cities/perhentian-islands-my.jpg",   caption: "" },

  // Indonesia
  { id: "bali-id",                 name: "Bali, Indonesia",              status: "visited", lat: -8.3405, lng: 115.0920, image: "assets/images/cities/bali-id.jpg",                 caption: "" },
  { id: "nusa-penida-id",          name: "Nusa Penida, Indonesia",       status: "visited", lat: -8.7270, lng: 115.5444, image: "assets/images/cities/nusa-penida-id.jpg",          caption: "" },
  { id: "nusa-lembongan-id",       name: "Nusa Lembongan, Indonesia",    status: "visited", lat: -8.6726, lng: 115.4523, image: "assets/images/cities/nusa-lembongan-id.jpg",       caption: "" },
  { id: "komodo-island-id",        name: "Komodo Island, Indonesia",     status: "visited", lat: -8.5667, lng: 119.4833, image: "assets/images/cities/komodo-island-id.jpg",        caption: "" },

  // China
  { id: "wuhan-cn",                name: "Wuhan, China",                 status: "visited", lat: 30.5928, lng: 114.3055, image: "assets/images/cities/wuhan-cn.jpg",                caption: "" },
  { id: "chengdu-cn",              name: "Chengdu, China",               status: "visited", lat: 30.5728, lng: 104.0668, image: "assets/images/cities/chengdu-cn.jpg",              caption: "" },
  { id: "kashgar-cn",              name: "Kashgar, China",               status: "visited", lat: 39.4704, lng: 75.9898,  image: "assets/images/cities/kashgar-cn.jpg",              caption: "" },
  { id: "tashkurgan-cn",           name: "Tashkurgan, China",            status: "visited", lat: 37.7724, lng: 75.2280,  image: "assets/images/cities/tashkurgan-cn.jpg",           caption: "" },
  { id: "urumqi-cn",               name: "Urumqi, China",                status: "visited", lat: 43.8256, lng: 87.6168,  image: "assets/images/cities/urumqi-cn.jpg",               caption: "" },
  { id: "turpan-cn",               name: "Turpan, China",                status: "visited", lat: 42.9423, lng: 89.1895,  image: "assets/images/cities/turpan-cn.jpg",               caption: "" },
  { id: "dunhuang-cn",             name: "Dunhuang, China",              status: "visited", lat: 40.1421, lng: 94.6616,  image: "assets/images/cities/dunhuang-cn.jpg",             caption: "" },
  { id: "lanzhou-cn",              name: "Lanzhou, China",               status: "visited", lat: 36.0611, lng: 103.8343, image: "assets/images/cities/lanzhou-cn.jpg",              caption: "" },
  { id: "lijiang-cn",              name: "Lijiang, China",               status: "visited", lat: 26.8721, lng: 100.2389, image: "assets/images/cities/lijiang-cn.jpg",              caption: "" },
  { id: "shangri-la-cn",           name: "Shangri-La, China",            status: "visited", lat: 27.8333, lng: 99.7000,  image: "assets/images/cities/shangri-la-cn.jpg",           caption: "" },
  { id: "chongqing-cn",            name: "Chongqing, China",             status: "visited", lat: 29.5630, lng: 106.5516, image: "assets/images/cities/chongqing-cn.jpg",            caption: "" },

  // New Zealand
  { id: "christchurch-nz",         name: "Christchurch, New Zealand",    status: "visited", lat: -43.5321, lng: 172.6362, image: "assets/images/cities/christchurch-nz.jpg",         caption: "" },
  { id: "arthurs-pass-nz",         name: "Arthur's Pass, New Zealand",   status: "visited", lat: -42.9417, lng: 171.5653, image: "assets/images/cities/arthurs-pass-nz.jpg",         caption: "" },
  { id: "lake-tekapo-nz",          name: "Lake Tekapo, New Zealand",     status: "visited", lat: -44.0018, lng: 170.4830, image: "assets/images/cities/lake-tekapo-nz.jpg",          caption: "" },
  { id: "mount-cook-nz",           name: "Mount Cook, New Zealand",      status: "visited", lat: -43.5950, lng: 170.1410, image: "assets/images/cities/mount-cook-nz.jpg",           caption: "" },
  { id: "queenstown-nz",           name: "Queenstown, New Zealand",      status: "visited", lat: -45.0312, lng: 168.6626, image: "assets/images/cities/queenstown-nz.jpg",           caption: "" },
  { id: "milford-sound-nz",        name: "Milford Sound, New Zealand",   status: "visited", lat: -44.6705, lng: 167.9243, image: "assets/images/cities/milford-sound-nz.jpg",        caption: "" },
  { id: "wanaka-nz",               name: "Wanaka, New Zealand",          status: "visited", lat: -44.6983, lng: 169.1347, image: "assets/images/cities/wanaka-nz.jpg",               caption: "" },
  { id: "arrowtown-nz",            name: "Arrowtown, New Zealand",       status: "visited", lat: -44.9380, lng: 168.8107, image: "assets/images/cities/arrowtown-nz.jpg",            caption: "" },

  // Singapore & Japan
  { id: "singapore-sg",            name: "Singapore",                    status: "visited", lat: 1.3521,  lng: 103.8198, image: "assets/images/cities/singapore-sg.jpg",            caption: "" },
  { id: "tokyo-jp",                name: "Tokyo, Japan",                 status: "visited", lat: 35.6762, lng: 139.6503, image: "assets/images/cities/tokyo-jp.jpg",                caption: "" },
  { id: "kyoto-jp",                name: "Kyoto, Japan",                 status: "visited", lat: 35.0116, lng: 135.7681, image: "assets/images/cities/kyoto-jp.jpg",                caption: "" },
  { id: "osaka-jp",                name: "Osaka, Japan",                 status: "visited", lat: 34.6937, lng: 135.5023, image: "assets/images/cities/osaka-jp.jpg",                caption: "" },
  { id: "sapporo-jp",              name: "Sapporo, Japan",               status: "visited", lat: 43.0618, lng: 141.3545, image: "assets/images/cities/sapporo-jp.jpg",              caption: "" },
  { id: "niseko-jp",               name: "Niseko, Japan",                status: "visited", lat: 42.8048, lng: 140.6874, image: "assets/images/cities/niseko-jp.jpg",               caption: "" },

  // UK & Europe
  { id: "london-gb",               name: "London, United Kingdom",       status: "visited", lat: 51.5074, lng: -0.1278,  image: "assets/images/cities/london-gb.jpg",              caption: "" },
  { id: "berlin-de",               name: "Berlin, Germany",              status: "visited", lat: 52.5200, lng: 13.4050,  image: "assets/images/cities/berlin-de.jpg",              caption: "" },
  { id: "paris-fr",                name: "Paris, France",                status: "visited", lat: 48.8566, lng: 2.3522,   image: "assets/images/cities/paris-fr.jpg",               caption: "" },
  { id: "amsterdam-nl",            name: "Amsterdam, Netherlands",       status: "visited", lat: 52.3676, lng: 4.9041,   image: "assets/images/cities/amsterdam-nl.jpg",           caption: "" },
  { id: "prague-cz",               name: "Prague, Czech Republic",       status: "visited", lat: 50.0755, lng: 14.4378,  image: "assets/images/cities/prague-cz.jpg",              caption: "" },
  { id: "split-hr",                name: "Split, Croatia",               status: "visited", lat: 43.5081, lng: 16.4402,  image: "assets/images/cities/split-hr.jpg",               caption: "" },
  { id: "hvar-hr",                 name: "Hvar, Croatia",                status: "visited", lat: 43.1727, lng: 16.4424,  image: "assets/images/cities/hvar-hr.jpg",                caption: "" },
  { id: "mykonos-gr",              name: "Mykonos, Greece",              status: "visited", lat: 37.4467, lng: 25.3289,  image: "assets/images/cities/mykonos-gr.jpg",             caption: "" },
  { id: "istanbul-tr",             name: "Istanbul, Turkey",             status: "visited", lat: 41.0082, lng: 28.9784,  image: "assets/images/cities/istanbul-tr.jpg",            caption: "" },
  { id: "naples-it",               name: "Naples, Italy",                status: "visited", lat: 40.8518, lng: 14.2681, image: "assets/images/cities/naples-it.jpg",               caption: "" },
  { id: "positano-it",             name: "Positano, Italy",              status: "visited", lat: 40.6281, lng: 14.4845, image: "assets/images/cities/positano-it.jpg",             caption: "" },
  { id: "sorrento-it",             name: "Sorrento, Italy",              status: "visited", lat: 40.6263, lng: 14.3758, image: "assets/images/cities/sorrento-it.jpg",             caption: "" },
  { id: "civitavecchia-it",        name: "Civitavecchia, Italy",         status: "visited", lat: 42.0930, lng: 11.7926, image: "assets/images/cities/civitavecchia-it.jpg",        caption: "" },
  { id: "pisa-it",                 name: "Pisa, Italy",                  status: "visited", lat: 43.7228, lng: 10.4017, image: "assets/images/cities/pisa-it.jpg",                 caption: "" },
  { id: "varese-it",               name: "Varese, Italy",                status: "visited", lat: 45.8200, lng: 8.8250,  image: "assets/images/cities/varese-it.jpg",               caption: "" },
  { id: "marseille-fr",            name: "Marseille, France",            status: "visited", lat: 43.2965, lng: 5.3698,  image: "assets/images/cities/marseille-fr.jpg",            caption: "" },
  { id: "palermo-it",              name: "Palermo, Italy",               status: "visited", lat: 38.1157, lng: 13.3615, image: "assets/images/cities/palermo-it.jpg",              caption: "" },

  // Canada
  { id: "toronto-ca",              name: "Toronto, Canada",              status: "visited", lat: 43.6532, lng: -79.3832, image: "assets/images/cities/toronto-ca.jpg",              caption: "" }
];
// Initialize Leaflet map on About page
document.addEventListener('DOMContentLoaded', function () {
  var mapElement = document.getElementById('world-map');
  if (!mapElement || typeof L === 'undefined') return;

  // Create the map inside the #world-map container
  var map = L.map('world-map', {
    worldCopyJump: true,
    zoomControl: true
  }).setView([20, 0], 2); // [lat, lng], zoom

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 1,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // --- Markers + hover card wiring ---
  var hoverCard = document.getElementById('city-hover-card');
  var hoverImg = document.getElementById('city-hover-image');
  var hoverName = document.getElementById('city-hover-name');
  var hoverCaption = document.getElementById('city-hover-caption');
  var cityList = document.querySelector('.city-list ul');
  var defaultImg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="260"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="%23c9d6ff"/><stop offset="1" stop-color="%238bacf7"/></linearGradient></defs><rect width="400" height="260" fill="url(%23g)"/></svg>';

  var validCities = cityData.filter(function (c) {
    return typeof c.lat === 'number' && typeof c.lng === 'number';
  });

  // Determine visited countries from IDs (expects "-xx" country code at end)
  var countryFromId = function (id) {
    var m = id && id.match(/-([a-z]{2})$/);
    return m ? m[1] : null;
  };
  var visitedCountries = new Set();
  validCities.forEach(function (c) {
    var code = countryFromId(c.id);
    if (code) visitedCountries.add(code);
    c.status = "visited"; // force visited status
  });

  // Rough country bounding boxes to tint visited countries
  // Simplified country polygons (approximate outlines)
  var countryShapes = {
    us: [
      [
        [49.38, -124.7], [47.0, -124.7], [45.0, -123.0], [41.0, -124.0], [39.0, -123.0],
        [37.0, -122.0], [36.0, -120.0], [34.0, -118.0], [32.0, -117.0], [29.0, -114.0],
        [27.0, -110.0], [25.5, -104.0], [25.5, -97.0], [26.0, -82.0], [30.0, -81.0],
        [33.0, -80.0], [35.0, -75.0], [38.0, -74.0], [40.0, -73.0], [45.0, -70.0],
        [47.0, -69.0], [48.8, -69.0], [49.38, -95.0], [49.38, -110.0], [49.38, -124.7]
      ],
      [
        [55.0, -132.0], [57.0, -135.0], [59.0, -140.0], [60.0, -146.0], [62.0, -150.0],
        [64.0, -154.0], [66.0, -152.0], [67.5, -150.0], [69.0, -142.0], [68.0, -136.0],
        [66.0, -132.0], [62.0, -132.0], [58.0, -133.0], [55.0, -132.0]
      ],
      [
        [18.0, -160.0], [19.5, -160.0], [21.0, -157.0], [22.5, -155.0], [22.5, -153.0],
        [21.0, -152.0], [19.5, -154.0], [18.0, -156.0], [18.0, -160.0]
      ]
    ],
    mx: [
      [32.7, -117.0], [29.0, -114.0], [28.0, -111.0], [24.0, -109.0], [22.0, -105.0],
      [19.0, -106.0], [17.0, -104.0], [15.0, -96.0], [14.5, -92.0], [17.8, -90.0],
      [19.0, -87.0], [21.5, -87.0], [24.0, -97.0], [27.0, -99.0], [31.0, -106.0],
      [32.7, -117.0]
    ],
    es: [
      [36.0, -6.5], [36.8, -9.3], [43.0, -9.3], [43.8, -3.0], [43.8, 3.3], [41.0, 3.3],
      [39.0, 2.0], [38.0, 0.0], [36.7, -1.5], [36.0, -6.5]
    ],
    au: [
      [-10.7, 143.0], [-11.0, 136.0], [-15.0, 129.0], [-17.0, 122.0], [-22.0, 114.0],
      [-33.0, 114.0], [-34.0, 118.0], [-35.0, 130.0], [-38.0, 140.0], [-34.0, 149.0],
      [-28.0, 153.0], [-22.0, 152.0], [-16.0, 146.0], [-10.7, 143.0]
    ],
    my: [
      [1.0, 103.5], [4.0, 103.0], [5.5, 103.0], [6.7, 101.0], [6.3, 99.6], [4.5, 99.8],
      [2.0, 100.2], [1.0, 103.5]
    ],
    id: [
      [-8.0, 95.0], [1.0, 97.0], [5.0, 100.0], [2.0, 104.0], [-3.0, 108.0], [-6.0, 112.0],
      [-8.0, 118.0], [-5.0, 122.0], [-2.0, 128.0], [-4.0, 133.0], [0.0, 135.0], [2.0, 141.0],
      [-9.0, 140.0], [-10.0, 135.0], [-9.0, 125.0], [-9.0, 115.0], [-8.0, 95.0]
    ],
    cn: [
      [18.0, 109.0], [20.0, 107.0], [23.0, 104.0], [26.0, 100.0], [30.0, 98.0], [33.0, 94.0],
      [36.0, 90.0], [40.0, 88.0], [43.0, 90.0], [47.0, 95.0], [49.0, 103.0], [50.0, 110.0],
      [47.0, 117.0], [45.0, 124.0], [42.0, 128.0], [38.0, 130.0], [33.0, 131.0], [27.0, 124.0],
      [24.0, 118.0], [22.0, 114.0], [20.0, 111.0], [18.0, 109.0]
    ],
    nz: [
      [-34.4, 172.0], [-37.0, 174.0], [-38.5, 176.0], [-40.0, 176.5], [-41.3, 175.5],
      [-42.5, 173.0], [-43.8, 171.0], [-44.5, 170.0], [-45.9, 168.0], [-46.6, 167.0],
      [-47.5, 169.0], [-46.0, 170.5], [-44.0, 171.5], [-42.0, 172.5], [-40.0, 174.5],
      [-38.5, 175.5], [-36.0, 175.5], [-34.4, 172.0]
    ],
    sg: [
      [1.25, 103.6], [1.47, 103.6], [1.47, 104.0], [1.25, 104.0], [1.25, 103.6]
    ],
    jp: [
      [45.5, 141.0], [43.5, 145.0], [41.5, 142.0], [39.5, 141.0], [37.5, 138.0], [35.5, 136.0],
      [33.0, 135.0], [32.0, 132.0], [33.0, 130.0], [34.0, 129.0], [35.0, 131.0], [36.5, 134.0],
      [37.0, 138.0], [38.0, 140.0], [40.0, 141.0], [42.0, 140.0], [43.5, 141.0], [45.5, 141.0]
    ],
    gb: [
      [50.0, -5.0], [51.0, -6.0], [53.0, -6.0], [55.0, -5.0], [57.0, -4.0],
      [58.0, -2.0], [57.5, 0.5], [55.5, 1.5], [53.0, 1.0], [51.0, 0.0], [50.0, -1.0], [50.0, -5.0]
    ],
    de: [
      [47.3, 7.0], [48.0, 5.5], [49.5, 6.0], [50.5, 6.8], [51.5, 6.0], [52.5, 8.5],
      [53.3, 9.5], [54.7, 8.5], [55.0, 10.0], [54.5, 12.0], [53.5, 14.0], [52.0, 14.8],
      [50.5, 15.0], [48.8, 13.5], [47.3, 12.0], [47.3, 7.0]
    ],
    fr: [
      [51.0, 2.5], [50.0, -1.0], [48.5, -4.5], [46.5, -3.5], [45.0, -1.0], [43.6, 3.0],
      [42.5, 3.0], [43.4, 7.5], [44.5, 7.6], [46.5, 6.0], [48.0, 6.8], [49.5, 5.0], [51.0, 2.5]
    ],
    nl: [
      [53.7, 3.4], [53.4, 4.0], [52.7, 4.7], [51.8, 4.7], [51.4, 3.3], [52.5, 3.3], [53.7, 3.4]
    ],
    cz: [
      [51.0, 12.2], [50.5, 15.0], [49.5, 18.0], [48.6, 17.0], [48.6, 13.0], [50.0, 12.0], [51.0, 12.2]
    ],
    hr: [
      [46.5, 13.5], [45.5, 13.5], [44.0, 14.0], [43.5, 15.5], [44.8, 16.4], [45.5, 17.5], [46.3, 16.0], [46.5, 13.5]
    ],
    gr: [
      [41.5, 26.0], [40.5, 24.0], [39.0, 23.0], [38.0, 22.0], [37.0, 21.0], [36.5, 23.5],
      [37.5, 24.5], [38.5, 26.0], [39.5, 26.5], [41.0, 27.0], [41.5, 26.0]
    ],
    tr: [
      [42.0, 26.0], [41.0, 29.0], [40.0, 32.0], [39.0, 35.0], [37.0, 36.5], [36.0, 39.0],
      [36.0, 41.5], [37.5, 44.0], [40.0, 44.5], [41.5, 42.0], [42.3, 38.0], [42.0, 34.0], [42.0, 26.0]
    ],
    it: [
      [46.5, 6.7], [45.0, 7.0], [44.0, 9.0], [43.0, 10.5], [41.0, 12.0], [40.0, 14.5],
      [39.0, 16.0], [38.0, 15.5], [37.0, 14.0], [38.0, 12.5], [39.0, 10.0], [40.5, 8.5],
      [44.0, 8.0], [46.0, 9.0], [46.5, 6.7]
    ],
    ca: [
      [70.0, -141.0], [68.0, -133.0], [66.0, -120.0], [63.0, -110.0], [61.0, -100.0],
      [58.0, -95.0], [55.0, -90.0], [52.0, -85.0], [50.0, -80.0], [48.0, -74.0],
      [46.0, -72.0], [46.0, -66.0], [49.0, -63.0], [52.0, -60.0], [56.0, -60.0],
      [60.0, -70.0], [65.0, -80.0], [70.0, -90.0], [72.0, -110.0], [73.0, -125.0],
      [71.0, -135.0], [70.0, -141.0]
    ]
  };
  var visitedFillColor = "#7fd1ae";

  var showCard = function (city) {
    if (!hoverCard || !hoverImg || !hoverName || !hoverCaption) return;
    hoverCard.style.display = 'block';
    hoverName.textContent = city.name;
    hoverCaption.textContent = city.caption || '';
    hoverImg.src = city.image || defaultImg;
    if (!city.image) {
      hoverImg.style.background = 'linear-gradient(135deg, #c9d6ff, #8bacf7)';
    } else {
      hoverImg.style.background = 'none';
    }
  };

  var hideCard = function () {
    if (hoverCard) hoverCard.style.display = 'none';
  };

  // Paint visited countries
  visitedCountries.forEach(function (code) {
    if (countryShapes[code]) {
      countryShapes[code].forEach(function (shape) {
        L.polygon(shape, {
          color: visitedFillColor,
          fillColor: visitedFillColor,
          fillOpacity: 0.18,
          weight: 1
        }).addTo(map);
      });
    }
  });

  var markers = [];
  validCities.forEach(function (city) {
    var icon = L.divIcon({
      html: '<div class="city-pin"></div>',
      className: '',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
    var marker = L.marker([city.lat, city.lng], { icon: icon, zIndexOffset: 500 }).addTo(map);
    var pinEl = marker.getElement() ? marker.getElement().querySelector('.city-pin') : null;

    marker.on('add', function () {
      pinEl = marker.getElement() ? marker.getElement().querySelector('.city-pin') : null;
    });

    var enlarge = function () { if (pinEl) pinEl.classList.add('is-hovered'); };
    var reset = function () { if (pinEl) pinEl.classList.remove('is-hovered'); };

    marker.on('mouseover', function () { enlarge(); showCard(city); });
    marker.on('mouseout', function () { reset(); hideCard(); });
    marker.on('click', function () { enlarge(); showCard(city); });
    markers.push(marker);
  });

  // Populate the city list under the map
  if (cityList) {
    cityList.innerHTML = '';
    validCities.forEach(function (city) {
      var li = document.createElement('li');
      li.dataset.cityId = city.id;
      li.dataset.cityStatus = city.status || 'visited';
      li.innerHTML = '<span>' + city.name + '</span><span class="city-status-dot"></span>';
      li.addEventListener('mouseenter', function () {
        showCard(city);
      });
      li.addEventListener('mouseleave', hideCard);
      li.addEventListener('click', function () {
        map.flyTo([city.lat, city.lng], 6, { duration: 0.6 });
        showCard(city);
      });
      cityList.appendChild(li);
    });
  }
});
