import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar/Navbar'
import Footer from '../components/common/Footer/Footer'

function MianLayouts() {
    return (
        <div>

            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MianLayouts