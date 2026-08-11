import React from 'react'

const Challenge7 = () => {
  //guess array.from output with reason

  const res = Array.from({ length: 10 }, (_, i) => i);
  console.log(res); // this will create a new array of 10
  //  numbers from 0-10

//Options
//a: undefined
//b: Type error
//c:  fn() {({length: 10}, (v,1) => i)}
//d: [0,1,2,3,4,5,6,7,8,9]

//Expected answer: d: [0,1,2,3,4,5,6,7,8,9]
//Actual Answer: d: [0,1,2,3,4,5,6,7,8,9]

// 1) Array.from() lets you create Arrays from:
// iterable objects such as fromn Map and Set or 
// if the object is not iterable

// 2) array-like objects (objects with a 
// lengthy property and indexed elements).


return (
  <div>

  </div>
)
}

export default Challenge7
