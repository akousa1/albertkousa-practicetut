import React from 'react'

const Challenge9 = () => {
    function print(x) {
        if (x <= 1) {
            print(x + 1)
            console.log("x in if block is " + x);
        } else if (x >= 1000000000000) {
            console.log("x in else if block is " + x)
        }
        print(x + 1) //contunuously calling this print method
    }
    print(0);

    //expected output: 
    //a) x in if block is 0
    //b) x in if block is 1
    //c) x in else if block is 100000000000
    //d) RangeError: Maximum call stack size exceeded

    //My Answer: b) x in if block is 1
    //Actual Answer: D) Maximum call stack size exceeded

    //Reason for answer: as the print(x+1) outside the if and
    //  else if block is constantly being called, most likely
    //  between 1 an 100000000000 times, it causes an error 
    // due to there being a limit on how many times it can 
    // be called 

    //This JavaScript exception "Maximu call stack size 
    // exceeded" occurs when there are too many function 
    // calls or for a recursive function (one with an
    //  infinite loop)
    return (
        <div>

        </div>
    )
}

export default Challenge9
