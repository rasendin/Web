'use strict';
let numero = +prompt("Dime el primer número");
let numero2 = +prompt("Dime el segundo número"); 
let mayor;
if (numero > numero2) {
    document.write("El número " + numero + " es el número mayor");
    mayor = numero;
} else if (numero < numero2) {
    document.write("El número " + numero2 + " es el mayor");
    mayor = numero2;
} else {
    document.write("Los números son iguales");
    mayor = numero;
}
for (let i = 1; i < mayor; i++) {
    let texto = prompt("Escribe un párrafo " + i);
    document.write("<p>" + texto + "</p>");
}