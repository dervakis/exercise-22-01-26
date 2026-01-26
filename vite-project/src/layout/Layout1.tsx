import React from 'react'
import Navbar from '../common/Navbar'
import { Outlet } from 'react-router-dom'

function Layout1() {
  return (
    <div className="min-h-screen">
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout1