const hola = 'Hola, DEVS'; //Primera y segunda forna de Strings '' y ""
const holaTemplate = `Hola, DEVS`; //Segunda forma, backtips ``
const holaObj = new String('Hola, DEVS'); //tercera forma creando un array de string
const woman = 'Pepita'
const firstName = "Pepita"
const lastName = "Pérez"
const man = 'Pepito'
const hello = 'Hello, DEVS'
const holas = 'hola, hola, hola, hola, qué más'
const espacios = "     Hola    "
/* console.log(hola);
console.log(typeof hola);
console.log(holaTemplate)
console.log(typeof hola)
console.log(holaObj)
console.log(typeof Obj) 
*/

/* //Primer método que afectan únicamente a string
//Se puede acceder al String desde el indice ubicado dentro de un array, ej: nombVar[#posicion] o tambien por la información de longitud .length
console.log(hola.at(2)); //at recibe una posicion y muestra lo que retorna también funciona con el .lenth -1 para la última posicionn o sin usar el -1 entre el ultimo caracter
 */

/* // Sgundo
console.log(hola.charAt(2)); //.charAt no se comporta con at que admite -1; admite posicion exacta al igual que un array o usando .length
 */

/* // Tercero
console.log(hola.charCodeAt(7)); //Usado en la ASCII y se debe de ubicar dentro de la misma pero es un código de la tabla
 */

/* // Cuarto, para concatener string
console.log(firstName + " " + lastName) //concatenación con + " "
console.log(`${firstName} ${lastName}`) //concatenacion con backtips
console.log(firstName.concat(" ", lastName)) //uso de método y dentro de los parametros usa los string y se agrega información */

/* // Quinto
console.log(hola.endsWith('DEVS')) //Si yo le paso el ultimo caracter me respondera o depende de la posicion que se le indique
console.log(hola.endsWith('hola')) //Reucerde solo funciona para posiciones finales, compra y coincidencia retorna booleano*/

/* // Sexto
console.log(hola.includes(', ')) //Si incluye palabra dentro de la cadena, retorna booleano
console.log(hola.includes('!')) //No contiene */

/* // Séptimo
console.log(hola.indexOf('h')) // busca repeticiones, coincidencia o incidencias */

/* // Octavo
console.log(hola.lastIndexOf('')); //reportar la coincidencia y busca repeticiones y solo muestra es la ultima coincidencia nomuestra todas */

/* // Noveno
console.log(woman.localeCompare(firstName)); //comparación entre variables
console.log(woman.localeCompare(lastName)); //si son iguales 0 sino -1
console.log(man.localeCompare(woman)); //diferencia por orden alfabético o de la posicion a es > que e 
 */

/* // Decimo
console.log(hello.match('ola')); //busqueda de coincidencias estrictas, null porque no hay =
console.log(hola.match('ola')); //retorno coincidencia dentro de un []
console.log(holas.match('ola')); 
console.log(holas.matchAll('ola')); //expresionesregulares
 */

/* //  Undécimo
console.log(holas.repeat(4)); //se repite string por cantidad de veces */ 

/* // Duodécimo
console.log(hola.replace('DEVS', 'Desarroladores')); //remplazar primer param el que existe el segundo el reemplazo
 */

/* // Decimotercero
console.log(hola);
console.log(hola.search(', ')); //busca posiciones y muestra posicion en # */

/* // Decimocuarto
console.log(hola.slice(5)); //hace un corte y retorna l que hay despues */

/* // Decinoquinto
console.log(hola.split()); //recibe dos valores; con las "" lo muestra como array. Retorno array.  Si hay param corta y muestra todo menos el param, tambien retorna array*/ 

/* // Decimosexto
console.log(hola.substring(6, 9)); //solo muestra param de inicio y de fin establecido por uno */

/* // Decimonoveno
console.log(man);
console.log(man.toLowerCase()); //todo en miniscula
console.log(man.toUpperCase()); //todo en mayuscula */

/* // Vigésimo
console.log(espacios);
console.log(espacios.trim()); //quita todo los espaciados
console.log(espacios.trimStart()); //quita todo los espaciados antes de iniciar a escribir
console.log(espacios.trimEnd()); //quita todo los espaciados después de escribir */

/* // 21
console.log(holaObj);
console.log(typeof holaObj)
console.log(holaObj.valueOf()); */

//Ejercicio de métodos String: página de logIn... aplicando lo de hoy
const userValida = {
    usuario: 'pepita',
    passwoord: 'pérez'
}

const $form = document.getElementById('form');

$form.addEventListener('submit', (event) => {
    //prevenir efecto del boton
    event.preventDefault();
    //traer del html los elementos
    const $usu = document.getElementById('usuario');
    const $contra = document.getElementById('pass');
    const $check = document.getElementById('tc')
    //extraer de los elementos los valores
    const usu =  $usu.value;
    const contra = $contra.value;
    const check = $check.checked;

    if(usu === userValida.usuario && contra === userValida.passwoord && check === true){
        alert('Bienvenida')    
    }else{
        alert('rata')
    }
    console.log(usu, contra, check)
})





















