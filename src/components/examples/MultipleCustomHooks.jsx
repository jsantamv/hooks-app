import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../../styles/effects.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data && data[0]

    return (
        <div>
            <h1>MultipleCustomHooks</h1>
            <hr />

            {
                loading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) :
                    (
                        <blockquote className="blockquote text-center">
                            <p className="mb-0">{quote}</p>
                            <br />
                            <footer className="blockquote-footer">{author} </footer>
                        </blockquote>
                    )
            }

            <div className="card">
                <div className="card-body">
                    <button className='btn btn-primary'
                        onClick={increment}
                    >
                        Next
                    </button>
                </div>
            </div>



        </div>
    )
}
