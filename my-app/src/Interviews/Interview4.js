import React from 'react'

const Interview4 = () => {
    myFun();
    var myFun = function () { //function expression
        console.log("i am the first")
    }
    myFun();

    function myFun() { //function declaration
        console.log("i am second")
    }
    myFun();

    // Answer
    //I am second
    //I am first
    //I am first

    //The reason: Hoisting in Javascript involves doing so
    //  with the full definition of a function declaration
    //  whilst only hoisting the variable declaration and not
    //  its assignment hence will execute the function first 
    // and then the variable.

    //Can add javaScript globally in React js applications:
    //it is inbuilt into react applications via public 
    // index.html and can use useeffect to make things
    //  execute on run

    //Ternary operator example will print code based on 
    // whether the condition is met and if its not will 
    // print something else
    var a = 8;
    var b = 9;

    a > b ? console.log("false") : console.log("true") //true

    //first order function: A function that does not take 
    // another function as an argument and does not return 
    // a function.
    function greet(name) {
        return 'Hello, ' + name;
    }

    console.log(greet('Alice')); // Output: Hello, Alice

    //Higher-order function: A function that takes one or 
    // more functions as arguments or returns a function 
    // as its result. E.g.
    function shout(fn) {
        return function (name) {
            return fn(name).toUpperCase() + '!!!';
        };
    }

    const greet1 = (name) => 'Hello, ' + name;
    const excitedGreet = shout(greet1);

    console.log(excitedGreet('Bob')); // Output: HELLO, BOB!!!

    //es6 things
    //=== operators
    //array destructuring: .map and .filter
    // spread operator
    //NaN

    //Difference between normal function and arrow function:
    // Normal function is global scope due to hoisting
    //  whilst arrow functions cannot meaning they cannot
    //  be called before they are declared while functions
    //  can

    const arr = [1, 2, 3, 4];
    //arr.splice will take from the inputs of the array 
    // being their positions in said array writing a new 
    // array with the result showing only values in said
    //  position range being the values that were removed
    console.log(arr.splice(1, 3))
    //this will print arr[1-3] leaving arr[0] meaning it 
    // will get [2,3,4]

    //Lexical scope: if you have a function and another
    //  function within, any variable declared within the 
    // parent function will be available for use in the 
    // child function.

    //Asynchronous operations handling
    //1. promises: represent the eventual completion of an 
    // asynchronous operation using resolve if condition is
    //  met executing the code and reject if it isnt met 
    // and will return an error

    //2. async/await: async converts a function into an 
    // asynchronous one automatically returning a promise 
    // which will either succeed or fail determining its 
    // result. 
    // Await is required with async to wait for 
    // the result of the async function promise then 
    // execute when queue is empty e.g. when making api 
    // call it can be used to execute if/when api call is 
    // successfull. e.g.

    var asyncExample = async function () {
        await console.log("my fun is now") //will execute 
        // once queue is empty
    }
    asyncExample(); //My fun is now

    //convert json to string using JSON.stringify
    //convert string into object using JSON.parse
    //array methods:

    //-	.push(item) → Adds an item to the end and returns the new length.
    // let arr = [1, 2, 3];
    // arr.push(4); // → arr is now [1, 2, 3, 4]


    //find: -Returns the first matching item (or undefined
    //  if none found).
    //[1, 2, 3, 4].find(num => num > 2); // → 3

    //pop:→ Removes and returns the last item.
    //let arr = [1, 2, 3];
    //arr.pop (); // → 3 (arr is now [1, 2])

    //findIndex:→ Returns the index of the first matching item (or -1 if not found).
    //[1, 2, 3, 4].findIndex(num => num > 2); // → 2

    //-	.shift() → Removes and returns the first item.
    // let arr = [1, 2, 3];
    // arr.shift(); // → 1 (arr is now [2, 3])


    //-	.unshift(item) → Adds an item to the start and returns the new length.
    // let arr = [2, 3];
    // arr.unshift(1); // → arr is now [1, 2, 3]

    //some: returns true is at least 1 item meets condition
    //-	[1, 2, 3, 4].some(num => num > 3); // → true

    //every -	→ Returns true if all items meet the condition.
    //[1, 2, 3, 4].every(num => num > 0); // → true

    // local storage will store data onto our device on the 
    // application layer and will not go away even if page 
    // refresh or close browser only manually by developer 
    // whilst session storage will store data like a cookie
    //  which will remove automatically on browser close

    //data types: 
    // boolean, number, string, 
    // object(non primitive), array(non primitive)

    //retrieve character from certain string what to use?
    //charAt(index) e.g.
    let str = "hello";
    let char = str.charAt(1); // 'e' as it has an index of 
    // each letter starting with 0 and 'e' is str[1] hence 
    // will be printed
    console.log(char)

    //Undeclared vs undefined variables: Undeclared variable
    //  is a variable that has never been declared in the 
    // scope and accessing it throws a ReferenceError, while
    //  undefined variable is a declared variable that hasn't 
    // been assigned a value yet.
    //Undefined
    let x;
    console.log(x); // ➡️ undefined

    //Undeclared:
    // console.log(y); // ❌ ReferenceError: y is not defined

    //Temporal deadzone: where the variable value cannot be
    //  accessed e.g.
    const fun =()=> {

        const val = 8;

    }
    return (
        <div>

        </div>
    )
}

export default Interview4
