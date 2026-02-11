import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MianLayouts from './layouts/MianLayouts'
import Home from './pages/Home'
import Footer from './components/common/Footer/Footer'
import SingleProduct from './components/singleproduct/SingleProduct'
import Navbar from './components/common/Navbar/Navbar'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route element={<MianLayouts />} >
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<SingleProduct />} />

          </Route>
            <Route path='*' element={<NotFound/>} />
        </Routes>
        {/* <Footer /> */}
        <div className="h-screen"></div>
      </BrowserRouter>

    </>
  )
}

export default App
