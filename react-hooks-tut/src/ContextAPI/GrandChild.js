import React, {useContext} from 'react'
import { UserContext } from './UserContext'
const GrandChild = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>GrandChild</h1>
      <p>Hello {user.name}, you are {user.age} years old</p>
    </div>
  )
}

export default GrandChild
