import React, { useState, useEffect } from 'react'

function HookUseEffectOne() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('use effects')
        document.title = `your click ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click {count} times</button>
        </div>
    )
}

export default HookUseEffectOne
