import React from 'react'

const Interview1 = () => {
  const numbers = [1, 2, 3, 4];

  const abc = numbers.map(item => item = 2);
  // Map Method high order functions cycles through elements in
  //  an array allowing them to be modified 
  // and/or displayed returning a new array with said new values
  // console.log(abc)// 2,2,2,2

  const abcd = numbers.filter(item => item = 2);
  // console.log(abcd)// 1,2,3,4
  //This is because using = is an assignment instead 
  // of === being a comparison and as 2 is truthy,
  //  .filter keeps every element in array not filtering
  //  anything and returning the original elements.

  const abcde = numbers.reduce(item => item = 2);
  //console.log(abcde)// 2
  //reason for this is because reduce combines all 
  // array items into one based on the condition so as
  //  item = 2, the answer will be 2

  //Async/Await creates an Asyncronous function with 
  // Async Declares a function as asynchronous, 
  // automatically returning a promise and await 
  // pausing execution until promise resolves.

  //  Promises represent the eventual result of an 
  // asynchronous function either success or failure with
  //  it having .catch to deal with if it is successfull 
  // and .catch  for any errors if it fails

  //Promises better as it can handle multiple callbacks

  // easiest way to create JSON file:
  //  creating a file with .json and entering key/value 
  // pairs within curly ({}) braces

  //can convert javascript objects to json using things like .parse and .stringify
  //e.g
  let obj = { message: "hi there" };
  let jsonStr = JSON.stringify(obj); // Convert object to JSON string
  let jsonObj = JSON.parse(jsonStr); // Convert JSON string back to object
  //console.log(jsonObj); // → { message: "hi there" }

  // temporal deadzone:  is the period between when a let
  //  or const variable is hoisted and when it is 
  // initialized, during which accessing it causes a
  //  ReferenceError.

  var a = 10;
  //console.log(a++) //10
  //console.log(a)// 11
  //console.log(typeof(NAN))//undefined

  //Local storage stores data into user memory like 
  // session storage but will delete all data after 
  // browser close whilst local will delete after 
  // certain time period or manually by user.


  return (
    <div>

    </div>
  )
}

export default Interview1
