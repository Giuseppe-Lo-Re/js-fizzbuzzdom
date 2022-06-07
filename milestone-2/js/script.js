// MILESTONE 2
// Per ogni numero, data una ul nel DOM, 
// aggiungete un elemento html li con il numero o la stringa corretta 
// (seguendo le regole della Milestone 1).

// Scrivo un programma che stampi i numeri da 1 a 100:
for(let i = 1; i<= 100; i++) {    

    // Dichiaro variabile stringa/numero:
    let FizzOrBuzz;

    // Per i multipli di 3 stampo Fizz, per i multipli di 5 Buzz.
    // Per i numeri che sono sia multipli di 3 che di 5 stampo FizzBuzz:
    if ((i % 3 == 0) && (i % 5 == 0)) {
    FizzOrBuzz = 'FizzBuzz';
    } else if(i % 3 === 0) {
    FizzOrBuzz = "Fizz";
    } else if(i % 5 === 0) {
    FizzOrBuzz = "Buzz"; 
    } else { 
    FizzOrBuzz = i;
    }
    
    // Richiamo un elemento nel documento che corrisponde al selettore Css specificato:
    const mainList = document.querySelector('.list');

    // aggiungo un elemento html li con il numero o la stringa corretta: 
    const newLi = `<li>Elemento ${FizzOrBuzz}</li>`;
    mainList.innerHTML += newLi;
}