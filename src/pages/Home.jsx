import React from 'react'
import Navbar from '../components/common/Navbar/Navbar'
import Banner from '../components/banner/Banner'
import CategoryCards from '../components/common/Navbar/searchbar/CategoryCards/CategoryCards'
import FeatureBar from '../components/FeatureBar/FeatureBar'
import Products from '../Products/Products'
import FeaturedProductDisplay from '../components/FeaturedProductDisplay/FeaturedProductDisplay'
import CommonFeaturedProduct from '../components/CommonFeaturedProductDisplay/CommonFeaturedProduct'
import PromoBanner from '../components/PromoBanner/PromoBanner'

function Home() {
  return (
    <>
     <Navbar/>
     <Banner/>
     <CategoryCards/>
     <FeatureBar/>
     <CommonFeaturedProduct/>
     <PromoBanner/>

   

     
    </>
  )
}

export default Home