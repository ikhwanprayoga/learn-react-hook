import React, { useState } from 'react'

function HookArray() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10 + 1)
            }
        ])
    }

    return (
        <div>
            <button onClick={addItem}>add item</button>
            <button onClick={() => {setItems([])}}>reset items</button>
            <p>length items: {items.length}</p>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HookArray
