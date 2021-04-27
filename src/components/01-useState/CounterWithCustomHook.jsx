import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {


    const { state: counter, increment, decrement, reset } = useCounter(6)


    return (
        <>
            <h1>Counter with hook: {counter}</h1>
            <hr />

            <button onClick={() => increment(2)} className="btn btn-primary">+1</button>
            <button onClick={reset} className="btn btn-secondary">Reset</button>
            <button onClick={() => decrement(2)} className="btn btn-warning">-1</button>
        </>
    )
}
