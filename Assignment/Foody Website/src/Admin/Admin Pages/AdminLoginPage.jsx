import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AdminLoginPage() {

  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem("adminID")){
      navigate("/admindashboard")
    }
  },[])

  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.password) newErrors.password = 'Password is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    try {

      const userDetailRes = await axios.get(`http://localhost:3000/admin?admin_email=${formData.email}`)

      //checking email
      if (userDetailRes.data.length === 0) {
        toast.error("Email is not registered")
        return false
      }

      //checking password
      let userDetail = userDetailRes.data[0]

      if (userDetail.admin_password !== formData.password) {
        toast.error("Password is incorrect")
        return false
      }

      console.log("User : --", userDetail)
      localStorage.setItem("adminID", userDetail.id)
      localStorage.setItem("adminName", userDetail.admin_name)
      toast.success('Login successful')
      navigate('/admindashboard')
    } catch (err) {
      console.log("Admin LoginError : ", err)
      toast.error('Something went wrong. Please try again.')
    }
  }

  return (
    <div className='container-fluid bg-light bg-icon'>
      {/* Admin Login Start */}
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-5 col-md-8 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-white shadow-sm rounded p-5">
                <div className="section-header text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                  <i className="fa fa-user-shield fa-3x text-primary mb-3" />
                  <h1 className="display-6 mb-3">Admin Login</h1>
                  <p className="mb-0">Restricted area. Please sign in with your admin credentials.</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          placeholder="Admin Email"
                          value={formData.email}
                          name="email"
                          onChange={handleChange}
                        />
                        <label htmlFor="email">Admin Email</label>
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          id="password"
                          placeholder="Password"
                          value={formData.password}
                          name="password"
                          onChange={handleChange}
                        />
                        <label htmlFor="password">Password</label>
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary rounded-pill py-3 px-5 w-100"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Admin Login End */}
    </div>
  )
}

export default AdminLoginPage