import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../companents/Admin/Footer'
import Navbar from '../../companents/Admin/Navbar'

function AdminRoot() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AdminRoot