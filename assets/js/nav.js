// Menu mobile : ouvre ou ferme la navigation et synchronise son état accessible.
(function () {
  var button = document.getElementById("menu-btn");
  var menu = document.getElementById("menu-mobile");

  if (!button || !menu) return;

  function setMenuOpen(open) {
    menu.classList.toggle("open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  }

  button.addEventListener("click", function () {
    setMenuOpen(button.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      button.focus();
    }
  });
})();
