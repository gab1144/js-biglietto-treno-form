const prezzoKm = 0.21;
let kmPercorso;
let nomeCognome;
let prezzoIniziale;
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

  kmPercorso = parseInt (document.getElementById('km-percorso').value);
  nomeCognome = document.getElementById('nome-cognome').value;
  prezzoIniziale= kmPercorso * 0.21;
  datiValidi = true;
  
  if (kmPercorso < 1 || isNaN(kmPercorso )) {
    alert("Devi inserire un numero di chilometri maggiore di 0");
    datiValidi = false;
  }
  
  if (datiValidi) {
    const biglietto = document.querySelector('#biglietto');
    biglietto.classList.remove('d-none');
    document.getElementById('km').innerHTML= kmPercorso + " km";
    document.getElementById('eta').innerHTML= document.getElementById('fascia-eta').value;
    document.getElementById('prezzo-i').innerHTML= prezzoIniziale.toFixed(2)  + " €";
    document.getElementById('nome-passeggero').innerHTML= nomeCognome;
    
    if (document.getElementById('fascia-eta').value === "Minorenne") {
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

reset.addEventListener('click', function(){
  document.getElementById('nome-cognome').value="";
  document.getElementById('km-percorso').value="";
  document.getElementById('fascia-eta').value="";
  
});
