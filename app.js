'use strict';

const fact = [
    "C'est le titre de ta sex tape ?",
    "Oh mon dieu j'aurais dû avoir bien plus peur !",
    "Sergent, avec tout le respect que je vous dois, je vais complètement ignorer tout ce que vous venez de dire.",
    "Cool, cool, cool, cool, cool. Aucun doute, aucun doute, aucun doute.",
    "Bien. mais en signe de protestation, je marche là-bas extrêmement lentement!",
    "Super, je voudrais votre bouteille de vin à 8 $ la plus élevée, s'il vous plaît.",
    "'Je suis tellement confus que je ne sais pas ce qui se passe en ce moment': c'est le titre de ta sex tape ?",
    "Nous avons arrêté des meurtriers, nous avons éliminé les cartels. Mais aujourd'hui, nous sommes confrontés au pire que New York ait à offrir : les pompiers.",
    "Mon Dieu, tu as dû être le pire élève de quatrième de tous les temps."
]

const factBtn = document.querySelector("#fact__btn");
const body = document.body;

// couleurs de base du background body et button
body.style.background = "red";
factBtn.style.background = "red";

// Fonction qui définis la nouvelle couleur
function changeColor() {
    const colorNbr = newColor();
    const color = `rgb(${colorNbr})`;
    body.style.background = color;
    factBtn.style.background = color;
}

// Fonction qui change le texte avec un élément aléatoire du tableau fact[]
function changeText() {
    const paragraph = document.querySelector("#fact__paragraph");
    paragraph.textContent = fact[Math.floor(Math.random() * fact.length)];
}

// Fonction qui stock les 3 nombres pour la couleur RGB et les stockent dans un array
function newColor(colorArr = []) {

    for (let i = 0; i < 3; i++) {
        colorArr[i] = Math.floor(Math.random() * Math.floor(256));;
    }
    return colorArr.toString();
}

// Fonction qui appele le changement de texte et de couleurs
function GenerateFact() {
    changeText();
    changeColor();
}

// Change la citation, la couleur de background du body et du bouton au click
factBtn.addEventListener("click", GenerateFact);