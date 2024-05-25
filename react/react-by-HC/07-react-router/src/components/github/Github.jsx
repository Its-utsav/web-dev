import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    let data = useLoaderData()
    // let [data, setData] = useState([]);
    // let url = `https://api.github.com/users/hiteshchoudhary`;


    // useEffect(() => {
    //     fetch(url).then((res) => res.json()).then((data) => setData(data))
    // }, [])



    return (
        <>
            <div className='m-4 p-4 text-white text-center bg-gradient-to-r from-red-500 to-orange-500 drop-shadow-lg '>
                <div className='flex justify-center items-center'>
                    <img src={data.avatar_url} alt={`${data.name} avatar logo`} className='rounded-full border-r' loading='lazy' />
                </div>
                <h1 className='p-4'>Name : <span className='font-bold'>{data.name}</span></h1>
                <p>Follower : {data.followers}</p>

            </div>
        </>
    )
}

export default Github


export const gihubData = async () => {
    let data = await fetch(`https://api.github.com/users/hiteshchoudhary`)
    return data.json()
}