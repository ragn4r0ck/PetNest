// Menu mobile : ouvre / ferme la navigation, met a jour aria-expanded.
(function () {
  var btn = document.getElementById("menu-btn");
  var menu = document.getElementById("menu-mobile");
  if (!btn || !menu) return;

  btn.addEventListener("click", function () {
    var open = !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  });
})();
