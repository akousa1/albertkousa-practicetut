import React from 'react'

const Challenge12 = () => {
    const arr = Array(2).fill({}); // [{},{}]
    arr[1].product = "laptop" // product becomes key and 
    // laptop becomes value
    console.log(arr) // [{product:laptop}: {product:laptop}]

    //My Answer: [{product:laptop}: {product:laptop}]
    // Actual Answer: [{product:laptop}: {product:laptop}]

    //fill method changes all array elements to a static value based on stand and end index value.
    //start = 0, end: arr.length
    //returns modified array 

    //if first parameter is object, each slot in array will 
    // reference that object, fill method will fill empty 
    // slots in array with value as well.
    return (
        <div>

        </div>
    )
}

export default Challenge12
