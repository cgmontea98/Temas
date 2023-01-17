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

        //Cambio de pos y reemplaza elemento
            console.log(girls);
            console.log(girls.copyWithin(2));
            console.log(girls.copyWithin(1, 2));
        
        //Acceder y muestra un iterador FORIN
            const resultado = girls.entries();
            console.log(resultado);
            console.log(girls.entries());
            for (const i of resultado){
                console.log(i);
                console.log(i instanceof Array);
            }

        //Evaluar si cumplen una condicion
            function esmayor(numero){
                return numero > 18
            }
            console.log(esmayor(18));
            console.log(esmayor(58));

            const numeros = [10, 20, 30];
            console.log(numeros);
            const numeroM = [100, 200, 300];
            console.log(numeroM);

            console.log(numeros.every(esmayor));
            console.log(numeroM.every(esmayor));
        
        //Cambio de todas las posiciones, reescribe todo.
            console.log(girls);
            console.log(girls.fill('nada'));
            console.log(girls);

        //filtre & find
            const menos18 = [14, 15, 16, 17];
            const mas18 = [19, 20, 21, 22];
            const nums = [14, 15, 16, 17, 18, 19, 20, 21, 22];
            console.log(nums.filter(esmayor));
            console.log(nums.filter( (verificarE) => verificarE <= 18));

            console.log(nums.find(esmayor));

        //ForEach
            /* console.log(nums.forEach( (elemento) => console.log(elemento))); */
            const forE = [1, 2, 3, 4]
            console.log(forE);
            let res = 0;
            console.log(res);
            forE.forEach((elemento) => res += elemento);
            console.log(res);
            
        //String
            const str = 'Hola, soy un string';
            console.log(str);
            const modStr =  Array.from(str);
            console.log(modStr);
        
        //includes
            console.log(nums.includes(15));
            console.log(nums.includes(150));

        //indexOf solo recibe un parametro no dos.
            console.log(nums.indexOf(18));
            console.log(nums.indexOf(18, 19));

        //saber si
            console.log(Array.isArray(nums));
            console.log(Array.isArray(str));
            console.log(Array.isArray(modStr));

        //ARR A STR
            console.log(girls.join());
            console.log(girls.join(', '));

        //keys
            const retorno = nums.keys();
            console.log(retorno);
            for (const i of retorno){
                console.log(i);
            }
            
        //Buscar repiticiones
            const arryAny = [1, 'hola', '2', 'one', 'one', true, false, [], {}]
            console.log(arryAny);
            console.log(arryAny.lastIndexOf('one'));

        //recorre todo el array y si cumple retorna true o flaso pero en todo
            console.log(nums);
            console.log(nums.map(esmayor));
        
        //pop retorna el ultimo elemento y lo quita
            console.log(nums);
            console.log(nums.pop());
            console.log(nums);
        
        //shift cambia y elimina el primero
            console.log(nums);
            console.log(nums.shift());
            console.log(nums);
        //push agrega elemento al final del array
            console.log(nums);
            console.log(nums.push(23));
            console.log(nums);

        //REDUCE MUCHO OJO CON ESO
            const pares = [2, 4, 6, 8];
            const impares = [1, 3, 5, 9];
            console.log(pares);

            console.log(pares.reduce((total, actual) => total - actual));
        
        //Orden de los valores; cambia de una vez el arreglo
            console.log(pares);
            console.log(pares.reverse());
            console.log(pares);
        
        //SLIDE nuevo arreglo de inicio y fin omite lo que este antes despues y no incluye el indice
            console.log(nums);
            console.log(nums.slice(1, 3));
            console.log(nums);

        //some
            console.log(nums);
            console.log(nums.some(esmayor));    

        //sort ordena por orden ascendete y lo cambia
            const desorden = ['d', 'a', 'c', 'b', 2, 5, 4, 3, 1];
            console.log(desorden);
            console.log(desorden.sort());
            console.log(desorden);
            console.log(desorden.sort().reverse());

        //splice solo muestra nuevo arreglo de inicio de indice y final más lo que este
            console.log(nums);
            console.log(nums.splice(4, 9));
            console.log(nums);
            
        //devuelve string sin posibilidad de modificarse
            console.log(girls.toString());

        //unshift
            console.log(arryAny);
            console.log(arryAny.unshift('nuevo'));
            console.log(arryAny);