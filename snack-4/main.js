let array = [];
let somma = 0;
while(somma < 50){
    
const numero = Number(prompt("inserisci un numero"));
array.push(numero);
const risultato = Number(somma+= +numero);
console.log(somma);
if (somma >= 50){
    break;
}

}