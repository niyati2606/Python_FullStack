import React, { useState } from 'react'

function FromData() {

    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(name)

    return (

        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-6 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="name" value={name} onChange={(data) => setName(data.target.value)} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                            <input type="name" value={userName} onChange={(data) => setUserName(data.target.value)} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={email} onChange={(data) => setEmail(data.target.value)} className="form-control" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={password} onChange={(data) => setPassword(data.target.value)} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default FromData