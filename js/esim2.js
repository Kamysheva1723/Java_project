/*
  Tämä tiedosto pelaa yhteen html-tiedoston '../esim2.html' kanssa.
 */

// etsitään html-sivulta meitä kiinnostavat kohdat eli nyt molemmat kappaleet
// Esitellään ne vakioina, koska niiden arvot eivät muutu.
// Etsintä tapahtuu aina document-olion avulla.
// document on käytännössä koko web-sivu ja kaikki sen sisältö.

// etsitään eka elementti (p-tagi) html-tagin avulla
const ekaElem = document.querySelector('p')
if (ekaElem != null) {
  console.log('Eka kappale löytyi')
}
// toinen elementti sen html-sivulla olevan id:n avulla
const tokaElem = document.getElementById('tokaKappale')

let arvosana, arvio

// kysytään käyttäjältä arvosanaa, kunnes saadaan arvo väliltä 0 .. 5
arvosana = +prompt("Anna arvosanasi: ")

while (arvosana < 0  ||  arvosana > 5) {
  // tänne tullaan, jos arvosana on joko alle 0 tai yli 5
  alert("Arvosanasi ei ollut väliltä 0 - 5")
  arvosana = +prompt("Anna arvosanasi: ")
}

if (arvosana == 5) {
  arvio = "Erinomainen"
} else if (arvosana >= 3) {
  arvio = "Ihan ok"
} else {
  arvio = "Ei mene hyvin"
}

// tulostetaan arvio html-sivulle sen eka kappaleeseen
ekaElem.innerHTML = `arvosanasi oli ${arvosana}, ${arvio}`