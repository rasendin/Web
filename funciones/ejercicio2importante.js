function askNumber() {
    do {
        number = prompt("Introduce un numero");
        if (isNaN(number) || number == "") alert("Por favor, introduce un numero");
    } while (isNaN(number) || number == "");

    return number;
}

function askMode() {
    do {
        mode = (prompt("Introduce un modo de visualizacion entre LISTA, PARRAFO, TABLA o DESPLEGABLE")).toLocaleUpperCase();
        console.log(mode);
        if (mode !== "LISTA" && mode !== "PARRAFO" && mode !== "TABLA" && mode !== "DESPLEGABLE") alert("Por favor, introduce un modo valido");
    } while (mode !== "LISTA" && mode !== "PARRAFO" && mode !== "TABLA" && mode !== "DESPLEGABLE")
    return mode;
}

function makeList(table,rows) {
    document.write("<ul>");
    for (let i = 1; i <= rows; i++) {
        document.write("<li>"+table+"x"+i+"="+(table*i)+"</li>");
    }
    document.write("</ul>")
}

function makeParagraph(table,rows) {
    document.write('<div style="border: 1px solid black;">')
    for (let i = 1; i <= rows; i++) {
        document.write(table+"x"+i+"="+(table*i)+"<br>");
    }
    document.write('</div>')
}

function makeTable(table,rows) {
    document.write("<style> table, th, td {border: 1px solid black; padding: 5px}</style>")
    document.write("<table border = 1 border-collapse = 1>");
    for (let i = 1; i <= rows; i++) {
        document.write("<tr>");
        document.write("<td>"+table+"x"+i +"</td>");
        document.write("<td> = </td>");
        document.write("<td>"+(table*i)+"</td>");
        document.write("</tr>");

    }
    document.write("</table>")
}

function makeDropdown() {
    document.write('<select id="dropdown">')
        for (let i = 1; i <= rows; i++) {
            document.write("<Option>"+table+"x"+i+"="+(table*i)+"</Option>+<br>");
        }
    document.write("</select>")
  }

let number1 = askNumber();
let number2 = askNumber();

table = Math.min(number1, number2);
rows = Math.max(number1, number2);

mode = askMode();

if (mode === "LISTA") makeList(table,rows);
else if (mode === "PARRAFO") makeParagraph(table,rows);
else if (mode === "TABLA") makeTable(table,rows);
else if (mode === "DESPLEGABLE") makeDropdown(table,rows);