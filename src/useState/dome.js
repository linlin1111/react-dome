import React, { useState } from 'react'
import { data } from './data'
import './dome.css'
import Car from './car'

export default function Dome() {
    let [users, setusers] = useState(data)
    const triggerDel = (id) => {
        console.log(id)
        setusers((oldVal) => {
            return oldVal.filter(i => i.id !== id)
        })
    }
    const fclick = (prop) => {
        console.log(prop)
    }
    return (
        <React.Fragment>
            {users.map(i => {
                return (
                    <div key={i.id} className="item">
                        <p>{i.name}</p>
                        <button onClick={() => { triggerDel(i.id) }}>del</button>
                    </div>
                )

            })}
            <Car click={fclick}></Car>
        </React.Fragment>
    )
}
