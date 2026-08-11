import React from 'react'

const LogicalAndOperation = () => {
    function A() { console.log('A'); return false; }
    function B() { console.log('B'); return true; }
    function C() { console.log('C'); return 5; }
    function D() { console.log('D'); return 2; }

    // console.log(5>0 && 3>0)// true as both conditions are true
    // console.log(5>10 && 3>0)// false as first condition false

    // console.log(5>10 || 3>0)// true as one condition is true
    // console.log(C()>D()) //C,D,True
    // console.log(undefined || B() || A()) // B as that returns true
    
    console.log((C() > D()) && (undefined || B() || A()));

    //a) B,C,D,true
    //b) B,true
    //c) C,D,B,true => correct answer
    //d) C,B

    //Logical OR || 
    //true if one or more operands is true
    //typically used with boolean(logical) values and returns
    //  a Boolean value.
    //it returns value of one of the specified operands, 
    // so if used with non-Boolean values, it will return a 
    // non-boolean value.

    //Logical AND (&&)
    // true if and only if all the operands are true. 
    // otherwise it will be false.

    return (
        <div>

        </div>
    )
}

export default LogicalAndOperation
