import React from 'react'
import HOC from './HOC'

const HelloWorld = ({name}) => {
  return (
    <h1>Hello , {name}! </h1>
  )
}

const EnhancedHelloWorld =HOC(HelloWorld);

export default EnhancedHelloWorld;
