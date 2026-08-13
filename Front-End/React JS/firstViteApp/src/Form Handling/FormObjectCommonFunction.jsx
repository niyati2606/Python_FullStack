import React, { useState } from 'react'

function FormObjectCommonFunction() {

    const [fromData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        password: ""
    })

    console.log(fromData)

    const setFromValue = (data) => {
        setFormData({
            ...fromData,
            [data.target.name] : data.target.value
        })
    }

    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-6 mx-auto">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="name" name='name' value={fromData.name} onChange={setFromValue} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                            <input type="name" name='userName' value={fromData.userName} onChange={setFromValue} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" name="email" value={fromData.email} onChange={setFromValue} className="form-control" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" value={fromData.password} onChange={setFromValue} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormObjectCommonFunction