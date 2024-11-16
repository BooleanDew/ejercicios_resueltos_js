/*
Escribir una función llamada sumarArreglo que reciba un arreglo 
de números y retorne la suma de todos los elementos.

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0

Analisis:
deglosar los elementos uno por uno he ir sumandolos el primero con lo siguientes y almacenarlo en una variable.

pseudocodigo:
numeros <- 3,1,2;
sumaTotal <-0;

1) sumaTotal<-3;
1) sumaTotal<-4;
1) sumaTotal<-6;

sumaTotal <- sumaTotal+numero[0]; 
sumaTotal <- sumaTotal+numero[1]; 
sumaTotal <- sumaTotal+numero[2]; 

 Para n<-0 Hasta numeros.total Paso 1 Hacer:
    sumaTotal <- sumaTotal+numero[n]; 
 fin para

 retornar sumaTotal;
*/

function sumarArreglo(arreglo){
    let sumaTotal = 0;
    for(let n=0; n<arreglo.length; n++){
        sumaTotal = sumaTotal+arreglo[n]; 
    }

    return sumaTotal;
}

console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0
console.log(sumarArreglo([33,1,2,2,1,1])) // 40