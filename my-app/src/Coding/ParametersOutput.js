import React from 'react'

const ParametersOutput = () => {
    function f(a, b = () => console.log(a)) {
        var a = 1;
        console.log(a); //1
        b();
    };

    f(2); // 1,2

    //a) 1,2 => correct
    //b) 2,1
    //c)1,1
    //d) 2,2

    //default function parameters
    //allows named parameters to be initialized with default
    //  values if no value or undefined passed.

    return (
        <div>

        </div>
    )
}

export default ParametersOutput
