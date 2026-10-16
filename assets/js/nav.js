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
// Le formulaire d'adoption n'existe que sur la page adoption.
var formulaire = document.querySelector("form.formulaire");

if (formulaire) {
  var nom = formulaire.querySelector("#nom");
  var email = formulaire.querySelector("#email");

  // Vérifier la présence des champs avant d'ajouter la validation.
  if (nom && email) {
    formulaire.addEventListener("submit", function (event) {
      event.preventDefault();

      if (nom.value.trim() === "") {
        alert("Veuillez saisir votre nom.");
        nom.focus();
        return;
      }

      if (!email.checkValidity()) {
        alert("Veuillez saisir une adresse email valide.");
        email.focus();
        return;
      }

      alert("Votre demande d'adoption a ete envoyee avec succes !");
      formulaire.reset();
    });
  }
}
