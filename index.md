---
layout: default
title: Moxor Games
---

<header>
  <img src="/assets/img/logo.png" alt="Moxor Games Logo" />
  <h1 id="title">Moxor Games</h1>
  <p id="subtitle">Juegos hechos con amor desde Argentina</p>
  <a href="https://linktr.ee/moxorgames" class="btn" id="follow-btn">Síguenos</a>
</header>

<section>
  <h2 id="games-heading">Juegos</h2>

  <div class="game">
    <img src="/assets/img/super-brairot-z.png" alt="Super Brairot Z Italian Power" />
    <div class="game-content">
      <h2 id="game1-title">Super Brairot Z Italian Power</h2>
      <p id="game1-desc">Disponible en Google Play y próximamente en App Store.</p>
      <a href="/super-brairot-z.html" class="btn" id="playstore-btn">Google Play</a>
      <a href="/super-brairot-z.html" class="btn" id="appstore-btn">App Store (Próximamente)</a>
    </div>
  </div>

  <div class="game">
    <img src="/assets/img/logic-solving.png" alt="Logic Solving" />
    <div class="game-content">
      <h2 id="game2-title">Logic Solving</h2>
      <p id="game2-desc">Un desafiante juego de lógica en desarrollo. ¡Muy pronto disponible!</p>
      <a href="/logic-solving.html" class="btn" id="comingsoon-btn">Muy Pronto</a>
    </div>
  </div>
</section>

<footer>
  <p>&copy; 2025 Moxor Games</p>
  <a href="https://linktr.ee/moxorgames" id="footer-link">Linktree</a>
</footer>

<script>
  const translations = {
    en: {
      title: "Moxor Games",
      subtitle: "Games made with love from Argentina.",
      follow: "Follow us",
      games: "Games",
      game1_title: "Super Brairot Z Italian Power",
      game1_desc: "Pick your favorite and take it to the top. Available on Google Play and coming soon to the App Store.",
      game2_title: "Logic Solving",
      game2_desc: "A challenging logic game in development. Coming soon!",
      playstore: "Google Play",
      appstore: "App Store (Coming Soon)",
      comingsoon: "Coming Soon",
      linktree: "Linktree"
    },
    es: {
      title: "Moxor Games",
      subtitle: "Juegos hechos con amor desde Argentina",
      follow: "Seguinos",
      games: "Juegos",
      game1_title: "Super Brairot Z Italian Power",
      game1_desc: "Elegí tu Brainrot favorito y llevalo a la gloria. Disponible en Google Play y próximamente en App Store.",
      game2_title: "Logic Solving",
      game2_desc: "Un desafiante juego de lógica en desarrollo. ¡Muy pronto disponible!",
      playstore: "Google Play",
      appstore: "App Store (Próximamente)",
      comingsoon: "Muy Pronto",
      linktree: "Linktree"
    }
  };

  function setLanguage() {
    const lang = navigator.language.startsWith("es") ? "es" : "en";
    const t = translations[lang];
    document.getElementById("title").textContent = t.title;
    document.getElementById("subtitle").textContent = t.subtitle;
    document.getElementById("follow-btn").textContent = t.follow;
    document.getElementById("games-heading").textContent = t.games;
    document.getElementById("game1-title").textContent = t.game1_title;
    document.getElementById("game1-desc").textContent = t.game1_desc;
    document.getElementById("game2-title").textContent = t.game2_title;
    document.getElementById("game2-desc").textContent = t.game2_desc;
    document.getElementById("playstore-btn").textContent = t.playstore;
    document.getElementById("appstore-btn").textContent = t.appstore;
    document.getElementById("comingsoon-btn").textContent = t.comingsoon;
    document.getElementById("footer-link").textContent = t.linktree;
  }
  window.onload = setLanguage;
</script>
