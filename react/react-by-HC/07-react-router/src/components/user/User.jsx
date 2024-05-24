import React from 'react'
import { useParams } from 'react-router-dom'
export const User = () => {

    let { id } = useParams()
    return (
        <>
            <div className='w-full text-center p-4 bg-stone-600 text-white '>
                <h1>User = {id}</h1>
            </div>
        </>
    )
}
