import React from 'react'

const Interview6 = () => {
  //2 ways for making array objects
  let arr = [1, 2, 3];
  let arr1 = new Array(1, 2, 3);

  // console.log(arr.indexOf(3)); //locating value at 3rd 
  // position of array
  // arr.push(4);// Pushing value to end of array
  // console.log(arr)
  // arr.unshift(2) // will add 2 to start of array
  // console.log(arr)
  // arr.length = 0; // will completely empty array
  // arr=[];
  // console.log(arr) 

  // let str="this is sujal";

  // function splitString(str){
  //  console.log(str.split(" ").join("\n"));
  //This will split string into its separate words and 
  // print 1 each line
  // }
  // splitString(str)

  // function demo(a, ...b){
  //   return [a,b]
  // }
  // console.log(demo(1,2,3,4)) //[1,[2,3,4]]
  //cant add any other variable after REST operator (...args)

  //ARRAY DESTRUCTURING
  let [a, b] = [1, 2, 3, 4];
  console.log(a, b) //1,2 (3 and 4 are not assigned)

  //Map method returns new array while foreach doesnt return
  //  anything while both loops into it
  let arr2 = [1, 2, 3, 4, 5, 6, 7];

  console.log(arr2.map((val) => val > 4)) //[false,false,
  // false,false,true,true,true] -returns true only to values
  //  > 4

  //NaN is not a number
  //e.g
  console.log(1 + undefined) //NaN as this wont return a number
  console.log(0%0) //NaN as this wont return a number

  // arr.find() will find first element of an array

  //bold tag
  return (
    <div>

    </div>
  )
}

export default Interview6
