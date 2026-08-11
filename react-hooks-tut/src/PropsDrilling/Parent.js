import React from 'react'
import Child from './Child'
import { useState } from 'react';

const Parent = () => {
    const [user] = useState({name:"john", age: 30})

  return (
    <div>
      <h1>Parent</h1>
      <Child user = {user} />
    </div>
  )
}

export default Parent
