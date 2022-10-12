const prezzoKm = 0.21;
const kmPercorso = parseInt (document.getElementById('km-percorso').value);
const nomeCognome = document.getElementById('nome-cognome').value;
const prezzoIniziale = kmPercorso * 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;
const btnGenera = document.getElementById('btn-genera');
const reset = document.getElementById('reset');
let sconto;
let prezzoFinale;
let datiValidi = true;


document.getElementById('sconto-min').innerHTML= scontoMinorenni + "%";
document.getElementById('sconto-over').innerHTML= scontoOver65 + "%";

btnGenera.addEventListener('click', function(){
  if (kmPercorso < 1 ) {
    alert("Devi inserire un numero di chilometri maggiore di 0 e un'età valida (maggiore o uguale a 0)");
    datiValidi = false;
  }
  
  if (datiValidi) {
    document.getElementById('km').innerHTML= kmPercorso + " km";
    document.getElementById('eta').innerHTML= document.getElementById('fascia-eta').value;
    document.getElementById('prezzo-i').innerHTML= prezzoIniziale.toFixed(2)  + " €";
    document.getElementById('nome-passeggero').innerHTML= nomeCognome;
    
    if (document.getElementById('fascia-eta').value === "Maggiorenne") {
      prezzoFinale = prezzoIniziale - (prezzoIniziale * scontoMinorenni / 100);
      sconto = scontoMinorenni;
    } else if (document.getElementById('fascia-eta').value === "Over 65") {
      prezzoFinale =prezzoIniziale - (prezzoIniziale *scontoOver65 / 100);
      sconto = scontoOver65;
      } else {
        prezzoFinale = prezzoIniziale;
        sconto = 0;
    }
  
    document.getElementById('sconto').innerHTML= sconto + " %";
    document.getElementById('prezzo-f').innerHTML= prezzoFinale.toFixed(2) + " €";
  }
});
