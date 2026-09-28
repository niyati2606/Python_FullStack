import React from 'react'
import AdminHeader from '../Admin Common/AdminHeader'
import AdminHeaderTitle from '../Admin Common/AdminHeaderTitle'
import AdminSidebar from '../Admin Common/AdminSideBar'

function AdminHomePage() {
  return (
    <div>
      <AdminSidebar>
        <AdminHeaderTitle name="Dashboard" title="Dashboard" />
      </AdminSidebar>
    </div>
  )
}

export default AdminHomePage