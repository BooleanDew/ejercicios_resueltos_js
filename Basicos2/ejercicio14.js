/*
Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, 
la posición inicial y la posición final. La función debe retornar la suma de todos los números 
dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.
*/

function sumarArreglo(arreglo, inicio, final){
    let aux = 0;
    if(inicio==final){
        aux = 0;
    }else{
        for(let i=inicio; i<=final; i++){
            aux = aux+arreglo[i];
        }
    }

    return aux;
}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1 ,2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

