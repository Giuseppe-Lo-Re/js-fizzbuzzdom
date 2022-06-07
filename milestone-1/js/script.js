// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero 
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// Stampare in console.

for(let i = 1; i<= 1000; i++) {    
    let FizzOrBuzz;
    if ((i % 3 == 0) && (i % 5 == 0)) {
    FizzOrBuzz = 'FizzBuzz';
    } else if(i % 5 === 0) {
    FizzOrBuzz = "Buzz";
    } else if(i % 3 === 0) {
    FizzOrBuzz = "Fizz"; 
    } else { 
    FizzOrBuzz = i;
    }
}

