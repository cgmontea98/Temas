/*
//Pedir nombre y saludar

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

/* 
//Pedir nombre y edad al usuario: caso a) Pepita y mayor, ingresa a la sala 1; caso b) Pepita y es menor de edad, ingresa a sala 2; caso c) no se llama Pepita pero es mayor de edad sala 4

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

//Pedir un numero y mostrar multiplos de 2 desde 1 hasta número


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
