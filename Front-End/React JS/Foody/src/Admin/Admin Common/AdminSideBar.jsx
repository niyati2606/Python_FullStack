import React, { useState, useEffect } from 'react'
import AdminLayout from './AdminLayout'

function AdminSidebar({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    return (
        <div className="admin-layout">
            <AdminLayout isOpen={isOpen} onClose={() => setIsOpen(false)} />

            {isOpen && (
                <div className="admin-sidebar-backdrop" onClick={() => setIsOpen(false)} />
            )}

            <main className="admin-main">
                <button
                    className="admin-sidebar-toggler"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open sidebar"
                >
                    <i className="fa fa-bars" />
                </button>
                {children}
            </main>
        </div>
    )
}

export default AdminSidebar