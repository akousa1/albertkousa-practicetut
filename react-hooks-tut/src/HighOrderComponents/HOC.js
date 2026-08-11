import React from 'react'

const HOC = (WrappedComponent) => {
  return function EnhanceComponent(props) {
    console.log(`modifying: ${WrappedComponent} with new props`)
  
    return <WrappedComponent {...props} />
}
}

export default HOC
