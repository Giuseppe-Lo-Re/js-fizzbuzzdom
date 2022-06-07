// MILESTONE 2
// Per ogni numero, data una ul nel DOM, 
// aggiungete un elemento html li con il numero o la stringa corretta 
// (seguendo le regole della Milestone 1).


for(let i = 1; i<= 1000; i++) {    
    let FizzOrBuzz;
    if ((i % 3 == 0) && (i % 5 == 0)) {
    FizzOrBuzz = 'FizzBuzz';
    } else if(i % 3 === 0) {
    FizzOrBuzz = "Fizz";
    } else if(i % 5 === 0) {
    FizzOrBuzz = "Buzz"; 
    } else { 
    FizzOrBuzz = i;
    }
    
    const mainList = document.querySelector('.list');
    const newLi = `<li>Elemento ${FizzOrBuzz}</li>`;
    mainList.innerHTML += newLi;
}