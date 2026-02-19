import React from 'react'
import SecondaryProduct from '../../Products/SecondaryProduct'
import { useSelector } from 'react-redux';

function NewArrival() {

    const products = useSelector((state => state.product.products))
   

  return (
    <div>
      
        <SecondaryProduct products={products} />
    </div>
  )
}

export default NewArrival