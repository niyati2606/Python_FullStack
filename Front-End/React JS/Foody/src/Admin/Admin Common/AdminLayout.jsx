import React from 'react'
import { NavLink } from 'react-router-dom'

function AdminLayout({ isOpen, onClose }) {
    return (
        <div className={`admin-sidebar d-flex flex-column flex-shrink-0 ${isOpen ? 'show' : ''}`}>
            <div className="admin-sidebar-brand">
                <div className="d-flex justify-content-between align-items-center">
                    <NavLink to="/adminbashboard" className="navbar-brand m-0">
                        <h1 className="fw-bold text-primary m-0">F<span className="text-secondary">oo</span>dy</h1>
                    </NavLink>
                    <button className="admin-sidebar-close" onClick={onClose} aria-label="Close sidebar">
                        <i className="fa fa-times" />
                    </button>
                </div>
                <small className="text-muted">Admin panel</small>
            </div>

            <div className="admin-sidebar-nav nav flex-column">
                <NavLink to="/adminbashboard" className="nav-item nav-link">
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

                {/* <NavLink to="/adminbashboard" className="nav-item nav-link">
                    <i className="fa fa-envelope me-2" />Contact Us
                </NavLink> */}
            </div>
        </div>
    )
}

export default AdminLayout