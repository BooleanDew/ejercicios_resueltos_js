/*
Escribir una función llamada numeroDeAes que reciba un string 
y retorne el número de veces que aparece la letra "a":

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

Analisis:
si "a" esta en variable palabra agregarla se incrementa la variable cantidad_letras , 
repetir hasta que ya no se encuentren mas letras "a".

palabra <- "hola"
cantidad_letras <- 0

# Iteraciones:
1) cantidad_letras:0 // h
2) cantidad_letras:0 // o
3) cantidad_letras:0 // l
4) cantidad_letras:1 // a

para letra en palabra:
    si letra igual "a":
        cantidad_letras <- letra+1

retorna cantidad_letras

escribir "cantidad de letras es:",cantidad_letras
*/

function numeroDeAes(palabra){
    let cantidad_letras = 0;
    for(let letra = 0; letra<=palabra.length; letra++){
        if(palabra[letra] == "a"){
            cantidad_letras++;
        }
    }
    return cantidad_letras;
}


console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("murcielago")) // 0