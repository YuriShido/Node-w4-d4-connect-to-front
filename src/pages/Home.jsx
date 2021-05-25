import React, {useContext} from 'react'
import UserContext from '../context/userContext'
import {Link} from 'react-router-dom'

function Home() {
    const { userData} = useContext(UserContext)
    return (
        <div className="page">
            {
                userData.user ? (
                    <h1>Welcome {userData.user.displayName}</h1>
                ) : (
                    <>
                    <h2>You are not logged in</h2>
                    <Link to="/login">Login</Link>
                    </>
                )
            }
            Home
        </div>
    )
}

export default Home
