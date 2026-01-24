document.addEventListener("DOMContentLoaded", () => {
  console.log("Elisa OS iniciado");
  ElisaOS.render("home");

  const buttons = document.querySelectorAll(".tab-bar button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const view = button.dataset.view;
      if (!view) return;
      ElisaOS.render(view);
    });
  });
});