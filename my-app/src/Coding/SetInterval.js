import React from 'react'

const SetInterval = () => {
    const interval = setInterval(cb, 0, 'first', 'second');
    console.log(typeof (interval)); //number

    function cb(a, b) {
        console.log(a);
        console.log(b);
        clearInterval(interval);
    }

    console.log(typeof (interval))

    //a) number, number
    //b) number, number, first, second => correct answer
    //c) number, first, second, undefined
    //d) Range error: max call stack extended

    //setInterval()
    // - global method
    // - repeatedly calls a function or executes a code with
    //  a fixed time delay between each call.

    //Syntax
    // setInterval(func, delay, arg0, arg1, /* --,*/ argN)

    //clearInterval()
    // - used to clear the setInterva;
    return (
        <div>

        </div>
    )
}

export default SetInterval
