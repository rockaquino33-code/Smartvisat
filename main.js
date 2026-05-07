<script>
// PEGA TODOS OS BOTÕES/ICONES E MUDA O CLICK
function openApp(name, url){
  const player = document.getElementById('player'); // tua div principal
  const title = document.getElementById('appTitle');
  
  title.textContent = name;
  
  // YOUTUBE - TEM QUE SER /embed/
  if(url.includes('youtube.com') || name === 'YouTube'){
    let videoId = 'dQw4w9WgXcQ'; // padrão
    if(url.includes('v=')) videoId = url.split('v=')[1].split('&')[0];
    player.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
      style="width:100%;height:100%;border:0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>`;
  
  // NETFLIX, PRIME, MAX, DISNEY+
  } else if (url.includes('netflix') || url.includes('primevideo') || url.includes('max.com') || url.includes('disneyplus')) {
    // Esses SITES BLOQUEIAM iframe 100%. Não tem jeito.
    // SOLUÇÃO: Avisa o usuário e abre por cima mesmo
    player.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:#000;color:#fff;text-align:center;padding:20px">
        <div style="font-size:60px;margin-bottom:20px">🔒</div>
        <h2>${name}</h2>
        <p style="opacity:0.7;margin:20px 0">Netflix e outros não permitem abrir aqui dentro por segurança.</p>
        <button onclick="window.open('${url}', '_blank')" style="padding:15px 30px;background:#e50914;border:0;border-radius:8px;color:#fff;font-size:17px;cursor:pointer">
          Abrir ${name}
        </button>
      </div>`;

  // XBOX CLOUD - TAMBÉM BLOQUEIA IFRAME
  } else if (url.includes('xbox.com/play')) {
     player.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;background:#107c10;color:#fff;text-align:center;padding:20px">
        <div style="font-size:60px;margin-bottom:20px">🎮</div>
        <h2>Xbox Cloud Gaming</h2>
        <p style="opacity:0.9;margin:20px 0">A Microsoft só roda em tela cheia por segurança.</p>
        <button onclick="window.open('${url}', '_blank')" style="padding:15px 30px;background:#000;border:0;border-radius:8px;color:#fff;font-size:17px;cursor:pointer">
          Jogar Agora
        </button>
      </div>`;

  // SITES NORMAIS - ABRE NO IFRAME
  } else {
    player.innerHTML = `<iframe src="${url}" style="width:100%;height:100%;border:0" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>`;
  }
}

// COMO USAR NOS TEUS BOTÕES:
// <div onclick="openApp('YouTube', 'https://www.youtube.com')">
// <div onclick="openApp('Netflix', 'https://www.netflix.com')">
// <div onclick="openApp('Xbox', 'https://www.xbox.com/play')">
</script>
