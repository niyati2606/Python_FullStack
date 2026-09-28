import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function AdminLayout({ isOpen, onClose }) {
    const navigate = useNavigate()

    const userName = localStorage.getItem("adminName")
    console.log("Admin : ", userName)

    const handleLogout = () => {
        // TODO: replace with your real auth/logout logic
        localStorage.removeItem('adminID')
        localStorage.removeItem("adminName")
        navigate('/adminlogin')
    }

    const handleLogin = () => {
        navigate('/adminlogin')
    }

    return (
        <div className={`admin-sidebar ${isOpen ? 'show' : ''}`}>
            <div className="admin-sidebar-brand">
                <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/admindashboard" className="navbar-brand m-0">
                        <h1 className="fw-bold text-primary m-0">F<span className="text-secondary">oo</span>dy</h1>
                    </NavLink>
                    <button className="admin-sidebar-close" onClick={onClose} aria-label="Close sidebar">
                        <i className="fa fa-times" />
                    </button>
                </div>
                {
                    // Acii 
                    (() => {
                        if (localStorage.getItem("adminID")) {
                            return (
                                // <NavLink className="nav-item nav-link">{localStorage.getItem("Aname")}</NavLink>
                                <small className="text-muted">{userName}</small>
                            )
                        }
                    })()
                }
            </div>

            {/* <div className="admin-sidebar-greeting">
                <span className="fw-semibold">Hello, Admin</span>
            </div> */}

            <div className="admin-sidebar-nav nav flex-column">
                <NavLink to="/admindashboard" className="nav-item nav-link">
                    <i className="fa fa-tachometer-alt me-2" />Dashboard
                </NavLink>
                <NavLink to="/adminaboutus" className="nav-item nav-link">
                    <i className="fa fa-info-circle me-2" />About Us
                </NavLink>

                <a href="#" className="nav-item nav-link admin-sidebar-toggle" data-bs-toggle="collapse" data-bs-target="#sidebarProducts">
                    <span><i className="fa fa-box me-2" />Products</span>
                    <i className="fa fa-chevron-down admin-sidebar-chevron" />
                </a>
                <div className="collapse" id="sidebarProducts">
                    <div className="admin-sidebar-submenu">
                        <NavLink to="/manageproducts" className="nav-item nav-link">Manage Product</NavLink>
                        <NavLink to="/addproducts" className="nav-item nav-link">Add Product</NavLink>
                    </div>
                </div>

                <a href="#" className="nav-item nav-link admin-sidebar-toggle" data-bs-toggle="collapse" data-bs-target="#sidebarFeatures">
                    <span><i className="fa fa-star me-2" />Features</span>
                    <i className="fa fa-chevron-down admin-sidebar-chevron" />
                </a>
                <div className="collapse" id="sidebarFeatures">
                    <div className="admin-sidebar-submenu">
                        <NavLink to="/managefeatures" className="nav-item nav-link">Manage Features</NavLink>
                        <NavLink to="/addfeatures" className="nav-item nav-link">Add Features</NavLink>
                    </div>
                </div>

                <a href="#" className="nav-item nav-link admin-sidebar-toggle" data-bs-toggle="collapse" data-bs-target="#sidebarBlog">
                    <span><i className="fa fa-newspaper me-2" />Blog</span>
                    <i className="fa fa-chevron-down admin-sidebar-chevron" />
                </a>
                <div className="collapse" id="sidebarBlog">
                    <div className="admin-sidebar-submenu">
                        <NavLink to="/manageblogs" className="nav-item nav-link">Manage Blog</NavLink>
                        <NavLink to="/addblogs" className="nav-item nav-link">Add Blog</NavLink>
                    </div>
                </div>

                <a href="#" className="nav-item nav-link admin-sidebar-toggle" data-bs-toggle="collapse" data-bs-target="#sidebarTestimonial">
                    <span><i className="fa fa-quote-right me-2" />Testimonial</span>
                    <i className="fa fa-chevron-down admin-sidebar-chevron" />
                </a>
                <div className="collapse" id="sidebarTestimonial">
                    <div className="admin-sidebar-submenu">
                        <NavLink to="/managetestimonial" className="nav-item nav-link">Manage Testimonial</NavLink>
                        <NavLink to="/addtestimonial" className="nav-item nav-link">Add Testimonial</NavLink>
                    </div>
                </div>

                {/* <NavLink to="/admindashboard" className="nav-item nav-link">
                    <i className="fa fa-envelope me-2" />Contact Us
                </NavLink> */}
            </div>

            {
                (() => {
                    if (localStorage.getItem("adminID")) {
                        return (
                            // <NavLink onClick={logout} className="nav-item nav-link">Logout</NavLink>
                            <div className="admin-sidebar-footer">
                                <button className="btn btn-outline-danger w-100" onClick={handleLogout}>
                                    <i className="fa fa-sign-out-alt me-2" />Logout
                                </button>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="admin-sidebar-footer">
                                <button className="btn btn-outline-success w-100" onClick={handleLogin}>
                                    <i className="fa fa-sign-in-alt me-2" />Login
                                </button>
                            </div>
                        )
                    }
                })()
            }
        </div>
    )
}

export default AdminLayout