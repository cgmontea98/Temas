/*console.log('hola desde un archivo externo');

console.log('window:', window) es un objeto global que encierra todo y en el f12 se ve sus objetos o propiedades */

//Variable no usar kyw de var, let: se puede cambiar el dato

/*var nombreVariableUno = 'hola';
let nombreVariableDos = 'hello';

// variable constantes NO SE PUEDE CAMBIAR EL DATO

const nombreVariableTres = 'No variable'

console.log('nombreVaribaleUno');
console.log('nombreVaribaleDos');
console.log('nombreVaribaleTres');

nombreVariableUno = 'nombreVariableTres';
nombreVariableDos = 'nombre_variable_tres';
nombreVariableTres = 'nombre_variable_uno';*/

//Etapas
// E1: declaración

/*let miVariable; //Declaración de variable
console.log(miVariable);

// E2: Inicialización

miVariable = 'miVariableXYZ';
console.log(miVariable);

 No dejar la const sin valor
const miConstante; 
console.log(miConstante)*/
/*
//TIPOS DE DATOS: PRIMITIVOS Y NO PRIMITIVOS

// TD:P> 
// 1) String se escriben dentro de "" o '' y son letras
let tdString = 'String o cadena de texto';
tdString = 'string con "palabra" entre comillas';
tdString = '10'
console.log(tdString);

// 2) Number
let tdNumber = 10;
tdNumber = 5;
console.log(tdNumber);

// 3) Booleano solo tiene dos valores verdadero o falso.
let tdBooleano = true;
tdBooleano = false;
console.log(tdBooleano);

// Operador para saber el tipo de dato que tiene una variable 
console.log(typeof tdString);
console.log(typeof tdNumber);
console.log(typeof tdBooleano),
*/
// INTERACCIÓN
/*
//Capturar algo que usuario escriba y dejarlo en una variable
let nombreU = prompt('ingresa tu nombre')
console.log(nombreU)
document.write(nombreU)
let edadU = prompt('ingresa tu edad')
console.log(edadU)
document.write(edadU)*/
/*
let nombre = prompt('nombre');
console.log(nombre);
let apellido = prompt('apellido');
console.log(apellido);
let edad = prompt('edad');
console.log(edad);
//Concatenar con + " " +
let nya = nombre + " " + apellido + " " + edad;
console.log(nya);
document.write(nya);*/
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
/*
const nom = 'pepita';
const apel = 'perez';

const nomApel = `${nom} y el appelido es ${apel}`
console.log(nomApel)*/

// CLASE 2/12 TEMA: ESTRUCTURAS DE CONTAL  SUBTEMA: CICLOS

/*
for (let i = 0; i < 4; i++){
    console.log(i)
}*/

/* let i = 0

while (i < 4) {
    i++ //si se incrementa presenta cambios para el control del ciclo aqui se le sumaria una unidad al último ciclo 
    console.log(i)
    i++ //es para determinar que el aumenta en una unidad pero no será tenido encuenta para la impresión
} */
/* 
//aumentar lo que se ve o el resultado de la consola
let i = 0

while (i < 4) {
    console.log(i +1)
    i++ //es para determinar que el aumenta en una unidad pero no será tenido encuenta para la impresión
} */
/*
//FUNCION DECLARADA

function miFuncionSinParametros() {
  console.log("hola");
}
miFuncionSinParametros();*/

