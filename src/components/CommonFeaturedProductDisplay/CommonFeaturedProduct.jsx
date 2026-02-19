import React from 'react'
import FeaturedProductDisplay from '../FeaturedProductDisplay/FeaturedProductDisplay'
import { useSelector } from 'react-redux'

function CommonFeaturedProduct({ data }) {

  const products = useSelector((state => state.product.products))


  const smartphones = products.filter(
    (item) => item.category === "Smartphones"
  )

    const tvs = products.filter(
    (item) => item.category === "Flat Screen TVs"
  )

  console.log( "smartphone", smartphones);
  

  return (
    <div>

      <FeaturedProductDisplay data={"Smartphones"} products={products} />
      <FeaturedProductDisplay data={"Flat Screen TVs"} products={products} />

    </div>
  )
}

export default CommonFeaturedProduct