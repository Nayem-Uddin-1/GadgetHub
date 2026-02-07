import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar/Navbar'
import Home from '../pages/Home'

function MianLayouts() {
    return (
        <div>          
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MianLayouts