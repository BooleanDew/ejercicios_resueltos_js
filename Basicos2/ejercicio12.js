/*
Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne 
la multiplicación de todos los elementos.


*/



function multiplicarArreglo(arreglo){
    let multiplicacionTotal = 1;
  
    for(let n=0; n<arreglo.length; n++){
        multiplicacionTotal *= arreglo[n]; 
    }

    return multiplicacionTotal;
}


// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1