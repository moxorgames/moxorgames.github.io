const supabaseUrl = 'https://xwbxkjmolvkogmubpurl.supabase.co/rest/v1/rpc/get_ranking';
const supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3Ynhram1vbHZrb2dtdWJwdXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MDc2MjYsImV4cCI6MjA2NjE4MzYyNn0.Rux5D-KIfzmBovUrgJ7ZZNCY8IOkez9zfVno77d8Qa0';

async function cargarRanking() {
  try {
    const [rankingRes, fightersRes] = await Promise.all([
      fetch(supabaseUrl, {
        headers: {
          'apikey': supabaseApiKey,
          'Content-Type': 'application/json',
        },
      }),
      fetch('fighter_data.json'),
    ]);

    const rankingData = await rankingRes.json();
    const fighters = await fightersRes.json();

    const entries = Object.entries(rankingData)
      .filter(([id]) => fighters[id])
      .sort(([, aPts], [, bPts]) => bPts - aPts);

    const tbody = document.querySelector('#ranking-table tbody');
    tbody.innerHTML = '';

    for (const [id, score] of entries) {
      const fighter = fighters[id];
      const row = document.createElement('tr');

      row.innerHTML = `
        <td><img src="${fighter.image}" alt="${fighter.name}"/>${fighter.name}</td>
        <td>${score}</td>
      `;

      tbody.appendChild(row);
    }
  } catch (error) {
    console.error('Error al cargar el ranking:', error);
  }
}

cargarRanking();
