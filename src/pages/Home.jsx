import React from 'react'
import Navbar from '../components/common/Navbar/Navbar'
import Banner from '../components/banner/Banner'
import CategoryCards from '../components/common/Navbar/searchbar/CategoryCards/CategoryCards'

function Home() {
  return (
    <>
     <Navbar/>
     <Banner/>
     <CategoryCards/>
    </>
  )
}

export default Home