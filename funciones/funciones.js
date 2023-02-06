function sumar(x,y){
    let resultado
    resultado = x+y;
    return resultado;
}
function sumar2(x,y){
    console.log(x+y);
}

let z=sumar2(3,5);
sumar(2,4);
let x=sumar(4,5);   // Este es el lógico y que vamos a usar
console.log(sumar(x,x));

console.log(sumar());
console.log(sumar(5));
console.log(sumar(4,5,6,7,8,9,"hola"));