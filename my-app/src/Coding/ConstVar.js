import React from 'react'

const ConstVar = () => {
    var a = 5;

    const x = (a) => {
        console.log(a)
        console.log(a)
    }

    const y = function (b) { console.log(b) }

    x(1);
    y(3);

    //a) 5,5,3
    //b) 1,1,3 => my answer correct
    //c) Syntax error, 5,3
    //d) 5,1,3


    return (
        <div>

        </div>
    )
}

export default ConstVar
