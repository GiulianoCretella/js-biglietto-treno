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