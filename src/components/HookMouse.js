import React, { useState, useEffect } from 'react'

function HookMouse() {
    var a = ''
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('use effect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('unmount called')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hook, X: {x}, Y: {y}
        </div>
    )
}

export default HookMouse
