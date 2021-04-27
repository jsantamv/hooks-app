import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [{ counter1, counter2 }, setcounter] = useState({
        counter1: 10,
        counter2: 20
    })


    return (
        <div>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>

            <button className="btn btn-primary"
                onClick={() => {
                    setcounter(counter1 + 1)
                }}
            >+1</button>
        </div>
    )
}
