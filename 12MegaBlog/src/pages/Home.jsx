import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import authService from '../appwrite/auth'
// import { Query } from 'appwrite'

function Home() {

    // console.log(userData);
    const userData = useSelector((state) => state.auth)
    useEffect(() => {

        console.log(userData)
    })



    if (userData.status) {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-2'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>Welcome {userData.userData?.name} </h1>
                        </div>
                    </div>
                </Container>

            </div>
        )
    }

    return (
        <div className='w-full py-8 mt-4 text-center'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='w-full p-2'>
                        <Link to='/login'><h1 className='text-2xl font-bold hover:text-gray-500'>Login to read and create posts.</h1></Link>
                    </div>
                </div>
            </Container>
        </div>
    )


}

export default Home