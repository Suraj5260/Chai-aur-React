import React, { useEffect, useState } from 'react'
import { useLoaderData, Link } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()
    // console.log(data)
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Suraj5260')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='text-center  m-4 bg-gray-600 text-white p-4 '>
            <div className='flex justify-center items-center p-7'>
                <img className='border-2 rounded-md border-white' src={data.avatar_url} alt="Suraj" width={200} />
            </div>
            <div className='text-2xl'>
                {data.login}
            </div>
            <div className='text-xl'>
                "{data.bio}"
            </div>
            <div>
                <Link className='hover:underline hover:text-orange-500 ' to={data.html_url}>
                    Get in touch!!
                </Link>
            </div>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Suraj5260')
    return (response.json())
}

