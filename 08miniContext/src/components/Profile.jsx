import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)

    if (!user) return <div>Pls login</div>

    return <div>Welcome {user.username} ({user.number})</div>
}

export default Profile