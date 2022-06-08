// Scrivi un programma che stampi i numeri da 1 a 100

// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero 
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.


// Scrivo un programma che stampi i numeri da 1 a 100:
for(let i = 1; i<= 100; i++) {    

     // dichiaro variabile stringa/numero:
    let FizzOrBuzz;

    // Per i multipli di 3 stampo Fizz, per i multipli di 5 Buzz.
    // Per i numeri che sono sia multipli di 3 che di 5 stampo FizzBuzz:
    if ((i % 3 === 0) && (i % 5 === 0)) {
    FizzOrBuzz = 'FizzBuzz';
    } else if(i % 5 === 0) {
    FizzOrBuzz = "Buzz";
    } else if(i % 3 === 0) {
    FizzOrBuzz = "Fizz"; 
    } else { 
    FizzOrBuzz = i;
    }
}


