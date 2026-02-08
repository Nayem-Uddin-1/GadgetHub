import React from 'react'
import FeaturedProductDisplay from '../FeaturedProductDisplay/FeaturedProductDisplay'

function CommonFeaturedProduct({data}) {
  return (
    <div>
        <FeaturedProductDisplay data={"Smartphones"} />
        <FeaturedProductDisplay data={"Flat Screen TVs"} />
    </div>
  )
}

export default CommonFeaturedProduct