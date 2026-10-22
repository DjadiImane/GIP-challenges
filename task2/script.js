var ecran = document.getElementById("affich");
var expression = "";

function afficher() {
  if (expression === "") {
    ecran.textContent = "0";
  } else {
    ecran.textContent = expression;
  }
}

function ajouter(valeur) {
  expression = expression + valeur;
  afficher();
}

function retour() {
  expression = expression.slice(0, -1);
  afficher();
}

function effacer() {
  expression = "";
  afficher();
}

function egal() {
  if (expression === "") {
    return;
  }

  var forme = /^-?(0|[1-9]\d*)(\.\d+)?([+\-*\/](0|[1-9]\d*)(\.\d+)?)*$/;

  if (!forme.test(expression)) {
    alert("Erreur");
    return;
  }

  var resultat = eval(expression);

  // div par zéro
  if (!isFinite(resultat)) {
    alert("Erreur");
    return;
  }

  resultat = Math.round(resultat * 1000000000) / 1000000000;
  expression = String(resultat);
  afficher();
}

document.addEventListener("keydown", function (event) {
  var touche = event.key;

  if ("0123456789+-*/.".indexOf(touche) !== -1) {
    event.preventDefault();
    ajouter(touche);
  } else if (touche === "Enter") {
    event.preventDefault();
    egal();
  } else if (touche === "Backspace") {
    retourArriere();
  } else if (touche === "Escape") {
    toutEffacer();
  }
});
