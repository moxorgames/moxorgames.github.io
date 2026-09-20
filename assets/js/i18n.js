/* ============================================================
   Moxor Games — i18n.js
   Tiny bilingual engine. Pages opt in with `data-i18n` keys and
   provide a dictionary on `window.MOXOR_I18N = { en: {...}, es: {...} }`.
   The engine picks a language (localStorage > browser), translates all
   nodes, keeps <html lang> in sync and drives the toggle button.
   ============================================================ */
(function (w, d) {
  "use strict";

  var STORAGE_KEY = "moxor-lang";
  var ATTR = "data-i18n";

  function currentBrowserLang() {
    var nav = (navigator.language || navigator.languages && navigator.languages[0] || "en").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  function storedLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  var lang = storedLang() || currentBrowserLang();
  if (lang !== "es" && lang !== "en") lang = currentBrowserLang();

  var dict = (w.MOXOR_I18N && typeof w.MOXOR_I18N === "object") ? w.MOXOR_I18N : {};
  var dictionary = dict[lang] || {};

  function apply() {
    var nodes = d.querySelectorAll("[" + ATTR + "]");
    var i, el, key;
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      key = el.getAttribute(ATTR);
      if (dictionary.hasOwnProperty(key)) el.textContent = dictionary[key];
    }

    var attrNodes = d.querySelectorAll("[data-i18n-attr]");
    for (i = 0; i < attrNodes.length; i++) {
      el = attrNodes[i];
      var spec = el.getAttribute("data-i18n-attr");
      var sep = spec ? spec.indexOf(":") : -1;
      if (sep < 1) continue;
      var attr = spec.slice(0, sep);
      var aKey = spec.slice(sep + 1);
      if (dictionary.hasOwnProperty(aKey)) el.setAttribute(attr, dictionary[aKey]);
    }

    d.documentElement.lang = lang;
    var toggle = d.getElementById("lang-toggle");
    if (toggle) {
      var other = lang === "es" ? "en" : "es";
      toggle.textContent = other.toUpperCase();
      toggle.setAttribute("title", other === "es" ? "Español" : "English");
    }
  }

  d.addEventListener("DOMContentLoaded", applyhedera);
})(window, document);
