import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminLayout from './AdminLayout'

function AdminSidebar({ children }) {
    return (
        <div className="admin-layout">
            <AdminLayout />
            <main className="admin-main">
                {children}
            </main>
        </div>
    )
}

export default AdminSidebar