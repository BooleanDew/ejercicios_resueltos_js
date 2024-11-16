/*
Escribir una función llamada contarRango que reciba dos números 
y retorne cuántos números  hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

// código de prueba
console.log(contarRango(1, 9)) // 7--- 1,2,3,4,5,6,7,8,9
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

*/

function contarRango(a,b){
    let contador = 0;
    for(let i=a+1; i<=b-1; i++){
        contador++;
    }

    return contador;
}

console.log(contarRango(1, 9)) // 7  
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
console.log(contarRango(2, 6)) // 0
console.log(contarRango(24589498, 84589498)) // 0
console.log(contarRango(-10, 5)) // -10,-9,-8,-7,-6,-5,-4,-3-,2,-1,0,1,2,3,4,5

