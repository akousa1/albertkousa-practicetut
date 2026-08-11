import React, { useEffect, useLayoutEffect, useRef } from 'react'

const LayoutEffectTut = () => {
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []); //called before useeffect

    useEffect(()=>{
        inputRef.current.value = "Hello"
    },[])
    return (
        <div className='app'>
            <input 
            type="text"
            ref={inputRef}
            value="PEDRO"
            style={{width: 400, height:100}}
             />
        </div>
    )
}

export default LayoutEffectTut
