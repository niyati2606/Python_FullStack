import { Button } from 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFoundComponent() {

    const redirect = useNavigate()

    const backToHome = () => {
        redirect("/")
        console.log("Back to home")
    }

    return (
        <div>
            <h1 className="container p-5 m-5 mx-auto bg-danger text-white" style={{ textAlign: "center" }}> Page Not Found</h1>

            <Link className='m-3 p-3 bg-primary text-light' to="/">Go to Home</Link>
            <button className='m-3 p-2 bg-primary text-light' onClick={backToHome}>Go to Home</button>
        </div>
    )
}

export default NotFoundComponent