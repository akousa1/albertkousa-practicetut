import React from 'react'

const VariableObjectGreeting = () => {
    var greeting = "understanding this keyword!";

    const obj = {
        greeting: "hello world",

        getGreeting(greeting) {
            var greeting = "hello india";
            console.log(this)
            return this.greeting;
        }
    }
    // console.log(this); //object

    // obj.getGreeting("welcome to javascript"); 
    // will return 'hello world'

    console.log(obj.getGreeting("welcome to javascript"));

    //a)Hello world => correct as 'hello world' is the 
    // initial value called by the return this.greeting in
    //  getGreeting hence will override 'welcome to javascript'

    //b)Hello india => wrong as value is
    //  declared but never read

    //c)Welcome to javascript => overridden by Hello World

    //d)understanding this keyword! => wrong as value is
    //  declared but never read

    //this keyword
    //object
    // value depends on context were it has been invoked
    return (
        <div>

        </div>
    )
}

export default VariableObjectGreeting
