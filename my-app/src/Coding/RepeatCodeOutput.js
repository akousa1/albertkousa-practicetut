import React from 'react'

const RepeatCodeOutput = () => {
    let str = '123';
    let result1 = str.repeat(0);
    console.log(result1) // Answer: "" - empty string as 
    // count = 0 length:0
    let result2 = str.repeat(3.5);
    console.log(result2) // Answer: 123123123 - will repeat 
    // str 3 times as only counts integer values so .5 is 
    // forgotten. Length: 9


    //Returns a String value that is made from count copies
    //  appended together. If count is 0, the empty string 
    // is returned. this containes specific number of
    //  concatenated strings

    console.log((result1 + result2).length);
    //would be ("" + "123123123") which will be 
    // 123123123. 123123123.length = 9 hence 9 is the answer
  return (
    <div>
      
    </div>
  )
}

export default RepeatCodeOutput
