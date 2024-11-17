/*
Cambio de unidades. en este ejercicio debes convertir 
a segundos una medida de tiempo dada en horas y minutos.

Recuerda una hora son 60 minutos y cada minuto son 60 segundos.

Output:

horas : 2
minutos 30
Resultado 2*60*60 + 30*60 = 9000 segundos
*/

let horas = 2;
let minutos = 30;
let minutosASegundos = (horas*60*60) + (minutos*60);
console.log("Horas: "+horas+" Hrs.");
console.log("Minutos: "+minutos+" Min.");
console.log("Minutos a Segundos: "+minutosASegundos+" Seg.");