
/*
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). 
La función debe retornar el número de veces que aparece el caracter en el string.
*/



function numeroDeAes(palabra,caracter){
    let cantidad_letras = 0;
    for(let letra = 0; letra<=palabra.length; letra++){
        if(palabra[letra] == caracter){
            cantidad_letras++;
        }
    }
    return cantidad_letras;
}

let carcterABuscar = "e";

console.log(numeroDeAes("abracadabra",carcterABuscar)) // 5
console.log(numeroDeAes("etinol",carcterABuscar)) // 0
console.log(numeroDeAes("murcielago",carcterABuscar)) // 0