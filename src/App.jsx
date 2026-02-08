import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MianLayouts from './layouts/MianLayouts'
import Home from './pages/Home'
import Footer from './components/common/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MianLayouts />} >
            <Route path='/' element={<Home />} />

          </Route>
        </Routes>
        <Footer />
        <div className="h-screen"></div>
      </BrowserRouter>

    </>
  )
}

export default App
