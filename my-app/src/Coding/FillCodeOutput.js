import React from 'react'

const Challenge11 = () => {
    //question: concatenate nested array

    const num1 = [[1], [2]];
    const num2 = [3, [4]]
    const num3 = 5;

    num1[0].push(num3); //will add 5 to num1 array
    console.log(num1) // [[1,5],[2]]
    const concatArr = num1.concat(num2) //concatenates (or 
    // combines num1 and num2 in new array)

    //Expected Output [[1,5], [2], 3, [4]]
    //concat() method is used to merge 2 or more arrays.
    // method doesnt change existing arrays, but instrad returns new array.
    console.log(concatArr)//[[1,5], [2], 3, [4]]
    return (
        <div>

        </div>
    )
}

export default Challenge11
