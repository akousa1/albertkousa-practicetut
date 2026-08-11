import React from 'react'

const Challenge1 = () => {
    var x = Math.floor(Math.random());
    if (x > 0.5) {
        var x = 1;
    } else {
        // let x = 2; //will cause x = 0 as it can be reached here as
        //  let is not accessible outside block.
        var x = 2; // will override 
        // global scope if condition met
    }
    //var is global scope, hence will be able to be accessed outside block scope
    // console.log(Math.floor(0.99))// 0 as Math.floor will 
    // convert 0.99 to less then or equal to that i.e 0

    console.log(x); //2 as Math.floor will convert random 
    // variable between 1 and 0 to 0 and 0<0.5 hence x =2
    return (
        <div>

        </div>
    )
}

export default Challenge1
