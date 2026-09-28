import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function LoginPage() {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("userID")) {
            navigate("/")
        }
    }, [])

    const [formData, setFormData] = useState({
        user_email: '',
        user_password: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const validate = () => {
        const newErrors = {}
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!formData.user_email.trim()) {
            newErrors.user_email = 'Email is required'
        } else if (!emailPattern.test(formData.user_email)) {
            newErrors.user_email = 'Enter a valid email address'
        }

        if (!formData.user_password) {
            newErrors.user_password = 'Password is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validate()) return

        try {
            // console.log("Login ===", formData)

            const userDetailRes = await axios.get(`http://localhost:3000/users?user_email=${formData.user_email}`)
            console.log(userDetailRes)

            //checking email
            if (userDetailRes.data.length === 0) {
                toast.error("Email is not registred..")
                return false
            }

            let userDetail = userDetailRes.data[0]

            //checking password
            if (userDetail.user_password !== formData.user_password) {
                toast.error("Incorrect Password..")
                return false
            }

            //check status
            if (userDetail.user_status == "block") {
                toast.error("Your accoint is not activate yet")
                return false
            }

            localStorage.setItem("userID", userDetail.id)
            localStorage.setItem("usertName", userDetail.user_name)
            navigate('/')
        } catch (err) {
            console.log(err)
            toast.error('Something went wrong. Please try again.')
        }
    }

    return (
        <div className='container-fluid bg-light bg-icon'>
            {/* Login Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-6 col-md-8 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="section-header text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                                <h1 className="display-5 mb-3">Welcome Back</h1>
                                <p>Login to your account to continue.</p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className={`form-control${errors.email ? ' is-invalid' : ''}`}
                                                id="email"
                                                placeholder="Your Email"
                                                value={formData.user_email}
                                                name='user_email'
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="email">Your Email</label>
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="password"
                                                className={`form-control${errors.password ? ' is-invalid' : ''}`}
                                                id="password"
                                                placeholder="Password"
                                                value={formData.user_password}
                                                name='user_password'
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="password">Password</label>
                                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                                            <label className="form-check-label" htmlFor="rememberMe">
                                                Remember me
                                            </label>
                                        </div>
                                        <Link to="/forgot-password">Forgot password?</Link>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            className="btn btn-primary rounded-pill py-3 px-5 w-100"
                                            type="submit">
                                            Login
                                        </button>
                                    </div>
                                    <div className="col-12 text-center">
                                        <p className="mb-0">
                                            Don't have an account? <Link to="/userSignup">Sign up</Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Login End */}
        </div>
    )
}

export default LoginPage