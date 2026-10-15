import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginComponent() {

    const redirect = useNavigate()

    const [login, setLogin] = useState({
        email : "",
        password : ""
    })

    const getChange = (e) => {
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(login)

        if(login.email === "" || login.password === ""){
            alert("Please fill details")
            return
        }

    }

    return (
        <div>
            <div className='my-4'>
                <div className='card shadow p-3 mx-auto' style={{ width: "50%" }}>
                    <h2 className='text-center'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className='form-label'>email</label>
                            <input name='email' value={login.email} onChange={getChange} className='form-control' placeholder='enter email' type='email' />
                        </div>
                        <div className="mb-3">
                            <label className='form-label'>password</label>
                            <input name='password' value={login.password} onChange={getChange} className='form-control' placeholder='enter password' type='password' />
                        </div>
                        <button type='submit' className='btn btn-primary'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent