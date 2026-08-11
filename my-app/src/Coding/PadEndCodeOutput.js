import React from 'react'

const PadEndCodeOutput = () => {
    let str1 = "Learn";
    let str2 = "JavaScript";

    // let resul = str1.padEnd(6); // will display Learn with 
    // 1 spaces next to it to make the length 6
    // console.log(resul) // "Learn "

    // let resul = str2.padEnd(2); // will display full 
    // JavaScript string as length of padEnd is less than 
    // string length hence it stays the same
    // console.log(resul) // "JavaScript"

    console.log(str1.padEnd(6) + str2.padEnd(1)) 
    //answer: "Learn JavaScript"


    //padEnd: pads the current string with a given 
    // string(repeated , if needed) till resulting string
    //  reaches given length
    return (
        <div>

        </div>
    )
}

export default PadEndCodeOutput
