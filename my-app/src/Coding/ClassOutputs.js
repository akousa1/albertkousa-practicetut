import React from 'react'

const ClassOutputs = () => {
    class A {
        constructor() {
            console.log(new.target.name);
        }
    }
    class B extends A { }
    new A();
    new B();

    //a) referenceerror: name is not defined in new.target
    //b) A, A
    //c) A, B => correct
    //d) A

    // new.target
    // 1- pseudo-property - detects whether a function or 
    // constructor was called using the new operator
    // 2- In class constructors, it refers to the constructor 
    // that was directly invoked by new
    // 3- If the constructor is in a parent class and was
    //  delegated form a child constructor. new.target points
    //  to the class definition of class which is initialized

    //extends keyword
    //- used in class declaration or class expressions to
    //  create a class as a child of another class.
  return (
    <div>
      
    </div>
  )
}

export default ClassOutputs
