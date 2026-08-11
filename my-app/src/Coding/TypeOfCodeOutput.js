import React from 'react'

const TypeOfCodeOutput = () => {
    const a = 5;
    const b = 2;

    //number being converted to binary
    console.log(a.toString(2)) //101
    //10100 converted to normal integer

    console.log(a << b); //20

    console.log(typeof (a << b)); //number

    //a * (2 ** b)
    //5 * (2 ** 2) = 5 * 4 = 20 (getting << value)

    //<< is a bitwise operator
    //works on data at the bit level
    //Left Shift(<<)
    //-Shifts first operand the specified number of bits,
    //  module 32, to the left.
    return (
        <div>

        </div>
    )
}

export default TypeOfCodeOutput
