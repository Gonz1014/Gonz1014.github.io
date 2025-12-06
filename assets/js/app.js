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
  { id: "miami-us",                name: "Miami, USA",                   status: "lived",   lat: 25.7617, lng: -80.1918, image: "assets/images/cities/miami-us.jpg",                caption: "" },
  { id: "new-york-us",             name: "New York, USA",                status: "lived",   lat: 40.7128, lng: -74.0060, image: "assets/images/cities/new-york-us.jpg",             caption: "" },
  { id: "boston-us",               name: "Boston, USA",                  status: "visited", lat: 42.3601, lng: -71.0589, image: "assets/images/cities/boston-us.jpg",               caption: "" },
  { id: "philadelphia-us",         name: "Philadelphia, USA",            status: "visited", lat: 39.9526, lng: -75.1652, image: "assets/images/cities/philadelphia-us.jpg",         caption: "" },
  { id: "new-haven-us",            name: "New Haven, USA",               status: "visited", lat: 41.3083, lng: -72.9279, image: "assets/images/cities/new-haven-us.jpg",            caption: "" },
  { id: "gainesville-us",          name: "Gainesville, USA",             status: "visited", lat: 29.6516, lng: -82.3248, image: "assets/images/cities/gainesville-us.jpg",          caption: "" },
  { id: "sarasota-us",             name: "Sarasota, USA",                status: "visited", lat: 27.3364, lng: -82.5307, image: "assets/images/cities/sarasota-us.jpg",             caption: "" },
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
  { id: "mexico-city-mx",          name: "Ciudad de México, Mexico",     status: "lived",   lat: 19.4326, lng: -99.1332, image: "assets/images/cities/mexico-city-mx.jpg",          caption: "" },
  { id: "merida-mx",               name: "Mérida, Mexico",               status: "visited", lat: 20.9674, lng: -89.5926, image: "assets/images/cities/merida-mx.jpg",               caption: "" },
  { id: "monterrey-mx",            name: "Monterrey, Mexico",            status: "visited", lat: 25.6866, lng: -100.3161, image: "assets/images/cities/monterrey-mx.jpg",           caption: "" },
  { id: "puerto-vallarta-mx",      name: "Puerto Vallarta, Mexico",      status: "visited", lat: 20.6534, lng: -105.2253, image: "assets/images/cities/puerto-vallarta-mx.jpg",      caption: "" },
  { id: "valle-de-bravo-mx",       name: "Valle de Bravo, Mexico",       status: "visited", lat: 19.1950, lng: -100.1310, image: "assets/images/cities/valle-de-bravo-mx.jpg",       caption: "" },
  { id: "aguascalientes-mx",       name: "Aguascalientes, Mexico",       status: "visited", lat: 21.8853, lng: -102.2916, image: "assets/images/cities/aguascalientes-mx.jpg",      caption: "" },
  { id: "ixtapa-mx",               name: "Ixtapa, Mexico",               status: "visited", lat: 17.6649, lng: -101.6097, image: "assets/images/cities/ixtapa-mx.jpg",              caption: "" },
  { id: "acapulco-mx",             name: "Acapulco, Mexico",             status: "visited", lat: 16.8531, lng: -99.8237, image: "assets/images/cities/acapulco-mx.jpg",             caption: "" },

  // Australia
  { id: "sydney-au",               name: "Sydney, Australia",            status: "lived",   lat: -33.8688, lng: 151.2093, image: "assets/images/cities/sydney-au.jpg",               caption: "" },
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
  { id: "como-it",                 name: "Como, Italy",                  status: "visited", lat: 45.8081, lng: 9.0852,  image: "assets/images/cities/como-it.jpg",                caption: "" },
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

  // Add Carto Dark Matter tiles for dark basemap
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    subdomains: 'abcd',
    maxZoom: 19,
    minZoom: 1,
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
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
  // Map any missing image files to a known fallback to avoid 404 spam in preload
  var availableCityImages = new Set([
    'barcelona-es.jpg',
    'civitavecchia-it.jpg',
    'marseille-fr.jpg',
    'naples-it.jpg',
    'palermo-it.jpg',
    'pisa-it.jpg',
    'tashkurgan-cn.jpg',
    'toronto-ca.jpg',
    'varese-it.jpg',
    'ixtapa-mx.jpg'
  ]);
  var fallbackCityImage = 'assets/images/cities/barcelona-es.jpg';
  validCities.forEach(function (c) {
    if (!c.image) {
      c.image = fallbackCityImage;
      return;
    }
    var name = c.image.split('/').pop();
    if (!availableCityImages.has(name)) {
      c.image = fallbackCityImage;
    }
  });
  // Preload images and track success/failure
  var imageCache = new Map(); // key: original path, value: {status:'ok'|'error', url:string}
  var resolveUrl = function (path) {
    try {
      return new URL(path, document.baseURI || window.location.href).href;
    } catch (e) {
      console.warn('Bad image path', path, e);
      return null;
    }
  };
  Array.from(new Set(validCities.map(function (c) { return c.image; }).filter(Boolean))).forEach(function (path) {
    var resolved = resolveUrl(path);
    if (!resolved) {
      imageCache.set(path, { status: 'error', url: '' });
      return;
    }
    var img = new Image();
    img.onload = function () { imageCache.set(path, { status: 'ok', url: resolved }); };
    img.onerror = function (e) {
      console.warn('Image preload failed:', resolved, e);
      imageCache.set(path, { status: 'error', url: '' });
    };
    img.src = resolved;
  });

  // Determine visited countries from IDs (expects "-xx" country code at end)
  var countryFromId = function (id) {
    var m = id && id.match(/-([a-z]{2})$/);
    return m ? m[1] : null;
  };
  // Normalize ISO-2 edge cases to match GeoJSON (e.g., 'uk' => 'gb')
  function normalizeIso(iso) {
    if (!iso) return null;
    iso = (iso + '').toLowerCase().trim();
    if (iso === 'uk') return 'gb';
    if (iso === 'el') return 'gr'; // sometimes Greece appears as EL in certain datasets
    return iso;
  }
  var visitedCountries = new Set();
  validCities.forEach(function (c) {
    var code = normalizeIso(countryFromId(c.id));
    if (code) visitedCountries.add(code);
    // Default to visited when no explicit status was set in the data
    if (c.status !== "visited" && c.status !== "lived") c.status = "visited";
  });
  // Optional: manually mark additional visited countries by ISO-2, lowercase
  var visitedCountriesManual = new Set([
    // e.g., 'es','fr','it'
  ]);
  
  // Fallback map from ISO-3 to ISO-2 for common datasets (Natural Earth)
  var A3_TO_A2 = {
    USA:'us', MEX:'mx', CAN:'ca',
    ESP:'es', FRA:'fr', ITA:'it', DEU:'de', NLD:'nl', BEL:'be', LUX:'lu',
    PRT:'pt', IRL:'ie', GBR:'gb', ISL:'is', NOR:'no', SWE:'se', FIN:'fi', DNK:'dk',
    CHE:'ch', AUT:'at', POL:'pl', CZE:'cz', SVK:'sk', HUN:'hu', SVN:'si', HRV:'hr',
    BIH:'ba', SRB:'rs', MNE:'me', MKD:'mk', ALB:'al', BGR:'bg', ROU:'ro',
    GRC:'gr', TUR:'tr', AND:'ad', MCO:'mc', SMR:'sm', VAT:'va', MLT:'mt',
    NLD:'nl', LIE:'li',
    ESP:'es',
    RUS:'ru', UKR:'ua', BLR:'by', LTU:'lt', LVA:'lv', EST:'ee',
    MAR:'ma', DZA:'dz', TUN:'tn',
    EGY:'eg',
    ZAF:'za',
    AUS:'au', NZL:'nz',
    CHN:'cn', JPN:'jp', KOR:'kr', PRK:'kp',
    SGP:'sg', MYS:'my', IDN:'id', THA:'th', VNM:'vn', KHM:'kh', LAO:'la', PHL:'ph',
    IND:'in', PAK:'pk', BGD:'bd', LKA:'lk', NPL:'np',
    XKX:'xk' // Kosovo in some datasets
  };
  
  // Optional name-to-ISO2 fallback for edge GeoJSONs
  var NAME_TO_A2 = {
    'united states':'us',
    'united states of america':'us',
    'mexico':'mx',
    'canada':'ca',
    'spain':'es',
    'france':'fr',
    'italy':'it',
    'germany':'de',
    'netherlands':'nl',
    'belgium':'be',
    'luxembourg':'lu',
    'portugal':'pt',
    'ireland':'ie',
    'united kingdom':'gb',
    'england':'gb',
    'scotland':'gb',
    'wales':'gb',
    'isle of man':'im',
    'iceland':'is',
    'norway':'no',
    'sweden':'se',
    'finland':'fi',
    'denmark':'dk',
    'switzerland':'ch',
    'austria':'at',
    'poland':'pl',
    'czechia':'cz',
    'czech republic':'cz',
    'slovakia':'sk',
    'hungary':'hu',
    'slovenia':'si',
    'croatia':'hr',
    'bosnia and herzegovina':'ba',
    'serbia':'rs',
    'montenegro':'me',
    'north macedonia':'mk',
    'albania':'al',
    'bulgaria':'bg',
    'romania':'ro',
    'greece':'gr',
    'turkey':'tr',
    'andorra':'ad',
    'monaco':'mc',
    'san marino':'sm',
    'vatican':'va',
    'malta':'mt',
    'russia':'ru',
    'ukraine':'ua',
    'belarus':'by',
    'lithuania':'lt',
    'latvia':'lv',
    'estonia':'ee',
    'morocco':'ma',
    'algeria':'dz',
    'tunisia':'tn',
    'egypt':'eg',
    'south africa':'za',
    'australia':'au',
    'new zealand':'nz',
    'china':'cn',
    'japan':'jp',
    'singapore':'sg',
    'malaysia':'my',
    'indonesia':'id',
    'thailand':'th',
    'vietnam':'vn',
    'cambodia':'kh',
    'laos':'la',
    'philippines':'ph',
    'india':'in',
    'pakistan':'pk',
    'bangladesh':'bd',
    'sri lanka':'lk',
    'nepal':'np',
    'kosovo':'xk'
  };
  
  // Extract ISO-2 from a GeoJSON feature's properties (robust across schemas)
  function isoFromFeature(props) {
    if (!props) return null;
    // Try direct ISO-2 fields
    var iso2 = props.ISO_A2 || props.iso_a2 || props.ISO2 || props.WB_A2 || props.wb_a2
             || props['ISO3166-1-Alpha-2'] || props['iso3166-1-alpha-2'] || '';
    if (iso2 && iso2 !== '-99') return normalizeIso(iso2);
    // Try ISO-3 then map
    var iso3 = props.ISO_A3 || props.ADM0_A3 || props.iso_a3 || props.adm0_a3 || props.WB_A3 || props.wb_a3
             || props['ISO3166-1-Alpha-3'] || props['iso3166-1-alpha-3'] || '';
    if (iso3 && iso3 !== '-99') {
      var m = A3_TO_A2[String(iso3).toUpperCase()];
      if (m) return normalizeIso(m);
    }
    // Try by name as last resort
    var name = (props.NAME_EN || props.ADMIN || props.name || '').toLowerCase();
    if (name && NAME_TO_A2[name]) return normalizeIso(NAME_TO_A2[name]);
    return null;
  }
  // --- Country fills layer (GeoJSON) — CHOROPLETH (FOOLPROOF) ---
  // Ensure a pane above tiles but below markers/controls (idempotent)
  if (!map.getPane('countries-fill')) {
    const p = map.createPane('countries-fill');
    p.style.zIndex = 350;            // tiles ~200, markers ~600
    p.style.pointerEvents = 'auto';
  }

  // Mark any countries you've LIVED in here (ISO-2 codes, lowercase)
  var livedCountries = new Set([
    // e.g., 'us', 'au'
  ]);

  // Determine status for an ISO-2 code (normalized) using lived + visited + manual
  // NOTE: returns null for "not yet" so we can FILTER them out entirely.
  function statusForIso(iso) {
    iso = normalizeIso(iso);
    if (!iso) return null;
    if (livedCountries.has(iso)) return 'lived';
    if (visitedCountries.has(iso) || visitedCountriesManual.has(iso)) return 'visited';
    return null; // &lt;— hide not-yet countries
  }

  // Palette: visited = aqua, lived = dark blue
  var FILL   = { lived: '#355572', visited: '#a3cfd0' };
  var STROKE = { lived: '#273f55', visited: '#7a9b9c' };

  function countryStyle(feature) {
    var iso = isoFromFeature(feature.properties);
    var status = statusForIso(iso); // 'lived' | 'visited'
    // By construction (filter below) status is never null here.
    return {
      pane: 'countries-fill',
      fillColor: FILL[status],
      fillOpacity: 0.55,
      color: STROKE[status],
      weight: 0.5,
      opacity: 1
    };
  }

  function onEachCountry(feature, layer) {
    var name = feature.properties.NAME_EN || feature.properties.ADMIN || feature.properties.name || '';
    layer.bindTooltip(name, { sticky: true });
    layer.on({
      mouseover: function (e) {
        e.target.setStyle({
          weight: 1.5,
          fillOpacity: Math.min((e.target.options.fillOpacity || 0.4) + 0.1, 0.75)
        });
      },
      mouseout: function (e) {
        if (window.__countriesLayer) window.__countriesLayer.resetStyle(e.target);
      },
      click: function (e) {
        map.fitBounds(e.target.getBounds(), { padding: [20, 20] });
      }
    });
  }

  // Resolve data URL safely (works from root or subfolders)
  function resolveDataUrl(path) {
    try { return new URL(path, document.baseURI).href; }
    catch (e) { console.warn('Bad data path', path, e); return path; }
  }

  // Try relative and root-absolute paths (helps on GitHub Pages subpaths)
  function fetchCountriesJson() {
    var rel = 'assets/data/world-countries-simplified.geojson';
    var try1 = resolveDataUrl(rel);
    var try2 = rel.startsWith('/') ? rel : '/' + rel;
    return fetch(try1).then(function (r) {
      if (r.ok) return r.json();
      return fetch(try2).then(function (r2) {
        if (!r2.ok) throw new Error('Failed to load GeoJSON from ' + try1 + ' and ' + try2);
        return r2.json();
      });
    });
  }

  var countriesLayer = null;

  fetchCountriesJson()
    .then(function (geo) {
      // Draw ONLY visited/lived via filter (null = hide “not-yet”)
      countriesLayer = L.geoJSON(geo, {
        pane: 'countries-fill',
        filter: function (f) {
          var iso = isoFromFeature(f.properties);
          return !!statusForIso(iso); // true only for visited/lived
        },
        style: countryStyle,
        onEachFeature: onEachCountry
      }).addTo(map);

      if (countriesLayer.bringToBack) countriesLayer.bringToBack();

      // Debug handles
      try {
        var featureCount = (geo && geo.features) ? geo.features.length : 0;
        console.log('[Countries] Loaded:', featureCount, 'features');
        window.__countriesGeo      = geo;
        window.__countriesLayer    = countriesLayer;
        window.__visitedCountries  = visitedCountries;
        window.__livedCountries    = livedCountries;

        // Restyle after changing sets (visited/lived) in console
        window.refreshCountries = function () {
          if (window.__countriesLayer) {
            window.__countriesLayer.setStyle(countryStyle);
            if (window.__countriesLayer.bringToBack) window.__countriesLayer.bringToBack();
            console.log('[Countries] Restyled.');
          }
        };

        // Force a country by ISO2, e.g. colorTest('es') or colorTest('us','lived')
        window.colorTest = function (iso2, kind) {
          iso2 = String(iso2 || '').toLowerCase();
          kind = kind || 'visited';
          if (kind === 'lived') { livedCountries.add(iso2); visitedCountries.delete(iso2); }
          else { visitedCountries.add(iso2); }
          window.refreshCountries();
          console.log('[Countries] Forced', iso2, 'as', kind);
        };
      } catch (e) {
        console.warn('[Countries] Debug helpers failed', e);
      }
    })
    .catch(function (err) {
      console.warn('Countries GeoJSON failed to load via both paths.', err);
    });
  // Fallback: if no valid cities, bail early
  if (!validCities.length) return;


  var showCard = function (city) {
    if (!hoverCard || !hoverImg || !hoverName || !hoverCaption) return;
    hoverCard.style.display = 'block';
    hoverName.textContent = city.name;
    hoverCaption.textContent = city.caption || '';

    var targetSrc = city.image || '';
    var applyImage = function (src, useGradientBg) {
      hoverImg.src = src;
      hoverImg.style.background = useGradientBg ? 'linear-gradient(135deg, #c9d6ff, #8bacf7)' : 'none';
    };

    // Reset handlers for each show
    hoverImg.onload = function () {
      hoverImg.style.background = 'none';
    };
    hoverImg.onerror = function (e) {
      console.warn('City image failed to load:', targetSrc, e);
      applyImage(defaultImg, true);
    };

    if (targetSrc) {
      var cached = imageCache.get(targetSrc);
      if (cached && cached.status === 'ok') {
        applyImage(cached.url, false);
      } else {
        var resolved = resolveUrl(targetSrc);
        if (resolved) {
          applyImage(resolved, false);
        } else {
          applyImage(defaultImg, true);
        }
      }
    } else {
      applyImage(defaultImg, true);
    }
  };

  var hideCard = function () {
    if (hoverCard) hoverCard.style.display = 'none';
  };


  var markers = [];
  var activeFilters = new Set(['lived', 'visited']);
  var renderedCities = [];
  validCities.forEach(function (city) {
    var _iso = normalizeIso(countryFromId(city.id));
    var computedCountryStatus = statusForIso(_iso);
    var pinStatus = (city.status === 'lived' || computedCountryStatus === 'lived') ? 'lived'
                   : ((city.status === 'visited' || computedCountryStatus === 'visited') ? 'visited' : null);
    if (!pinStatus) return;
    city.pinStatus = pinStatus;
    // Custom circular pin (uses CSS to be visible)
    var icon = L.divIcon({
      html: '<div class="city-pin city-pin--' + pinStatus + '"></div>',
      className: 'leaflet-div-icon city-pin-wrapper',
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    });
    var marker = L.marker([city.lat, city.lng], { icon: icon, zIndexOffset: 500, title: city.name }).addTo(map);

    var pinEl = marker.getElement() ? marker.getElement().querySelector('.city-pin') : null;

    marker.on('add', function () {
      pinEl = marker.getElement() ? marker.getElement().querySelector('.city-pin') : null;
    });

    var enlarge = function () { if (pinEl) pinEl.classList.add('is-hovered'); };
    var reset = function () { if (pinEl) pinEl.classList.remove('is-hovered'); };

    marker.on('mouseover', function () { enlarge(); showCard(city); });
    marker.on('mouseout', function () { reset(); hideCard(); });
    marker.on('click', function () { enlarge(); showCard(city); });
    markers.push({ marker: marker, city: city });
    renderedCities.push(city);
  });

  // Populate the city list under the map
  if (cityList) {
    cityList.innerHTML = '';
    renderedCities.forEach(function (city) {
      var li = document.createElement('li');
      li.dataset.cityId = city.id;
      li.dataset.cityStatus = city.pinStatus || 'visited';
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

  // Filter pins and list items based on checkboxes
  var applyFilters = function () {
    markers.forEach(function (entry) {
      var show = activeFilters.has(entry.city.pinStatus);
      if (show) {
        if (!map.hasLayer(entry.marker)) entry.marker.addTo(map);
      } else if (map.hasLayer(entry.marker)) {
        map.removeLayer(entry.marker);
      }
    });
    if (cityList) {
      Array.prototype.forEach.call(cityList.children, function (li) {
        var status = li.dataset.cityStatus;
        li.style.display = activeFilters.has(status) ? '' : 'none';
      });
    }
  };

  var filterBoxes = document.querySelectorAll('[data-city-filter]');
  if (filterBoxes.length) {
    filterBoxes.forEach(function (box) {
      box.addEventListener('change', function () {
        activeFilters.clear();
        filterBoxes.forEach(function (b) {
        