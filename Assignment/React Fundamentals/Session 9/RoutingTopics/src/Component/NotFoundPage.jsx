import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className='container'>
            <h1 className='p-5 bg-danger m-4 mx-auto' style={{ textAlign: "center", color: "white" }}>
                404 Page Not Found
            </h1>

            <Link to={"/"}>Go To Home</Link>

        </div>
    )
}

export default NotFoundPage