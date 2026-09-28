import React, { useEffect, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import Footer from '../Common/Footer'
import HeadetTitle from '../Common/HeadetTitle'
import Header from '../Common/Header'
import { toast } from 'react-toastify'
import axios from 'axios'

function EditProfilePage() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_phone: ''
    })

    const [errors, setErrors] = useState({})

    const getUserProfile = async () => {
        const userData = await axios.get(`http://localhost:3000/users/${localStorage.getItem("userID")}`)
        //  console.log(userData.data)
        setFormData(userData.data)
    }

    useEffect(() => {
        getUserProfile()
    }, [])

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
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

        if (!formData.user_phone.trim()) {
            newErrors.phone = 'Phone number is required'
        } else if (!phonePattern.test(formData.user_phone)) {
            newErrors.phone = 'Enter a valid phone number'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validate()) return

        try {

            const updateResponse = await axios.put(`http://localhost:3000/users/${formData.id}`, formData)
            localStorage.setItem("usertName",formData.user_name)
            setFormData({
                user_name: '',
                user_email: '',
                user_phone: ''
            })

            navigate("/")
            toast.success("Profile updated successfully..")
        } catch (err) {
            console.error("Edit Profile --", err)
            toast('Something went wrong. Please try again.')
        }
    }

    return (
        <div>
            <Header />
            <HeadetTitle name="Edit Profile" title="Edit Profile" />

            <div className='container-fluid bg-light bg-icon'>
                {/* Edit Profile Start */}
                <div className="container-xxl py-6">
                    <div className="container">
                        <div className="row g-5 justify-content-center">
                            <div className="col-lg-6 col-md-8 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="section-header text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                                    <h1 className="display-5 mb-3">Edit Profile</h1>
                                    <p>Update your account information below.</p>
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
                                                    name='user_name'
                                                    value={formData.user_name}
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
                                                    name='user_email'
                                                    value={formData.user_email}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="email">Your Email</label>
                                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className={`form-control${errors.phone ? ' is-invalid' : ''}`}
                                                    id="phone"
                                                    placeholder="Phone Number"
                                                    name='user_phone'
                                                    value={formData.user_phone}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="phone">Phone Number</label>
                                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex gap-3">
                                            <button
                                                className="btn btn-primary rounded-pill py-3 px-5"
                                                type="submit"
                                            >
                                                Save Changes
                                            </button>
                                            <button
                                                className="btn btn-outline-primary rounded-pill py-3 px-5"
                                                type="button"
                                                onClick={() => navigate(-1)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Edit Profile End */}
            </div>

            <Footer />
        </div>
    )
}

export default EditProfilePage