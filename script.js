var nbmyst = 0;
var t1 = 0;
var nbtent = 1
var msg = document.getElementById("div2");
var temps = 0;

function Joueur() {
  this.nom = "";
  this.score = 10000;
  this.temps = 10000;
}

var Thof = [];
for (var i = 0; i < 10; i++) {
  Thof[i] = new Joueur();
}

function start() {
  nbmyst = Math.ceil(Math.random() * 10);
  nbtent = 1;
  t1 = new Date();
  msg.innerHTML = "";
  intext.value = "Entrez un nombre entre 1 et 10";
}

function nombre_mystere3() {
  var intext = document.getElementById("intext");
  var nb = intext.value;

  if (nb > nbmyst) {
    msg.innerHTML = "Raté, votre nombre est trop grand !!";
    nbtent++;
  }
  else if (nb < nbmyst) {
    msg.innerHTML = "Raté, votre nombre est trop petit !!";
    nbtent++;
  }
  else if (nb == nbmyst) {
    var t2 = new Date();
    temps = Math.floor((t2.getTime() - t1.getTime()) / 1000);
    msg.innerHTML = "BRAVO !!\n Vous avez gagné en " + nbtent + " tentatives et " + temps + " secondes";

    if (nbtent < Thof[9].score) {
      var div3 = document.createElement("DIV");
      div3.setAttribute("id", "div3");
      div3.innerHTML = "Bravo!\n vous faites parti des 10 meilleurs. Entrez votre nom";
      document.body.appendChild(div3);

      var input = document.createElement("INPUT");
      input.setAttribute("id", "intext2");
      document.body.appendChild(input);

      var bout = document.createElement("BUTTON");
      bout.setAttribute("id", "boutt");
      bout.innerHTML = " Ajouter";
      document.body.appendChild(bout);

      bout.addEventListener("click", ajouterNom, false);
    }
  }
}

function ajouterNom() {
  var input = document.getElementById("intext2");

  Thof[9].nom = input.value;
  Thof[9].score = nbtent;
  Thof[9].temps = temps;
  Thof.sort(function (a, b) { return a.score - b.score });
  table();
  console.log(Thof);

  div3 = document.getElementById("div3");
  input = document.getElementById("intext2");
  bout = document.getElementById("boutt");
  document.body.removeChild(div3);
  document.body.removeChild(input);
  document.body.removeChild(bout);

}

function table() {
  //rang 1
  var l1c1 = document.getElementById("11");
  var l1c2 = document.getElementById("12");
  var l1c3 = document.getElementById("13");
  l1c1.innerHTML = Thof[0].nom;
  l1c2.innerHTML = Thof[0].score;
  l1c3.innerHTML = Thof[0].temps;

  //rang 2
  var l2c1 = document.getElementById("21");
  var l2c2 = document.getElementById("22");
  var l2c3 = document.getElementById("23");
  l2c1.innerHTML = Thof[1].nom;
  l2c2.innerHTML = Thof[1].score;
  l2c3.innerHTML = Thof[1].temps;

  //rang 3
  var l3c1 = document.getElementById("31");
  var l3c2 = document.getElementById("32");
  var l3c3 = document.getElementById("33");
  l3c1.innerHTML = Thof[2].nom;
  l3c2.innerHTML = Thof[2].score;
  l3c3.innerHTML = Thof[2].temps;

  //rang 4
  var l4c1 = document.getElementById("41");
  var l4c2 = document.getElementById("42");
  var l4c3 = document.getElementById("43");
  l4c1.innerHTML = Thof[3].nom;
  l4c2.innerHTML = Thof[3].score;
  l4c3.innerHTML = Thof[3].temps;

  //rang 5
  var l5c1 = document.getElementById("51");
  var l5c2 = document.getElementById("52");
  var l5c3 = document.getElementById("53");
  l5c1.innerHTML = Thof[4].nom;
  l5c2.innerHTML = Thof[4].score;
  l5c3.innerHTML = Thof[4].temps;

  //rang 6
  var l6c1 = document.getElementById("61");
  var l6c2 = document.getElementById("62");
  var l6c3 = document.getElementById("63");
  l6c1.innerHTML = Thof[5].nom;
  l6c2.innerHTML = Thof[5].score;
  l6c3.innerHTML = Thof[5].temps;

  //rang 7
  var l7c1 = document.getElementById("71");
  var l7c2 = document.getElementById("72");
  var l7c3 = document.getElementById("73");
  l7c1.innerHTML = Thof[6].nom;
  l7c2.innerHTML = Thof[6].score;
  l7c3.innerHTML = Thof[6].temps;

  //rang 8
  var l8c1 = document.getElementById("81");
  var l8c2 = document.getElementById("82");
  var l8c3 = document.getElementById("83");
  l8c1.innerHTML = Thof[7].nom;
  l8c2.innerHTML = Thof[7].score;
  l8c3.innerHTML = Thof[7].temps;

  //rang 9
  var l9c1 = document.getElementById("91");
  var l9c2 = document.getElementById("92");
  var l9c3 = document.getElementById("93");
  l9c1.innerHTML = Thof[8].nom;
  l9c2.innerHTML = Thof[8].score;
  l9c3.innerHTML = Thof[8].temps;

  //rang 10
  var l10c1 = document.getElementById("101");
  var l10c2 = document.getElementById("102");
  var l10c3 = document.getElementById("103");
  l10c1.innerHTML = Thof[9].nom;
  l10c2.innerHTML = Thof[9].score;
  l10c3.innerHTML = Thof[9].temps;
}