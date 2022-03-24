// graph TD
// A[chiedo km/età al cliente] --> B[ottengo informazioni]
// B --> C[calcolo il prezzo del viaggio in base ai km]
// C --> D{il cliente è maggiorenne?}
// D --> F[falso: applico lo sconto del 20%]
// D --> H{vero: il cliente ha più di 65 anni?}
// H --> I[vero:applico lo sconto del 40%]
// H --> G[falso: applico il prezzo senza sconti]
// F --> L[procedo al calcolo del prezzo finale scontato]
// I -->L
// G -->Fine
// L -->Fine

let userAge = parseInt(prompt("Qual'è la tua età?"));
console.log(userAge);
if (isNaN(userAge)){
    alert('Inserisci un età valida, ricarica la pagina e ricomincia!');
} else{
    console.log('avanti');
}

let userKm = parseInt(prompt("quanti km vuoi percorrere?"));
console.log(userKm);
if (isNaN(userKm)){
    alert('Inserisci un chilometraggio valido, ricarica la pagina e ricomincia!');
} else{
    console.log('avanti');
}

let firstPrice = (userKm * 0.21);

let firstTotalPrice = (Math.round(firstPrice * 100) / 100);

let youngPerCent = (firstPrice * 20 / 100);
let youngPrice = (firstPrice - youngPerCent);
let youngTotalPrice = (Math.round(youngPrice * 100) / 100);

let oldPerCent = (firstPrice * 40 / 100);
let oldPrice = (firstPrice - oldPerCent);
let oldTotalPrice = (Math.round(oldPrice * 100) / 100);

if(userAge < 18){
   document.getElementById('price').innerHTML += ' ' + youngTotalPrice + '€';
   console.log('il prezzo del biglietto scontato', youngTotalPrice);
} else if(userAge >= 65){
   document.getElementById('price').innerHTML += ' ' + oldTotalPrice + '€';
   console.log('il prezzo del biglietto scontato', oldTotalPrice);
} else {
   document.getElementById('price').innerHTML += ' ' + firstTotalPrice + '€';
   console.log('il prezzo del biglietto', firstTotalPrice);
}
