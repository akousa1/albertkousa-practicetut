import React from 'react'

const ArraySlice = () => {
    let arr = [1, 2, , 4, , 6];
    // console.log(arr.slice())// simply prints [1,2,empty,4,
    // empty, 6]


    console.log(arr.slice(undefined, 5)); //[1,2,empty,4,empty]
    //only shows values within range of start and end being 
    // arr[0] and arr.length in this case

    let arr1 = arr.slice(3, 6); //arr[3] start, arr.length = 6
    //  end
    console.log(arr1) //[4, empty, 6]

    // console.log(arr.length)//5

    //start is undefined is still considered as 0
    //Array: enables storing a collection of multiple items 
    // under a single variable name.

    //slice()
    //returns a shallow copy of a portion of an array into a
    //  new array object
    //selected from start to end (end not included)
    //wont modify will not be modified

    //syntax
    //slice(start,end) //start to array.length
    return (
        <div>

        </div>
    )
}

export default ArraySlice
