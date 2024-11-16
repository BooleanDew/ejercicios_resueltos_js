/*
Crear una función , que sustituya todos los elementos de un array 
con el valor 0 por el valor 1
*/

const arreglo = [55,0,4,0,1,3,78,0,12,0,33,0,0,12,1];

//55,0,4,0,1,3,78,0,12,0,33,0,0,12,1

//si el primer indice es igual 0, lo cambio por 1

/*
1) recorer nuestro arreglo de numeros.
2) identificar las restricciones
   - si es 1 cambiarlo por 0
   - si es 0 no cambiarlo.
*/


for(let i=0; i<arreglo.length;i++){
    if(arreglo[i] != 0){
        arreglo[i] = 0;
    }
}

console.log(arreglo)