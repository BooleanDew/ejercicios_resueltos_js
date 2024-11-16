/**
 * 
 * 1,2,3,  
6
4,5
15
,6,
21
7,
28
8,
36
9
45
10
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
 * 
 */

function sumarRango(inicio, final){
    let acumulador = 0;
    for(let i=inicio; i<=final; i++){
        acumulador +=i;
    }

    return acumulador;
}

console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
console.log(sumarRango(1, 9)) // 0