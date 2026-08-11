import React from 'react'

const VariableFunc = () => {
    var x = 'test';
    var y = function func() {
        console.log('func');
    }

    if(y) {
        x += typeof(y);
    }

    console.log(x)

    //answer c) testfunction
  return (
    <div>
      
    </div>
  )
}

export default VariableFunc
