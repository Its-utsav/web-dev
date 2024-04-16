import React from 'react'
import { useParams } from 'react-router-dom'
export const User = () => {
    const { id } = useParams()
    return (
        <div className='bg-violet-700 flex items-center justify-center m-4 p-4 uppercase mr-3 rounded-3xl '> userID: <span className='ml-4  bg-violet-700 p-3 text-white rounded-xl hover:bg-violet-400 hover:text-black drop-shadow-md '>
            {id}
        </span>
        </div>
    )
}
