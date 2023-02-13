'use strict';
// 0) RECORRE UN ARRAY DE LOS DÍAS DE LA SEMANA DE 4 FORMAS DISTINTAS
// 1) DEVUELVE OTRO ARRAY DONDE CADA DIA DE LA SEMANA SE LE CONCATENE 
//               EL NÚMERO DE LA SEMANA DE 1 A 7
// 2) IMPRIME OTRO ARRAY CON LOS ELEMENTOS QUE ACABEN EN CONSONANTE
// 3) INDICA SI ALGÚN DÍA TIENE 2 VOCALES A O E EN EL NOMBRE
// 4) ORDENA EL ARRAY DE DIAS DESCENDENTEMENTE.
/*let daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i] + " " + (i + 1));*/
    // let holi = "hola";
    // let adios = "adios";
    // console.log(holi + adios);
    /*console.log(daysOfWeek[1]);
    console.log(daysOfWeek[2]);
    console.log(daysOfWeek[3]);
}
    */

// 2) IMPRIME OTRO ARRAY CON LOS ELEMENTOS QUE ACABEN EN CONSONANTE

let words = ["Amigos", "Cocina", "Campos", "Conducir"];

const consonantFilter = words.filter((value) => {

    if ("AEIOUaeiou".includes(value[value.length - 1])) {
        return false;
    } else {
        return true
    }
})

console.log(consonantFilter);

/*
const vowels = "AEIOUaeiou";
for (let v of vowels) {
    if (value[value.length - 1] == v) {

        return false;
    }
}
return true;

*/


// 3) INDICA SI ALGÚN DÍA TIENE 2 VOCALES A O E EN EL NOMBRE

//daysOfWeek.some

// Ejercicio ordenar números

/*
let numeros = new Array(4,9,27,52,92);
let ordenar = function(a,b){
    return a-b;
};
console.log(numeros.sort((a,b) => {a-b}));
console.log(numeros.reverse((a,b) => {a-b}));
console.log(numeros.sort(ordenar));
*/

// 0) RECORRE UN ARRAY DE LOS DÍAS DE LA SEMANA DE 4 FORMAS DISTINTAS

let dias = new Array("Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo");
for(let i = 0;i<dias.length;i++){
    console.log(dias[i]);
}
for(let dia in dias){
    console.log(dias[dia]);
}
for(let dia of dias){
    console.log(dia);
}
let i = 0;
while(dias.length>i){
    console.log(dias[i])
    i++;
}

// 1) DEVUELVE OTRO ARRAY DONDE CADA DIA DE LA SEMANA SE LE CONCATENE 

for(i = 0;i<dias.length;i++){
    console.log(dias[i]+" "+(i+1));
}

// 2) IMPRIME OTRO ARRAY CON LOS ELEMENTOS QUE ACABEN EN CONSONANTE

let cosas = new Array("Mesa","Móvil","Camisas","Agua","Paquitos");

const consonante = function(value){
    if("AEIOUaeiou".includes(value[value.length-1])){
        return false;
    } else {
        return true;
    }
}
console.log(cosas.filter(consonante));

// 3) INDICA SI ALGÚN DÍA TIENE 2 VOCALES A O E EN EL NOMBRE

let contieneAE = false;
for(let i = 0;dias.length>i;i++){
    if("A"||"a"||"E"||"e".includes(dias[0])){
        contieneAE=true;
        console.log(contieneAE);
} else {
    contieneAE=false;
}
}

const condition = (words) => /[AEae]/i.test(words);
const includesAOrE = dias.filter((condition));
console.log(includesAOrE);

// 4) ORDENA EL ARRAY DE DIAS DESCENDENTEMENTE.

console.log(dias.reverse((a,b)=>a-b));