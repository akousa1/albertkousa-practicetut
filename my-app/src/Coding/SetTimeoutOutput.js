import React from 'react'

const SetTimeoutOutput = () => {
    setTimeout(() => { console.log("string1"); }, "1000") 
    // will convert delay string to number hence 1000 ms = 1s
    setTimeout(() => { console.log("string2"); }, "1 second");
    // isnt able to convert this string to number hence will 
    // equal 0 delay
    setTimeout(() => { console.log("number"); }, 1000) 
    // will work as normal with 1000ms equally delay of 1s

    //a) Type error: timeout cannot be of type string
    //b) string1,string2,number
    //c) number
    //d) string2,string1,number => my answer is correct

    //reason why is because string2 setTimout delay is automatically
    //  set as 0 as it cant convert "1 second" to number hence 
    // has to make it 0, other 2 timeouts delay 1 second hence 
    // will appear after.

    //setTimeout: 
    // - Global Method
    // -any other function running without setTimeout will
    //  likely execute first
    // - sets a timer that executes a function or specified 
    // piece of code once the timer expires.
    // - asynchronous function
    // - macrotask
    // - Non-number delay values are silently coerced into numbers

    return (
        <div>

        </div>
    )
}

export default SetTimeoutOutput
