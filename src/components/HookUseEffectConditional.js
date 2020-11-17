import React, { useState, useEffect } from 'react'

function HookUseEffectConditional() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('use effect update')
        document.title = `click ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={ e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>click {count} times</button>
        </div>
    )
}

export default HookUseEffectConditional
