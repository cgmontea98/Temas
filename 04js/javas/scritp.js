// Clase 29/11
/*
//Conversión de tipos
let numero = prompt('ingresa un número')
console.log(numero)
console.log('antes es', typeof numero)
// forma extensa
numero = Number(numero) // se usa método o función Number que lo que hace es convertir el prompt en un número
console.log('despues es', typeof numero)*/
/*
//Ej de como usa los datos JS; si es string se comporta como tal. Si se realiza suma quedará cómo tal
let numero_uno = prompt('ingrese número 1')
let numero_dos = prompt('ingrese número 2')

let resultado = numero_uno + numero_dos
console.log('resultado arrojado es string:', resultado)*/
/*
// Para que un string de prompt haga una suma se puede hacer la conversión de manera extensa o, esta, una forma más sencilla
let numero_uno = parseInt(prompt('ingrese número 1'))
let numero_dos = prompt('ingrese número 2')
numero_dos = parseInt(numero_dos)

let resultado = numero_uno + numero_dos
console.log('resultado arrojado es string:', resultado)*/
/*
let logico = prompt('ingrese "False" o "True"')
console.log('antes de hacer conversión de dato:', typeof logico, logico)
logico = Boolean(logico)
console.log('conversión', typeof logico, logico)*/

/*
//Operadores
let numero_uno = parseInt(prompt('ingrese número 1'));
let numero_dos = prompt('ingrese número 2');
numero_dos = parseInt(numero_dos);

let resultado = numero_uno + numero_dos;
document.write('la suma es:', numero_uno + "+" + numero_dos + "=" + resultado + " " + '<br>');
resultado = numero_uno - numero_dos;
document.write('la resta es:', numero_uno + "-" + numero_dos + "=" + resultado + " " + '<br>');
resultado = numero_uno * numero_dos;
document.write('la multiplicación es:', numero_uno + "*" + numero_dos + "=" + resultado + " " + '<br>');
resultado = numero_uno / numero_dos;
document.write('la división es:', numero_uno + "/" + numero_dos + "=" + resultado + " " + '<br>');*/

// string o cadenas literales, temple string o string literal...

const nom = 'pepita';
const apel = 'perez';

const nomApel = `${nom} y el appelido es ${apel}`
console.log(nomApel)