import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Common/Footer'
import HeadetTitle from '../Common/HeadetTitle'
import Header from '../Common/Header'
import { toast } from 'react-toastify'
import axios from 'axios'

function SignupPage() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_password: '',
        user_phone: "",
        id: "",
        user_status: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            id: new Date().getTime().toString(),
            user_status: "unblock",
            [e.target.name]: e.target.value
        })
    }

    const validate = () => {
        const newErrors = {}
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phonePattern = /^[0-9+\-\s()]{7,15}$/

        if (!formData.user_name.trim()) {
            newErrors.name = 'Full name is required'
        }

        if (!formData.user_email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!emailPattern.test(formData.user_email)) {
            newErrors.email = 'Enter a valid email address'
        }

        if(!formData.user_phone.trim()){
            newErrors.phone = "Phone number is required"
        }else if (!phonePattern.test(formData.user_phone)){
            newErrors.phone = "Enter valid phone number"
        }

        if (!formData.user_password) {
            newErrors.password = 'Password is required'
        } else if (formData.user_password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validate()) return

        try {
            console.log("USER SIGN--", formData)
            const signupResponse = await axios.post("http://localhost:3000/users", formData)
            toast.success("Registration done successfully..")
            setFormData({
                user_name: '',
                user_email: '',
                user_password: '',
                user_phone: "",
                id: "",
                user_status: ""
            }
            )
            toast.info("Please login to continue..")
            navigate("/userlogin")
        } catch (err) {
            console.log(err)
            toast.error('Something went wrong. Please try again.')
        }
    }

    return (
        <div className='container-fluid bg-light bg-icon'>
            {/* Signup Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-6 col-md-8 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="section-header text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                                <h1 className="display-5 mb-3">Create an Account</h1>
                                <p>Sign up to get started.</p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className={`form-control${errors.name ? ' is-invalid' : ''}`}
                                                id="name"
                                                placeholder="Your Name"
                                                value={formData.user_name}
                                                name='user_name'
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="name">Your Name</label>
                                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className={`form-control${errors.email ? ' is-invalid' : ''}`}
                                                id="email"
                                                placeholder="Your Email"
                                                value={formData.user_email}
                                                onChange={handleChange}
                                                name='user_email'
                                            />
                                            <label htmlFor="email">Your Email</label>
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input
                                                type="tel"
                                                className={`form-control${errors.phone ? ' is-invalid' : ''}`}
                                                id="phone"
                                                placeholder="Your Phone Number"
                                                value={formData.user_phone}
                                                onChange={handleChange}
                                                name='user_phone'
                                            />
                                            <label htmlFor="email">Your Phone Number</label>
                                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
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
                                                onChange={handleChange}
                                                name='user_password'
                                            />
                                            <label htmlFor="password">Password</label>
                                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button
                                            className="btn btn-primary rounded-pill py-3 px-5 w-100"
                                            type="submit"
                                        > Signup
                                        </button>
                                    </div>
                                    <div className="col-12 text-center">
                                        <p className="mb-0">
                                            Already have an account? <Link to="/userlogin">Login</Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Signup End */}
        </div>
    )
}

export default SignupPage