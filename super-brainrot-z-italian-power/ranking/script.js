const supabaseUrl = 'https://xwbxkjmolvkogmubpurl.supabase.co/rest/v1/rpc/get_ranking';
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Ynhram1vbHZrb2dtdWJwdXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MDc2MjYsImV4cCI6MjA2NjE4MzYyNn0.Rux5D-KIfzmBovUrgJ7ZZNCY8IOkez9zfVno77d8Qa0';

async function loadRanking() {
  try {
    const [rankingRes, fighterRes] = await Promise.all([
      fetch(supabaseUrl, {
        headers: {
          apikey: supabaseApiKey,
          'Content-Type': 'application/json',
        },
      }),
      fetch('fighter_data.json'),
    ]);

    const rankingData = await rankingRes.json();
    const fighterData = await fighterRes.json();

    const container = document.getElementById("ranking-container");
    container.innerHTML = "";

    const sortedEntries = Object.entries(rankingData)
      .filter(([id]) => fighterData[id])
      .sort((a, b) => b[1] - a[1]);

    sortedEntries.forEach(([id, score], index) => {
      const fighter = fighterData[id];

      const row = document.createElement("div");
      row.className = "ranking-row";

      row.innerHTML = `
        <div class="position">#${index + 1}</div>
        <img class="thumbnail" src="${fighter.image}" alt="${fighter.name}" />
        <div class="name">
          <strong>${fighter.name}</strong><br>
          <span class="points">${score} Point${score !== 1 ? "s" : ""}</span>
        </div>
      `;

      container.appendChild(row);
    });
  } catch (err) {
    console.error("Error loading ranking:", err);
    document.getElementById("ranking-container").innerText =
      "Failed to load ranking.";
  }
}

loadRanking();