'use strict'

//dichiarazione variabili
const parola1 = prompt("inserisci una parola");
const parola2 = prompt("inserisci un altra parola");

// condizioni    
if(parola1.length > parola2.length){
    console.log(parola1+" è più lunga di:");
    console.log(parola2);
}
else if(parola2.length > parola1.length){
    console.log(parola2+" è più lunga di:");
    console.log(parola1)
}
else{
    console.log(" le parole "+ parola1 + " e "+ parola2 + " hanno la stessa lunghezza" )
}