import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AboutUsComponent() {
    return (
        <div>
            <h1 className='p-5 bg-info'>AboutUsComponent</h1>
            <Link to="/aboutus/about1" className='m-2'>About 1</Link>
            <Link to='/aboutus/about2' className='m-2'>About 2</Link>
            {/* 
            outlet is used to disaply data above or below link tag 
            if we write outlet below link tag then its display content below link tag and if write above then displays content above 
            */}
            <Outlet />
        </div>

    )
}

export default AboutUsComponent