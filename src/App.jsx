import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MianLayouts from './layouts/MianLayouts'
import Loging from './pages/Loging'
import Home from './pages/Home'
import SingleProduct from './components/singleproduct/SingleProduct'
import NotFound from './pages/NotFound'
import ShopCart from './components/cart/ShopCart'
import WishList from './pages/WishList'
import SignIn from './components/singleproduct/ProductInfo_/SignIn'

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
            <Route path='/login' element={<Loging />} />
            <Route path='/register' element={<SignIn/>} />
          <Route element={<MianLayouts />} >
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<ShopCart />} />
            <Route path='/wish-list' element={<WishList/> } />
            <Route path='/product/:slug' element={<SingleProduct />} />

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
