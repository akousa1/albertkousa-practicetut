import React from 'react'

const FunctionFunc = () => {
    function func([x = 1, y = 2] = []) {
        console.log(x + y)
    }

    func([], [2, 3]) //[2,3] will override x and y hence 
    // x = 2 and y =3 usually but as [] is in front, it will 
    // override this and x and y will be 1 and 2 respectively

    //a) syntax error: only 1 parameter expected
    //b) 3 => correct answer
    //c) 5
    //d) 8

    //default function parameter
    //- allow named parameters to be initialized with default
    //  values if no value or undefined is passed.
    //- can be applied with destructured parameters
    return (
        <div>

        </div>
    )
}

export default FunctionFunc
