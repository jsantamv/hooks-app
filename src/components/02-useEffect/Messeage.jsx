import React, { useEffect, useState } from 'react'

export const Messeage = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const { x, y } = coords

    useEffect(() => {

        //Montamos 
        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y }
            setCoords(coors)
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            //desmontamos o limpiamos
            window.removeEventListener('mousemove', mouseMove)
            console.log('Componenete Desmontado');
        }
    }, [])


    return (
        <div>
            <h3>Eres Genial</h3>

            <p>
                x:{x} y: {y}
            </p>
        </div>
    )
}
