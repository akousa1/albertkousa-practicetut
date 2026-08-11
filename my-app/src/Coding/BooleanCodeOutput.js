import React from 'react'

const BooleanCodeOutput = () => {
    //Question: Find boolean output for below code 
    // (with reason)

    const falsy = new Boolean(false); //creates boolean object
    // console.log(falsy) //Boolean {false}
    // const truthy = Boolean(false)
    // console.log(truthy) // will only print false
    if (falsy) {
        if([]) console.log('Array [] is empty');
        if([] == false) console.log('Empty [] is compared with false');
    }

    //-Array [] is empty, no logs
    //-Array [] is empty, Empty [] is compared with false 
    //- No logs, empty [] is compared with false
    //- No logs, No logs

    // -Array [] is empty, Empty [] is compared with false 
    // => correct answer
    //Reason is because:
    // 1. falsy is Boolean object hence falsy is true or exists
    // 2. [] exists or is true hence will print specified log
    // 3.[] == false converts false into empty [] hence [] = []
    // and will print that log
    

    return (
        <div>

        </div>
    )
}

export default BooleanCodeOutput
