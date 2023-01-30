'use strict';   // Me obliga a declarar variables

console.log("Prueba console.log");
console.error("Algo ha fallado");

let fechaNacimiento;

const pi = 3.1416; // Es una constante, no se puede cambiar el valor de la variable
var x;
let y;  // undefined

y=5;    // number
y="True";   // string
y=true; //boolean

alert("Mensaje visible");
let numero = prompt("Dame un número");// Le pedimos algo al usuario y lo guardamos en una variable
alert("El número que has escrito es: " + numero);

for (let i = 1; i < 100; i++) {
    if (i % 2 == 0) {
        document.write("<p>Párrafo par</p>"); // Imprime en el HTML
    } else {
        document.write("<p>Párrafo impar</p>");
    }
}
