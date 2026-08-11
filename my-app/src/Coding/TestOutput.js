import React from 'react'

const TestOutput = () => {
    // function test(x, x) {
    //     console.log(x + ' ' + x);
    // }
    // test(1, 2);

    // 'use strict'
    // function test(x, x) {
    //     console.log(x + ' ' + x);
    // }
    // test(3, 4);

    //a) SyntaxError: Duplicate parameter name not allowed in
    //  this context => correct
    //b) 1 2, 3 4
    //c) 1 1, 3 3
    //d) 2 2, 4 4
    //e) SyntaxError: Duplicate function name not allowed in
    //  this context

    //strict mode 
    // eliminates silent errors by changing them to throw 
    // errors. Fixes mistakes that make it difficult for JS 
    // engines to perform optimizations. can run faster than
    //  identical code thats not strict mode
  return (
    <div>
      
    </div>
  )
}

export default TestOutput
