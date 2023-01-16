'use strict'
//Forma de declarar 1
const vdd = true;
const fls = false;
console.log(vdd.valueOf());
console.log(vdd);

//Forma de declarar 2
    //Constructor
    const vObj = new Boolean(true);
    const fObj = new Boolean(false);
    console.log(fObj);
    console.log(vObj.valueOf());