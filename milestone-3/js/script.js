// MILESTONE 3
// Per ogni numero, dato un container nel DOM, appendi un elemento html
// con il numero o la stringa corretta.
// Applica uno stile differente a seconda del valore dell'indice 
// per i multipli di 3, per i multipli di 5 e per i valori 
// che sono sia multipli di 3 che di 5 (seguendo le regole della Milestone 1).

// Scrivo un programma che stampi i numeri da 1 a 100.
for(let i = 1; i<= 100; i++) {
 
    // Dichiaro variabile stringa/numero:  
    let FizzOrBuzz;

    // Dichiaro variabile stile:
    let FizzBuzzColor;

    // Per i multipli di 3 stampo Fizz, per i multipli di 5 Buzz.
    // Per i numeri che sono sia multipli di 3 che di 5 stampo FizzBuzz.
    // Assegno ad una variabile il nome della classe secondo il colore che voglio assegnare:
    if ((i % 3 == 0) && (i % 5 == 0)) {
    FizzOrBuzz = 'FizzBuzz';
    FizzBuzzColor = 'fizzbuzz';
    } else if(i % 3 === 0) {
    FizzOrBuzz = "Fizz";
    FizzBuzzColor = 'fizz';
    } else if(i % 5 === 0) {
    FizzOrBuzz = "Buzz"; 
    FizzBuzzColor = 'buzz';
    } else { 
    FizzOrBuzz = i;
    }
    // Richiamo un elemento nel documento che corrisponde al selettore Css specificato:
    const numbersContainer = document.querySelector('.numbers-container');
    
    // Creo dei div box, assegno variabile stile e variabile stringa/numero:
    const newBox = `<div class="box ${FizzBuzzColor}">${FizzOrBuzz}</div>`;

    // concateno a numberContainer:
    numbersContainer.innerHTML += newBox;
}