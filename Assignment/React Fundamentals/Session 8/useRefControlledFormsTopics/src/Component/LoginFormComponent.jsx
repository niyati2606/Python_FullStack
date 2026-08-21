import React, { useRef, useState } from 'react'

function LoginFormComponent() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const userNameRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Clear username
        setUserName("")
        // Clear password
        setPassword("")
        // Focus username input
        userNameRef.current.focus()
    }

    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-6 mx-auto">

                    <form onSubmit={handleSubmit}>
                        {/* User Name */}
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">
                                User Name
                            </label>
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}
                                ref={userNameRef} id="userName" className="form-control" />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" >
                                Password
                            </label>

                            <input type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} id="password" className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginFormComponent