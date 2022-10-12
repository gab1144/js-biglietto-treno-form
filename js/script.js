const btnGenera = document.getElementById('btn-genera');
const reset = document.getElementById('reset');
const btnNew = document.getElementById('new');
const biglietto = document.querySelector('#biglietto');
const nuovoBiglietto = document.querySelector('#nuovo-biglietto');
const prezzoKm = 0.21;
const scontoMinorenni = 20;
const scontoOver65 = 40;
let datiValidi = true;
let kmPercorso;
let nomeCognome;
let prezzoIniziale;
let sconto;
let prezzoFinale;

//scrive in tabella i valori relativi agli sconti
document.getElementById('sconto-min').innerHTML= scontoMinorenni + "%";
document.getElementById('sconto-over').innerHTML= scontoOver65 + "%";

//al click del bottone genera legge i dati inseriti dall'utente, effettua un controllo e mostra il biglietto
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
    biglietto.classList.remove('d-none');
    nuovoBiglietto.classList.remove('d-none');
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

//cancella tutte le informazioni inserite dall'utente nei campi di input
reset.addEventListener('click', function(){
  document.getElementById('nome-cognome').value="";
  document.getElementById('km-percorso').value="";
  document.getElementById('fascia-eta').value="";
  
});

//cancella tutte le informazioni inserite dall'utente nei campi di input e nasconde il biglietto appena generato
btnNew.addEventListener('click', function(){
  document.getElementById('nome-cognome').value="";
  document.getElementById('km-percorso').value="";
  document.getElementById('fascia-eta').value="";

  biglietto.classList.add('d-none');
  nuovoBiglietto.classList.add('d-none');
});
