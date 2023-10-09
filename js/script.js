/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


myDiv = document.getElementById('my-text');
/* myDiv.innerHTML = prezzoFinale */

let chilometri = parseInt(prompt('Quanti chilometri dovrai percorrere?'));
console.log(chilometri);
let età = parseInt(prompt('Quanti anni hai?'));
console.log(età);
const tariffa = 0.21;
let prezzoIntero = tariffa * chilometri;
console.log(prezzoIntero);
let sconto = 0;

if (isNaN(chilometri) || isNaN(età)){
    myDiv.innerHTML = ('Inserisci correttamente i dati')
    window.location.reload()
};
if (età >= 65){
    let sconto = (prezzoIntero * 0.4);
    let prezzoFinale= prezzoIntero - sconto;
    myDiv.innerHTML= ('Il costo del suo biglietto è ' + prezzoFinale.toFixed(2) + '€')
} else if (età < 18){
    let sconto = (prezzoIntero * 0.2);
    let prezzoFinale= prezzoIntero - sconto;
    myDiv.innerHTML= ('Il costo del suo biglietto è ' + prezzoFinale.toFixed(2) + '€')
} else {
    myDiv.innerHTML= ('Il costo del suo biglietto è ' + prezzoIntero.toFixed(2) + '€')
};