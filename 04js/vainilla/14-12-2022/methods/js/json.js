 'use strict'

/* //Cadena de strings de principio a fin incluido las keys
const jsonObj = {
    "name": "pepo",
   "ed": 23,
   "active": true,
   "children": ["pepita", "fulano"]
}
console.log(jsonObj);
//Cadena srtins solo para valores
const jsObj = {
    "name": "pepo",
   "ed": 23,
   "active": true,
   "children": ["pepita", "fulano"]
}
console.log(jsObj); */

const jsonString = '{"name": "pepita", "lastname": "perez"}';
console.log(jsonString);
console.log(typeof jsonString);
//acceder
console.log(jsonString.name);
console.log(jsonString['lastname']);

//DESERAILIZACION >> es tomar json y convertilo en objJs
const transJson = JSON.parse(jsonString);
console.log(transJson);
console.log(typeof transJson);
//acceder
console.log(transJson.name);
console.log(transJson['lastname']);

//SERIALIZACIÓN >> ObjJs aJSON inversion de lo anterior
const jsObj = {name: 'pepita', lastname: 'perez'};
console.log(jsObj);
console.log(typeof jsObj);

const jsAjson = JSON.stringify(jsObj);
console.log(jsAjson);
console.log(typeof jsAjson);
