import React from 'react'

const Challenge18 = () => {
    const obj = {
        name:{}
    }; //created object with one property being
    //  name which is an empty object

    Object.freeze(obj); //prevents modifications to obj itself meaning
    //No new properties can be added.
    //Existing properties cannot be removed or 
    // reassigned.
    //Existing properties cannot be reconfigured 
    // (e.g., making them writable or changing 
    // descriptors).

    //Object.freeze(obj) only applies shallowly, 
    // meaning it does not freeze nested objects 
    // like obj.name
    // obj.name="something" //will through error
    obj.name.firstName="Test";
    //even though obj is frozen, its nested value 
    // obj.name is still mutable and hence adds 
    // .firstname into name object and makes it 
    // equal "Test"
    console.log(obj.name.firstName) //Test


  return (
    <div>
      
    </div>
  )
}

export default Challenge18
