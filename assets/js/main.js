/* ============================================================
   Moxor Games — main.js
   Tiny shared behaviors: mobile menu toggle, footer year,
   smooth-scroll anchor links. No framework required.
   ============================================================ */
(function (w, d) {
  "use strict";

  /* ---------- Mobile menu ---------- */
  var toggle = d.getElementById("menu-toggle");
  var menu = d.getElementById("mobile-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.getAttribute("hidden") === null;
      if (open) {
        menu.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        menu.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* Close mobile menu when a link inside it is clicked */
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A") {
        menu.setAttribute("hidden", "");
        toggle && toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Footer year ---------- */
  var year = d.getElementById("footer-year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Smooth scroll for same-page anchors ---------- */
  var a, href, target, i;
  var links = d.getElementsByTagName("a");
  for (i = 0; i < links.length; i++) {
    a = links[i];
    href = a.getAttribute("href");
    if (href && href.indexOf("#") === 0 && href.length > 1) {
      (function (lnk, id) {
        lnk.addEventListener("click", function (e) {
          target = d.getElementById(id);
          if (!target) return;
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      })(a, href.slice(1));
    }
  }
})(window, document);
