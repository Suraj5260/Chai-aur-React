import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState(NaN)

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password, number })
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />
            {"    "}
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            {"    "}
            <input type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)} placeholder='Roll no.' />
            <button onClick={handleSubmit}>Login</button>
        </div >
    )
}

export default Login