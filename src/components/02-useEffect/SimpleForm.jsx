import React, { useEffect, useState } from 'react'
import './effects.css'


export const SimpleForm = () => {



    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    useEffect(() => {
        //        console.log("hey");
    }, [])

    // si me interesa controlar algun elemento se lo indico 
    // al useEfect
    useEffect(() => {
        //      console.log("form State Cambio");
    }, [formState])

    useEffect(() => {

        //    console.log("email Cambio");
    }, [email])


    const handleImputChange = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }


    return (
        <>
            <h1> UseEffect - SimpleForm</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleImputChange}
                />

            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleImputChange}
                />

            </div>


        </>
    )
}
