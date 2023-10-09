/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */


myDiv = document.getElementById('my-text');
/* myDiv.innerHTML = prezzoFinale */

var chilometri = parseInt(prompt('Quanti chilometri dovrai percorrere?'))
console.log(chilometri)
var età = parseInt(prompt('Quanti anni hai?'))
console.log(età)
var tariffa = 0.21

