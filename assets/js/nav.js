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
// Recuperer le formulaire dans le HTML
const formulaire = document.querySelector(".formulaire");

// Recuperer le champ du nom
const nom = document.querySelector("#nom");

// Recuperer le champ email
const email = document.querySelector("#email");

// Recuperer le bouton d'envoi
const bouton = document.querySelector(".formulaire button");

// Executer le code quand on envoie le formulaire
formulaire.addEventListener("submit", function(event) {

    // Empecher le rechargement de la page
    event.preventDefault();

    // Verifier si le nom est vide
    if (nom.value.trim() === "") {
        alert("Veuillez saisir votre nom.");
        nom.focus();
        return;
    }

    // Verifier si l'email est valide
    if (!email.checkValidity()) {
        alert("Veuillez saisir une adresse email valide.");
        email.focus();
        return;
    }

    // Afficher un message de confirmation
    alert("Votre demande d'adoption a ete envoyee avec succes !");

    // Vider les champs du formulaire
    formulaire.reset();
});
