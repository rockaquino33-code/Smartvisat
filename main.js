window.ElisaOS = {
  version: "0.1.0",
  currentView: "home",

  views: {
    home() {
      return `
        <h1>Home</h1>
        <p>Sistema Elisa OS ativo.</p>
        <div id="modules">
          <p>Status: funcionando</p>
          <p>Versão: ${window.ElisaOS.version}</p>
        </div>
      `;
    },
    apps() {
      return `
        <h1>Apps</h1>
        <p>Aplicações do sistema.</p>
        <div id="modules">
          <p>Nenhum app carregado ainda.</p>
        </div>
      `;
    },
    ia() {
      return `
        <h1>IA</h1>
        <p>Módulo de inteligência artificial.</p>
        <div id="modules">
          <p>IA em desenvolvimento.</p>
        </div>
      `;
    },
    settings() {
      return `
        <h1>Ajustes</h1>
        <p>Configurações do sistema.</p>
        <div id="modules">
          <p>Preferências futuras.</p>
        </div>
      `;
    }
  },

  render(view) {
    const container = document.getElementById("view");
    if (!container) return;
    this.currentView = view;
    container.innerHTML = this.views[view]();
  }
};