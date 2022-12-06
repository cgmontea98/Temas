/*//Pedir nombre y saludar

function saludar(){
    let nombreU = prompt('ingrese nombre')
    alert('Hola:' + nombreU)
}

saludar()*/
/* //Pedir edad y responder si es  o no es un menor de edad

function edad(){
    let edad = Number(prompt('ingrese edad:'))
    if(edad < 18){
        alert('Usted es menor');
    }else{
        alert('Usted es mayor')
    }
}
edad(); */
/* //Pedir nombre y edad al usuario: caso a) Pepita y mayor, ingresa a la sala 1; caso b) Pepita y es menor de edad, ingresa a sala 2; caso c) no se llama Pepita pero es mayor de edad sala 4

function salas(){
    let nombre = prompt('ingrese nombre:');
    let edad = Number(prompt('ingrese edad:'));

    if(nombre === "Pepita" && edad >= 18){
        alert('Sala 1')
    }else if (nombre === "Pepita" && edad <= 18){
        alert('Sala 2')
    }else if(nombre!="Pepita" && edad >= 18){
        alert('Sala 3')
    }
}
salas() */
/* //Pedir un numero y mostrar multiplos de 2 desde 1 hasta número


function multiplos(){
    const numero = Number(prompt('ingrese número'));
    let pares = '';
    for(var i = 1; i <= numero; i++ ){
        if(i % 2 === 0){
            pares += i + ', '
        }
        alert(`Los nueros primos de ${numero} son: ${pares}`)
    }
}
multiplos()
 */

//EJERCICOS 02/12

let num = parseInt(prompt("ingrese un número"));
let ope = prompt(
  "Indique que operación quiere hacer: el doble; triple; mitad; reducir 5 unidades; sumarle 4 unidades al doble;  saber el cuadrado"
);
document.write(`El número es: ${num} y la operación es: ${ope} </br>`);

// Pedir un número, mostrar si es par, impar o si es cero. ok1
if (num === 0) {
  document.write("El número es cero" + "</br>");
} else if (num % 2 == 0) {
  document.write("El número es par" + "</br>");
} else {
  document.write("El número es impar" + "</br>");
}

// Pedir un número, mostrar si es positivo, negativo o si es cero.
if (num < 0) {
  document.write("El número es negativo" + "</br>");
} else if (num > 0) {
  document.write("El número es positivo" + "</br>");
} else {
  document.write("El número es cero" + "</br>");
}

// Pedir un número, mostrar el doble de n. & Pedir un número, mostrar el doble de n más 4
if (ope === "doble") {
  let resultado = num * 2;
  document.write("El doble del número es: ", resultado + "</br>");
} else if (ope === "doble mas 4") {
  resultado = num * 2 + 4;
  document.write("El doble del número es: ", resultado + "</br>");
}

// Pedir un número, mostrar el triple de n.
if (ope === "triple") {
  resultado = num * num * num;
  document.write("El triple del número es: ", resultado + "</br>");
}

// Pedir un número, mostrar la mitad de n.
if (ope === "mitad") {
  resultado = num / 2;
  document.write("La mitad del número es: ", resultado + "</br>");
}

// Pedir un número, mostrar la tercera parte de n.
if (ope === "tercera parte") {
  resultado = num / 3;
  document.write("La tarcera parte del número es: ", resultado + "</br>");
}

// Pedir un número, mostrar n reducido en 5.
if (ope === "reducido") {
  resultado = num - 5;
  document.write("La tarcera parte del número es: ", resultado + "</br>");
}

//Pedir un número, mostrar el cuadrado
if (ope === "cuadrado") {
  resultado = num * num;
  document.write("El cuadrado de parte del número es: ", resultado + "</br>");
} 


/* Operaciones básicas
let num1 = parseInt(prompt('Ingrese un número'));
let oper = prompt('Ingrese signo: +; -; *; / o %')
let num2 = parseInt(prompt('Ingrese un número'));
let resultado;
// Pedir dos números, mostrar la suma.
if(oper === "+"){
resultado = num1 + num2;
document.write(`La suma realizada entre ${num1} y ${num2} es: ${resultado}`);
}
// Pedir dos números, mostrar la resta.
if(oper === "-"){
resultado = num1 - num2;
document.write(`La resta realizada entre ${num1} y ${num2} es: ${resultado}`);
}
// Pedir dos números, mostrar la multiplicación.
if(oper === "*"){
resultado = num1 * num2;
document.write(`La multiplicación realizada entre ${num1} y ${num2} es: ${resultado}`);
}
// Pedir dos números, mostrar la división.
if(oper === "/"){
resultado = num1 / num2;
document.write(`La división realizada entre ${num1} y ${num2} es: ${resultado}`);
}
// Pedir dos números, mostrar el resto de la división.
if(oper === "%"){
resultado = num1 % num2;
document.write(`El resto de la división realizada entre ${num1} y ${num2} es: ${resultado}`);
}
*/

/* // Pedir dos números, mostrar si el primer número es divisible por el segundo.
let num1 = parseInt(prompt('Ingrese el primer número'));
let num2 = parseInt(prompt('Ingrese el segundo número'));
let res;

if(num1 % num2 == 0){
  res = num1 / num2
  document.write(`el resultado es ${res}`);
}else{
  document.write('Los números no son divisibles');
} */

// Pedir un número, mostrar la suma total desde 1 hasta n.
// Pedir un número, mostrar la suma de los números pares desde 1 hasta n.

/* let num = Number(prompt('ingrese número'))
let suma = 0;
for(let i = 0; i <= num; i++){
  
  if(i % 2 === 0){
    document.write(i + '</br>')
    suma = suma + i
    
  }

}
 */

// Pedir un número, mostrar la suma de los números impares desde 1 hasta n.
// Pedir un número, mostrar multiplos de 3 desde 1 hasta n.
// Pedir un número, mostrar los números desde n hasta 0.