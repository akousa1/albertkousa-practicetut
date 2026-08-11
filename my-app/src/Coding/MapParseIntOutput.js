import React from 'react'

const Challenge13 = () => {
    //Question: find output of code of below code
    const result = ['1', '2', '3'].map(parseInt);
    //map => element, index, array
    // console.log(parseInt('1',0)) //1
    // console.log(parseInt('2',1)) // NaN
    // console.log(parseInt('3',2)) // NaN

    console.log(result); //[1,NaN, NaN]

    //Reason: As shown in my above working out the
    //parseInt function goes through each element
    // and index of the array and checks the result
    // hence for 1 it will be 1, for 2 it will be 
    //NaN and 3 it will be NaN giving [1,NaN, NaN]
    //as it is put into the 3rd condition of the map
    //  being the array


    //map() creates new array populated with results 
    // of calling a function on every element in the 
    // calling array.
    return (
        <div>

        </div>
    )
}

export default Challenge13
