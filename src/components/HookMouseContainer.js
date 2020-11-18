import React, {useState, useEffect} from 'react'
import HookMouse from './HookMouse'

function HookMouseContainer() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay(!display)}>toggle mouse</button>
            { display && <HookMouse /> }
        </div>
    )
}

export default HookMouseContainer
