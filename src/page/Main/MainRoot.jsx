import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../companents/Main/Footer'
import Navbar from '../../companents/Main/Navbar'

const MainRoot = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>   
        <Footer/> 
        </div>
  )
}

export default MainRoot