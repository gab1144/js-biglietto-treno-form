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
let fasciaEta;
let prezzoIniziale;
let prezzoFinale;
let offerta;
let carrozza;
let codiceCp;

//scrive in tabella i valori relativi agli sconti
document.getElementById('sconto-min').innerHTML= scontoMinorenni + "%";
document.getElementById('sconto-over').innerHTML= scontoOver65 + "%";

//al click del bottone genera legge i dati inseriti dall'utente, effettua un controllo e mostra il biglietto
btnGenera.addEventListener('click', function(){

  kmPercorso = parseInt (document.getElementById('km-percorso').value);
  nomeCognome = document.getElementById('nome-cognome').value;
  fasciaEta = parseInt (document.getElementById('fascia-eta').value);
  prezzoIniziale= kmPercorso * 0.21;
  datiValidi = true;

  //controlla tutte le possibili condizioni di errore in modo da generare un messaggio personallizzato
  if ((kmPercorso < 1 || isNaN(kmPercorso )) && nomeCognome === "" && fasciaEta === "") {
    alert("Devi inserire un numero di chilometri maggiore di 0, il nome del passeggero e la fascia di età");
    datiValidi = false;
  } else if ((kmPercorso < 1 || isNaN(kmPercorso )) && nomeCognome === "") {
    alert("Devi inserire un numero di chilometri maggiore di 0 e il nome del passeggero");
    datiValidi = false;
  } else if ((kmPercorso < 1 || isNaN(kmPercorso )) && fasciaEta === "") {
    alert("Devi inserire un numero di chilometri maggiore di 0 e la fascia di età");
    datiValidi = false;
  } else if (fasciaEta === "" && nomeCognome === "") {
    alert("Devi inserire la fascia di età e il nome del passeggero");
    datiValidi = false;
  } else if (kmPercorso < 1 || isNaN(kmPercorso )) {
    alert("Devi inserire un numero di chilometri maggiore di 0");
    datiValidi = false;
  } else if (nomeCognome === "") {
    alert("Devi inserire il nome del passeggero");
    datiValidi = false;
  } else if (fasciaEta === "") {
    alert("Devi inserire la fascia di età");
    datiValidi = false;
  }
  
  //se tutti i dati sono validi
  if (datiValidi) {
    //rende visibili il biglietto e il bottone per la generazione di un nuovo biglietto
    biglietto.classList.remove('d-none');
    nuovoBiglietto.classList.remove('d-none');

    //stampa i dati già certi
    document.getElementById('nome-passeggero').innerHTML= nomeCognome;
    
    //calcola l'eventuale sconto sulla base della fascia di età
    if (fasciaEta <= 17) {
      prezzoFinale = prezzoIniziale - (prezzoIniziale * scontoMinorenni / 100);
      offerta = "Biglietto ridotto";

    } else if (fasciaEta >= 65) {
      prezzoFinale =prezzoIniziale - (prezzoIniziale *scontoOver65 / 100);
      offerta = "Biglietto ridotto";
      } else {
        prezzoFinale = prezzoIniziale;
        offerta = "Biglietto standard";
    }

    //genera casualmente il numero della carrozza e il codice CP
    carrozza=Math.floor(Math.random() * 20) + 1;;
    codiceCp=Math.floor(Math.random() * 99999) + 1;;


    //stampa i dati rimanenti e il costo del biglietto
    document.getElementById('offerta').innerHTML= offerta;
    document.getElementById('carrozza').innerHTML= carrozza;
    document.getElementById('codice-cp').innerHTML= codiceCp;
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
