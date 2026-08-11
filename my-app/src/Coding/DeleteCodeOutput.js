import React from 'react'

const Challenge17 = () => {
    delete console.log(1); // console log will 
    // not be deleted as that only removes 
    // properties and console.log isnt a property 
    // hence it will print 1
    {
        let name = "javascript" //declares block 
        // scope variable name
        // delete name; //name is block scope
        // variable not property hence delete 
        // fails and returns false whilst in 
        // strct mode it will show error
        console.log(name) //will still print name
        //  as "javascript" as it wasnt deleted
    }

    //answer: 1,javascript
  return (
    <div>
      
    </div>
  )
}

export default Challenge17
