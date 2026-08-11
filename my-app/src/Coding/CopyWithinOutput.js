import React from 'react'

const Challenge15 = () => {
    //question: split array into individual words
    const arr1 = ["I want to become", "a professional front end", "developer"];

    //expected output: ["I","want","to", "become", "a", "professional", "front", "end", "developer"]

    const splitArr = arr1.flatMap(arr => arr.split(' '));
    console.log(splitArr) //gets expected output

    //Reason: the .split method is what takes the 
    // big strings and splits them into their 
    // respective words however splitting the 
    // array into 3. This is why .flatMap is used
    //  to flatten the array of split strings so 
    // that it stays in the same array but is 
    // still mapped in a single new array or 
    // split strings not multiple.
    return (
        <div>

        </div>
    )
}

export default Challenge15
