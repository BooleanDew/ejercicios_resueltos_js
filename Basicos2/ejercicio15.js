/*
Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U
// escribe tu función acá

// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
*/

function transcribir(adn){
    let patron = {"G":"C","C":"G","T":"A","A":"U"};
    let arn = "";
    for(let n=0; n<adn.length; n++){
        arn += patron[adn[n]];
    }

    return arn;

}

console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

