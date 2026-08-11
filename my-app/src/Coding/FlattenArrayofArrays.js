import React from 'react'

const Challenge2 = () => {
    //Question 1: flatten an array of arrays
    let arr = [[0, 1], [2, 3], [4, 5]];

    //expected output: [0,1,2,3,4,5]
    const flattenedArr = arr.reduce(
        (prevVal, currentVal) => {
            return prevVal.concat(currentVal)
            //concat will combine the 2 arrays 
            // (prevVal and CurrentVal) into 1 new array 
            // without modifying existing array.
        }, [])
    console.log(flattenedArr, "flattened array")
    //prevVal will be the initial values e.g.[0,1] and
    //  current value will have the rest of the values which will
    //  concattenate the rest onto prevVal getting [0,1,2,3,4,5]
    //  in one array

    //Question 2 convert array into string
    const stringArr = arr.toString();
    console.log(stringArr, "stringified array") //0,1,2,3,4,5

    // Question 3 filter flattened array so it only returns 
    // values above 2
    const filterArr = flattenedArr.filter((arr)=> arr >2);
    console.log(filterArr, "filtered array") //[3,4,5,6]

    // Question 4 check flattened array to see if EVERY value 
    // is above 2 else return false

    const checkEveryVal = flattenedArr.every((num)=> num>2)
    console.log(checkEveryVal, "check every value") 
    // False as not every value is above 2
    //  as 0 and 1 are below 2

    // Question 5 check flattened array to see if SOME values 
    // are above 2 else return false

    const checkSomeVal = flattenedArr.some((num)=> num>2)
    console.log(checkSomeVal, "check some value") // true as 
    // 3,4,5,6 are above 2

    
    return (
        <div>

        </div>
    )
}

export default Challenge2
