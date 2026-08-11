import React from 'react'

const MathSqrtCodeoutput = () => {
    let num1 = Math.sqrt(-9);
    let num2 = Math.sqrt(9);

    // console.log(num1)// NaN
    // console.log(num2)// 3

    console.log(num1+num2) //NaN (NaN +number will always be NaN)
    if(num1 + num2 >= 0) {
        console.log('Positive Value');
    } else if(num1 + num2 < 0){
        console.log('Negative Value');
    } else {
        console.log('not number value'); //This is printed
    }


    //Math is a built in object that has properties and methods
    //  for mathematical constants and functions.

    //Math.sqrt()
    // returns the square root of a number

    //return value
    //the square root of x, a non-negative number
    return (
        <div>

        </div>
    )
}

export default MathSqrtCodeoutput
