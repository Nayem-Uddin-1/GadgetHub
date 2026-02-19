import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import SocialIcons from './SocialIcons';
import ProductExtraText from './ProductExtraText';
import StepperGroup from './StepperGroup';






function TextArea({ singleProduct }) {




    return (
        <div className=' p-10 bg-white w-[451px] '>
            <div className='flex gap-3  items-center mb-5 '>

                <div className="flex gap-1  ">
                    <FaStar className=' text-yellow-600' />
                    <FaStar className=' text-yellow-600' />
                    <FaStar className=' text-yellow-600' />
                    <FaStar className=' text-yellow-600' />
                    <FaStar className=' text-yellow-600' />
                </div>

                <a href="#" className='border-b border-dotted' >{singleProduct.rating} reviews</a>

                <a href="#" className=' border-b border-dotted text-blue-500  ' >Write a review</a>

            </div>

            <div className='text-gray-400' >
                <span className='border rounded p-0.5'><a href="#">Custom Label (new position)</a></span>
                <span className='border rounded p-0.5' > <a href="#" className='border-b border-dotted hover:bg-blue-400' >
                    Another level
                </a> </span>

            </div>

            <div className='text-gray-400' >
                <div className='mb-2 mt-10' >
                    <span>
                        from
                    </span>
                </div>

                <div className='product-price text-black text-2xl font-semibold mb-1 '>
                    ${singleProduct.price}
                </div>

                <div className="produt-text text-black mb-1">
                    Ex Tax: ${singleProduct.price}
                </div>

                <div className="product-point mb-5">
                    Price in reward points: 49
                </div>

            </div>

            {/* product stats */}
            <div className="product-stats text-gray-500 mb-5">
                <ul className='list-disc list-inside' >
                    <li>
                        <b>Stock : </b>
                        {
                            singleProduct.stock > 0 ?
                                <span className={`${singleProduct.stock > 0 ? "text-green-500 font-bold" : " "}`} >In Stock</span> :
                                <span className={`${singleProduct.stock === 0 ? "text-red-500 font-bold" : " "}`}>Out of Stock</span>
                        }

                    </li>
                    <li>
                        <b>Brand:</b>
                        <span>Iconic</span>
                    </li>
                    <li>
                        <b>Model:</b>
                        <span>model-6384</span>
                    </li>
                </ul>
            </div>




            {singleProduct.stock > 0 && <StepperGroup singleProduct={singleProduct} />}

            <ProductExtraText />
            <SocialIcons />


        </div>
    )
}

export default TextArea