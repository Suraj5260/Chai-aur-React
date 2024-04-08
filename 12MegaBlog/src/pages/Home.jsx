import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
import { Query } from 'appwrite'

function Home() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData)
    // console.log(userData);

    useEffect(() => {
        appwriteService.getPosts([Query.equal("userId", [`${userData.$id}`])]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [setPosts])

    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='w-full p-2'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>Login to read and create posts.</h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    <div className='w-full p-2'>
                        <h1 className='text-2xl font-bold hover:text-gray-500'>Your Posts</h1>
                    </div>
                </div>
            </Container>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home