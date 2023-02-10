function askNum(texto1, texto2) {
    let num;
    do {
        num = prompt("Escriba un número del 1 al 10");
        if (num == "") alert("Error! el número no puede estar vacío");
        if (isNaN(num) || num > 10 || num <= 0) { alert(texto2) }
    } while (isNaN(num) || num > 10 || num <= 0 || num == "");
    return +num;
}

let number1, number2;

number1 = askNum("Dame un número", "Error, quiero un número");
number2 = askNum("Dame un número", "Error, quiero un número");

let display;
    do {
        display = prompt("¿LISTA, PÁRRAFO o TABLA?")
        if (display != "LISTA" && display != "PARRAFO" && display != "TABLA") {
            alert("Tienes que elegir entre LISTA, PARRAFO o TABLA")
        }
    } while (display != "LISTA" && display != "PARRAFO" && display != "TABLA");


let min = Math.min(number1, number2);
let max = Math.max(number1, number2);

if (display == "LISTA"); 

function list() {
    document.write("<ul>");
    for (let i = 1; i <= max; i++) {
        document.write("<li>" + min + " x " + i + " = " + min * i + "</li>")
        document.write("</ul>")
    }
}
list(min, max);

if (display == "TABLA");
function table() {
    document.write("<table>");
    document.write("<tr>");
    for (let i = 1; i <= max; i++) {
        document.write("<td>" + min + " x " + i + " = " + (min * i) + "</td>")
        document.write("</tr>")
        document.write("</table>")
    }
}

table(min, max);

if (display == "PARRAFO");

function paragraph() {
    for (let i = 1; i <= max; i++) {
        document.write("<p>" + min + " x " + i + " = " + min * i + "</p> <br>");
    }
}
paragraph(min, max);