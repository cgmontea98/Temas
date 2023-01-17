"use strict";

/* console.log(window); */

//Declarar obj
const objetovacio = {};
/*  console.log(typeof objetovacio);
    console.log(objetovacio instanceof Object); */

const constructorObj = new Object({
  llave1: "valor1",
  llave2: "valor2",
});
/*  console.log(constructorObj); */

const objLiteral = {
  llave3: "valor3",
  llave4: "valor4",
};
/*   console.log(objLiteral); */

//Datos?
let person = {
  firstName: "pepita",
  lastName: "perez",
  id: 123,
  active: true,
  colors: ["white", "black"],
  sons: [
    {
      firstName: "pepa",
      lastName: "perez",
    },
    {
      firstName: "pepo",
      lastName: "perez",
    },
  ],
  job: null,
};
/* console.log(person);
console.log(person.id);
console.log(person['firstName']);
console.log(person.job);*/

person.job = "dev";
/* console.log(person.job);
console.log(person); */

const person2 = person; //la modf aplica para los dos obj por la apropiación... Aqui no asigna el valor como a = 1 y b = a; esto se diferencia a los objetos que dan REFERENCIAS
/* console.log(person2);
console.log(person === person2); */ //muestra que es igual

person2.job = "peri"; //se modifica en el segundo arreglo el job que esta en null o dev
/* console.log(person.job);
console.log(person);

console.log(person === person2); */ //muestra que es igual

for (const key in person){
    console.log('object:>> ', key);
}