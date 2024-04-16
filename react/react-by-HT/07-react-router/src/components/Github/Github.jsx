import React from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
let data = useLoaderData()
    // let [data, SetData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/its-utsav').
    //         then((res) => res.json()).
    //         then(data => {
    //             console.log(data)
    //             SetData(data)
    //         })
    // }, []);
    // render whan compnent load 
    // but for effecting data we need to use useState hook
    return (
        <>
            <div className='flex items-center justify-center text-3xl m-4 text-white'>
                <div className='bg-blue-600 text-center p-3 rounded-xl drop-shadow-2xl'>
                    GitHub
                    <div className='mt-1'>
                        <div className='flex items-center justify-center'>
                            <img src={data.avatar_url} width={`100px`} alt="github img" className='rounded-full' />
                        </div>
                        <div>
                            Name: {data.name}
                        </div>
                        <div>
                            follower : {data.followers}
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Github
export const githubLoader = async ()=>{
    const res = await fetch('https://api.github.com/users/its-utsav')
    return res.json()
}