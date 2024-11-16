/*¨
Has hecho una compra y sabes el precio del producto y su iva. 
Haz un script que te calcule el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio 
el resultado de multiplicasr precio por el iva y dividir por 100.

Output:

Precio 200€
Iva: 21%
El total son 242 €.  //200 + 21*200/100
*/
let precio = 200;
let iva = 21;
let totalAPagar = precio + iva*precio/100;

console.log("Precio ",precio);
console.log("Iva: ",iva,"%");
console.log("El total son  ",totalAPagar,"€.");
