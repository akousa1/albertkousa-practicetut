import React from 'react'

const AsyncFunc = () => {
    async function async1() {
        setTimeout(() => {
            console.log('async1')
        }, 0); //will print straight away as will print 0 ms 
        // from function call
    }

    async function async2() {
        console.log('start'); //will always print first
        await async1(); //makes sure it will wait until 
        // call stack is empty to execute so after console 
        // log 'start' and 'end'.
        console.log('end') //will print 2nd for above reason
    }
    async2();

    //a)start, async1, end => my answer
    //b)start, end, async1 => correct answer
    //c) start, end
    //d)start, async1
    return (
        <div>

        </div>
    )
}

export default AsyncFunc
