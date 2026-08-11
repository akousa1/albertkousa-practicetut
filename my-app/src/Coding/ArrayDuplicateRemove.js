import React from 'react'

const Challenge4 = () => {
    //question 1 remove duplicates from array 
    const arr = [2, 3, 4, 5, 3, 8,5, 2, 11];
    const strArr = ['Mike', 'John', 'Nancy', 'Mike', 'Nancy'];

    //To do this we use the Set operator which are collections
    //  of values. A value in a Set may only occur once; 
    // unique in Set collection.

    const resultArr = [...new Set(arr)];
    console.log(resultArr); //[2,3,4,5,8,11] now all 
    // duplicates are removed

    const resultStrArr = [...new Set(strArr)];
    console.log(resultStrArr) // ["Mike","John", "Nancy"];

    
    return (
        <div>

        </div>
    )
}

export default Challenge4
