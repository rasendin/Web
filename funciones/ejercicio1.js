'use strict';

function tienda(producto = "Producto genérico", precio = 100, impuesto = 21) {
let nombre = producto+"";
let price =+ precio;
let tax =+ impuesto;

if(isNaN(price) || isNaN(impuesto) || price<0 || tax<0) {
    console.error("Error, el precio o el número de impuesto no es válido");
    return;
} else {
    console.log("El producto "+nombre+" tiene un precio de "+(price+(impuesto*price/100)));
}
}

console.log(tienda());
console.log(tienda("Silla"));
console.log(tienda("Y",500));
console.log(tienda("Reloj",500,10));
console.log(tienda(8,"Hola"));
console.log(tienda(10,90,"asd"));
console.log(tienda("Pera",90,5,90,"otro",true));