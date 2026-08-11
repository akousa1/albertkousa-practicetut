import React from 'react'

const Challenge5 = () => {
    //Question guess the output with reason 

    const intArray = [1,2,3];
    console.log(intArray.length); //3 

    intArray[50] = 50;
    console.log(intArray); //51
    console.log(intArray.length); //51

    //Options: a:3 b: 4 c: 51 d: 50
    //Answer = c as it will fill in all values between 
    // intArr[2] and intArr[50] with empty values hence it will make
    //  the length 51
  return (
    <div>
      
    </div>
  )
}

export default Challenge5
