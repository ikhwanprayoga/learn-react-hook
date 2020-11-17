import React, { useState } from 'react'

function HookCounterThree() {
    const initialStateName = { 
        firstName: '', 
        lastName: '', 
        address: {
            vilage: '',
            street: ''
        }
    }
    const [name, setName] = useState(initialStateName)

    return (
        <form>
            Nama Depan: <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
            Nama Belakang: <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
            Desa: <input type="text" value={name.address.vilage} onChange={e => setName({...name, address : {...name.address, vilage: e.target.value}})} />
            Jalan: <input type="text" value={name.address.street} onChange={e => setName({...name, address: {...name.address, street: e.target.value}})} />
            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
            <h2>Vilage: {name.address.vilage}</h2>
            <h2>Street: {name.address.street}</h2>
            {JSON.stringify(name)}
        </form>
    )
}

export default HookCounterThree
