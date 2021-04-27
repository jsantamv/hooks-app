import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 40,
        counter4: 80,
        counter5: 100,
    })

    const { counter2, counter1 } = state

    return (
        <div>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>

            <button className="btn btn-primary"
                onClick={() => {
                    setState(
                        {
                            ...setState,
                            counter1: counter1 + 1,
                            counter2: counter2

                        }
                    )
                }}
            >+1</button>
        </div>
    )
}
