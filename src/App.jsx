import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MianLayouts from './layouts/MianLayouts'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MianLayouts/>} >
              <Route path='/' element={<Home/>} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
