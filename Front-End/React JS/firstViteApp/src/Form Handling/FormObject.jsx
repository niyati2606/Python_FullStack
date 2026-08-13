import React, { useState } from 'react'

function FormObject() {

    const [fromData, setFormData] = useState({
        name : "",
        userName : "",
        email : "",
        password : ""
    })

    console.log(fromData)

    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-6 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="name" value={fromData.name} onChange={(data) => setFormData({...fromData,name : data.target.value})} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                            <input type="name" value={fromData.userName} onChange={(data) => setFormData({...fromData,userName : data.target.value})} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" value={fromData.email} onChange={(data) => setFormData({...fromData,email : data.target.value})} className="form-control" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" value={fromData.password} onChange={(data) => setFormData({...fromData,password : data.target.value})} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormObject