import React, { useState } from 'react'

const UseState = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter +1)
    }

    const decrement = () => {
        setCounter(counter -1)    }
    return (
        <div>
            <button
                onClick={increment}
            >
                +
            </button>
            {counter}
            <button
                onClick={decrement}
            >
                -
            </button>
        </div>
    )
}

export default UseState
