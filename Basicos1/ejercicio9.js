/*
Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.

Teiens que escribir un programa que intercambie el valor de dos variables. 
Al final la primera variable debe terner el valor de la segunda y 
la segunda el valor de la primera. No vale usar arrays ni asignación múltiple

output:

Antes:

varUno vale 10, varDos vale 30

Al final

varUno vale 30, varDos vale 10
*/

let varUno = 345;
let varDos = 678;
let aux = varDos;
console.log("antes")
console.log("VarUno:",varUno)
console.log("VarDos:",varDos)

varDos= varUno
varUno= aux

console.log("despues")
console.log("VarUno:",varUno)
console.log("VarDos:",varDos)
