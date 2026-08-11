import React from 'react'

const GrandChild = ({user}) => {

  return (
    <div>
      <h1>GrandChild</h1>
      <p>Hi, my name is {user.name} and I am {user.age} years old</p>
    </div>
  )
}

export default GrandChild
