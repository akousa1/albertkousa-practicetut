import React from 'react'

const Challenge14 = () => {
    //find elements that only exist once in array
    const arr = [1, 2, 3, 4, 5, 3, 2];
    const answer = arr.filter(item =>
        arr.indexOf(item) === arr.lastIndexOf(item)
    )
    //This filters through array checking for the 
    // first and last occurence of a value in an 
    // array checking if they return the same 
    // index (will only happen if they are the 
    // same number and arent a repetition), will
    //  be returned.
    
    console.log(answer) // [1,4,5]
    //Expected output: [1,4,5]

    // const result = [...new Set(arr)]
    // console.log(result)// [1,2,3,4,5] will remove duplicates from array 

    return (
        <div>

        </div>
    )
}

export default Challenge14
