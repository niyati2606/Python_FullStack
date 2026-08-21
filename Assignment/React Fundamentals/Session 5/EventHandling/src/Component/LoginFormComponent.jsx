import React, { useState } from 'react'

function LoginFormComponent() {

    const [formData, setFormData] = useState({
        userName: "",
        password: ""
    })

    console.log(formData)

    const showAlert = (event) => {

        // Prevent page reload
        event.preventDefault()

        if (formData.userName == "" || formData.password == "") {
            alert("Please Enter All Details")
        } else {
             setFormData({
                userName: "",
                password: ""
            })
            alert(
                `Username: ${formData.username}\nPassword: ${formData.password}`
            );

        }
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-6 mx-auto">

                    <form onSubmit={showAlert}>

                        {/* User Name */}
                        <div className="mb-3">
                            <label
                                htmlFor="userName"
                                className="form-label"
                            >
                                User Name
                            </label>

                            <input
                                type="text"
                                id="userName"
                                value={formData.userName}
                                onChange={(data) => {
                                    setFormData({
                                        ...formData,
                                        userName: data.target.value
                                    })
                                }}
                                className="form-control"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label
                                htmlFor="password"
                                className="form-label"
                            >
                                Password
                            </label>

                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={(data) => {
                                    setFormData({
                                        ...formData,
                                        password: data.target.value
                                    })
                                }}
                                className="form-control"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"

                        >
                            Submit
                        </button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginFormComponent