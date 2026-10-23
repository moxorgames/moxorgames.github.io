const translations = {
  en: {
    pageTitle: "Moxor Games — Home visual direction",
    skip: "Skip to content",
    homeLabel: "Moxor Games home",
    navLabel: "Primary navigation",
    mobileNavLabel: "Mobile navigation",
    footerNavLabel: "Footer navigation",
    languageLabel: "Language",
    socialLabel: "Social media",
    navGames: "Games",
    navAbout: "About",
    navPress: "Press",
    navSupport: "Support",
    menuOpen: "Menu",
    menuClose: "Close",
    featured: "Featured game",
    heroAssetNote: "Pending: local gameplay loop",
    flyTagline: "Master the cosmic currents.",
    flyCopy: "Ride shifting currents and find your flow in a compact cosmic arcade game.",
    flyDownloadLabel: "Download Fly-A-Wave",
    getItOn: "Get it on",
    downloadOn: "Download on the",
    gameDetails: "Game details",
    exploreGames: "Explore games",
    existingArt: "Existing art",
    superAlt: "A lineup of Super Brainrot Z fighters",
    superCopy: "Choose a fighter. Every win moves them up the community ranking.",
    superDownloadLabel: "Super Brainrot Z downloads",
    ranking: "Community ranking",
    comingSoon: "Coming soon",
    deadCopy: "Run, dodge the horde and collect the loot.",
    deadStatus: "Approaching soft launch. No public download link yet.",
    deadAlt: "A survivor running from a zombie horde in Dead Run",
    gameplayPending: "Pending: gameplay captures",
    logicAlt: "Two investigators studying a safe in Logic Solving",
    logicCopy: "Crack the code and open the safe.",
    archived: "Archived",
    viewArchive: "View archive",
    avatarLabel: "Creator illustration placeholder",
    avatarPending: "Pending: creator illustration, 1600 × 1600",
    aboutTitle: "A solo indie studio",
    aboutLead: "Moxor Games is the solo indie studio of Maximiliano Cambiaso, based in Tigre, Buenos Aires, Argentina.",
    aboutBody: "I make approachable games with a clear hook, expressive worlds and enough personality to stay with you after a short session.",
    copyDraft: "Draft copy — pending approval",
    pressTitle: "Press & media",
    pressCopy: "Verified game facts, logos, screenshots, videos and studio information in one place.",
    pressPending: "Press kit page — next wireframe",
    contactTitle: "Contact",
    privacy: "Privacy",
    prototypeLabel: "Visual direction v1 · review build"
  },
  es: {
    pageTitle: "Moxor Games — Dirección visual de la home",
    skip: "Saltar al contenido",
    homeLabel: "Inicio de Moxor Games",
    navLabel: "Navegación principal",
    mobileNavLabel: "Navegación móvil",
    footerNavLabel: "Navegación del pie",
    languageLabel: "Idioma",
    socialLabel: "Redes sociales",
    navGames: "Juegos",
    navAbout: "Acerca de",
    navPress: "Prensa",
    navSupport: "Soporte",
    menuOpen: "Menú",
    menuClose: "Cerrar",
    featured: "Juego destacado",
    heroAssetNote: "Pendiente: loop local de gameplay",
    flyTagline: "Domina las corrientes cósmicas.",
    flyCopy: "Recorre corrientes cambiantes y encuentra tu ritmo en un arcade cósmico compacto.",
    flyDownloadLabel: "Descargar Fly-A-Wave",
    getItOn: "Disponible en",
    downloadOn: "Descargar en",
    gameDetails: "Detalles del juego",
    exploreGames: "Explorar juegos",
    existingArt: "Arte existente",
    superAlt: "Una formación de luchadores de Super Brainrot Z",
    superCopy: "Elige un luchador. Cada victoria lo hace subir en el ranking de la comunidad.",
    superDownloadLabel: "Descargas de Super Brainrot Z",
    ranking: "Ranking de la comunidad",
    comingSoon: "Próximamente",
    deadCopy: "Corre, esquiva la horda y recoge el botín.",
    deadStatus: "Cerca del soft launch. Todavía no hay un enlace público de descarga.",
    deadAlt: "Un sobreviviente escapa de una horda de zombis en Dead Run",
    gameplayPending: "Pendiente: capturas de gameplay",
    logicAlt: "Dos investigadores estudian una caja fuerte en Logic Solving",
    logicCopy: "Descubre el código y abre la caja fuerte.",
    archived: "Archivado",
    viewArchive: "Ver archivo",
    avatarLabel: "Placeholder de la ilustración del creador",
    avatarPending: "Pendiente: ilustración del creador, 1600 × 1600",
    aboutTitle: "Un estudio indie personal",
    aboutLead: "Moxor Games es el estudio indie de Maximiliano Cambiaso, con base en Tigre, Buenos Aires, Argentina.",
    aboutBody: "Creo juegos accesibles con una idea clara, mundos expresivos y suficiente personalidad para acompañarte después de una partida corta.",
    copyDraft: "Copy preliminar — pendiente de aprobación",
    pressTitle: "Prensa y medios",
    pressCopy: "Datos verificados, logos, capturas, videos e información del estudio en un solo lugar.",
    pressPending: "Página de prensa — próximo wireframe",
    contactTitle: "Contacto",
    privacy: "Privacidad",
    prototypeLabel: "Dirección visual v1 · versión para revisión"
  }
};

const languageButtons = [...document.querySelectorAll("[data-language]")];
const menuButton = document.querySelector("[data-menu-button]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const siteHeader = document.querySelector("[data-site-header]");
const hero = document.querySelector(".hero");
let activeLanguage = "en";
let lastFocusedElement = null;

function browserLanguage() {
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

function setLanguage(language, persist = true) {
  activeLanguage = translations[language] ? language : "en";
  const dictionary = translations[activeLanguage];

  document.documentElement.lang = activeLanguage;
  document.title = dictionary.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (dictionary[key]) element.setAttribute("alt", dictionary[key]);
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === activeLanguage));
  });

  if (menuButton) {
    const key = menuButton.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen";
    menuButton.querySelector("span").textContent = dictionary[key];
  }

  if (persist) localStorage.setItem("moxor-wireframe-language", activeLanguage);
}

function setMenu(open) {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute("aria-expanded", String(open));
  mobileNav.hidden = !open;
  document.body.classList.toggle("menu-open", open);
  menuButton.querySelector("span").textContent = translations[activeLanguage][open ? "menuClose" : "menuOpen"];

  if (open) {
    lastFocusedElement = document.activeElement;
    mobileNav.querySelector("a")?.focus();
  } else if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    setMenu(false);
  }

  if (event.key !== "Tab" || menuButton?.getAttribute("aria-expanded") !== "true") return;
  const focusable = [...mobileNav.querySelectorAll("a"), menuButton];
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024 && menuButton?.getAttribute("aria-expanded") === "true") {
    setMenu(false);
  }
});

if ("IntersectionObserver" in window && hero && siteHeader) {
  const heroObserver = new IntersectionObserver(
    ([entry]) => siteHeader.classList.toggle("is-solid", !entry.isIntersecting),
    { rootMargin: `-${siteHeader.offsetHeight}px 0px 0px 0px`, threshold: 0.05 }
  );
  heroObserver.observe(hero);
}

document.querySelector("[data-current-year]").textContent = new Date().getFullYear();

const storedLanguage = localStorage.getItem("moxor-wireframe-language");
setLanguage(storedLanguage || browserLanguage(), false);
