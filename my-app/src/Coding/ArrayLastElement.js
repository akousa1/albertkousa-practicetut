import React from 'react'

const Challenge8 = () => {
    //Question 1 find last element of an array without
  //  length property
  const arr = ["white", "red", "black", "yellow"];
  console.log(arr.at(-1))//yellow

  arr.push('green');
    console.log(arr.at(-1))//green

    //best to use arr.at(-1) as that always finds the last element
    //  in array not matter how many are added
  return (
    <div>
      
    </div>
  )
}

export default Challenge8
