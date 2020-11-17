import React, { useState } from 'react'

function HookCounterTwo() {
    const initialState = 0
    const [count, setCount] = useState(initialState) 

    const increamentFive = () => {
        console.log('preve', )
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
            // console.log('prevcount', prevCount)
        }
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={increamentFive}>Increment 5x</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
        </div>
    )
}

export default HookCounterTwo
