/*
Una tortilla de patatas lleva 200 gramos de patatas por persona. 
Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 

Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias

200grs. patatas
1000grs / 1 huevo
300grs cebolla

200+1+0.3 = para una persona
200+1+0.3 = para una persona
200+1+0.3 = para una persona
200+1+0.3 = para una persona
200+1+0.3 = para una persona


*/

/* const huevos = 1;
const patatas = 200;
const cebollas = 0.3;

let comensales = 38;
let cantidadHuevos = (comensales*huevos)
let grsTotalPatatas = (cantidadHuevos*patatas)
let grsCebollas = (grsTotalPatatas*cebollas)



console.log("Comensales: "+comensales);
console.log("Patatas: "+grsTotalPatatas+"Grs.");
console.log("Huevos: "+cantidadHuevos);
console.log("Cebollas: "+grsCebollas+"Grs.");
 */

var comensales, papas, huevos, cebollas;


            
comensales = 3;     
papas = comensales*200;   
papas = papas/1000;    //en kilos   
huevos = papas*5;     
cebolla = papas*300;   
console.log("Patatas " + papas+" kilos");  
console.log("Huevos " + huevos);   
console.log("Cebolla "+cebolla +" gramos");