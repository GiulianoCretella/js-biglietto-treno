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

let userAge = prompt("Qual'è la tua età?");
console.log(userAge);

let userKm = prompt("quanti km vuoi percorrere?");
console.log(userKm);

let firstPrice = (userKm * 0.21);
let youngPerCent = (firstPrice * 20 / 100);
let youngPrice = (firstPrice - youngPerCent);
let oldPerCent = (firstPrice * 40 / 100);
let oldPrice = (firstPrice - oldPerCent);

if(userAge < 18){
   console.log('Questo è il prezzo del tuo biglietto!:', (youngPrice));
} else if(userAge >= 65){
    console.log('Questo è il prezzo del tuo biglietto scontato!:', (oldPrice))
} else {
    console.log('Questo è il prezzo del tuo biglietto!:', (firstPrice))
}