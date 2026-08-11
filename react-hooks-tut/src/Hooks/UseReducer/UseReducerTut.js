import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, ShowText: state.ShowText }
        case "toggleShowText":
            return { count: state.count, ShowText: !state.ShowText };
        default:
            return state;
    }
}
const UseReducerTut = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, ShowText: true })

    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT"});
                    dispatch({ type: "toggleShowText"});
                }}>
                click
            </button>
            {state.ShowText && <p>This is a text</p>}
        </div>
    )
}

export default UseReducerTut
