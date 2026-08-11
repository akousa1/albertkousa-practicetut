import React from 'react'

const ObjectIsCodeOutput = () => {
    //choose 1 object that returns false

    console.log(Object.is(NaN, NaN)) //true as both are NaN

    console.log(Object.is('Test', 'Test')); //true as both strings of same 
    // length, characters and order

    console.log(Object.is({a:1}, {a:1})); //false as 
    // objects are the same but in memory, location is 
    // different

    console.log(Object.is(undefined, undefined)) //true as
    //  both are same undefined 

    // Object.is Returns true if the values are the same 
    // value, false otherwise. not the same as == and === due to not
    //  coercing either value works with
    //- both undefined
    //- both null
    //- both true or both false
    //- both strings of the same length with the same characters
    //in the same order
    //- both the same object (meaning both values reference
    //  the same object in memory)
    // both NaN
    // both +0
    // both -0
    //both same object referencing the same memory

    return (
        <div>

        </div>
    )
}

export default ObjectIsCodeOutput
