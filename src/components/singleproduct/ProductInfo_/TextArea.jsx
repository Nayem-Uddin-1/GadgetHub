import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

import SocialIcons from './SocialIcons';
import ProductExtraText from './ProductExtraText';
import StepperGroup from './StepperGroup';






function TextArea() {




    return (
        <div className=' p-10 bg-white w-[451px]'>
            <div className='flex gap-3  items-center '>

                <div className="flex gap-1  ">
                    <FaStar className=' text-yellow-600' />
                    <FaStar className=' text-yellow-600' />
                    <FaStar className=' text-yellow-600' />
                    <FaStar className=' text-yellow-600' />
                    <FaStar className=' text-yellow-600' />
                </div>

                <a href="#" className='border-b border-dotted' >0 reviews</a>

                <a href="#" className='border-b border-dotted  ' >Write a review</a>

            </div>

            <div>
                <span className='border rounded p-0.5'><a href="#">Custom Label (new position)</a></span>
                <span className='border rounded p-0.5' > <a href="#" className='border-b border-dotted hover:bg-blue-400' >
                    Another level
                </a> </span>

            </div>

            <div>
                <div >
                    <span>
                        from
                    </span>
                </div>

                <div className='product-price'>
                    $730.22
                </div>

                <div className="produt-text">
                    Ex Tax: $730.22
                </div>

                <div className="product-point">
                    Price in reward points: 49
                </div>

            </div>

            {/* product stats */}
            <div className="product-stats">
                <ul className='list-disc list-inside' >
                    <li>
                        <b>Stock:</b>
                        <span>In Stock</span>
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




            <StepperGroup />
            <ProductExtraText />
            <SocialIcons />


        </div>
    )
}

export default TextArea