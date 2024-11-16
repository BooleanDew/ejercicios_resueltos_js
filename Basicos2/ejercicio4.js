/**
 * 
 * Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:
 */

function imprimirArreglo(...arreglo){
    return arreglo.toString().replaceAll(",","\n")
}

console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))