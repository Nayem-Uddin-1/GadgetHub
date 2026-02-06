import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar/Navbar'

function MianLayouts() {
    return (
        <div>

            <Navbar/>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MianLayouts