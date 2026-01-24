function openApp(app) {

  // fecha qualquer tela aberta
  document.querySelectorAll('.screen').forEach(s => {
    s.style.display = 'none';
  });

  // abre a tela certa
  const screen = document.getElementById(app);
  if (screen) {
    screen.style.display = 'block';
  } else {
    alert('App ainda não criado');
  }
}
