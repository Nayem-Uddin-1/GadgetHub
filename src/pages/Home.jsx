import React from 'react'
import Banner from '../components/banner/Banner'
import CategoryCards from '../components/common/Navbar/searchbar/CategoryCards/CategoryCards'
import FeatureBar from '../components/FeatureBar/FeatureBar'
import CommonFeaturedProduct from '../components/CommonFeaturedProductDisplay/CommonFeaturedProduct'
import PromoBanner from '../components/PromoBanner/PromoBanner'
import NewArrival from '../components/newarrival/NewArrival'

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <CategoryCards />
      <NewArrival />
      <FeatureBar />
      <CommonFeaturedProduct />
      <PromoBanner />




    </>
  )
}

export default Home