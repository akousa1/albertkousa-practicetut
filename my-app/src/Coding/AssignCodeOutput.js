import React from 'react'

const Challenge19 = () => {
    const obj = Object.create(
        { subject: 'javascript' },
        { lesson: { value: 'Object Assign' } } //object.assign
        //will only copy lesson:Object Assign as thats own 
        // property. but as this is not enurable, it will 
        // return as false and return an empty object 
        // (can return property if enurable:true added)
    )
    //Object.create() method creates a new object, 
    // using an existing object as the prototype of 
    // the newly created object.
    console.log(obj) // will only show lesson:object Assign 
    // but will have will have subject:javascript in 
    // prototype

    const copy = Object.assign({}, obj)
    console.log(copy)



    //Object.Assign method copies all enumerable own 
    // properties from 1 or more source objects to target 
    // object. Returns Modified target object.
    return (
        <div>

        </div>
    )
}

export default Challenge19
