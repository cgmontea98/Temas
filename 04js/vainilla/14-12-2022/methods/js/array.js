'use strict'

//Declaración
    //form1
        const vacio = [];
        console.log(vacio);

    //Forma 2: rápida, clara y sencilla
        const girls = ['ana', 'sophia', 'pepita'];
        console.log(girls);
        const boys = ['paco', 'lucas', 'pepito'];

    //Forma 3: hace una función >> Mét constructor
        const arrObj_Vacio = new Array();
        console.log(arrObj_Vacio);

        const arrObj = new Array('element1', 'element2', 'element3');
        console.log(arrObj);
//METODOS
    //Saber tipo 
        // typeof> arroja object 
            console.log(typeof girls);

        // instanceof > bool //Sirve para comparar
            console.log(arrObj instanceof Array);

    //Propiedad
        //Longuitud para elementos y posicion
            console.log(arrObj.length);
            console.log(vacio.length);

    //Posiciones
        console.log(arrObj[1]);
        
        //Fuera del rango, es igual a undf
            console.log(arrObj[4]);
            console.log(arrObj[-1]);

        //Ir al último elemento
            console.log(arrObj[arrObj.length - 3]);    
    
        //Concatenar
            console.log(girls.concat(boys));
