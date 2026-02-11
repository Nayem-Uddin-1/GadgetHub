import React from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiCartAdd } from "react-icons/bi";
import { BiCartDownload } from "react-icons/bi";

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";





function TextArea() {
    return (
        <div className=' p-10 bg-white'>
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

            {/* stepper group  */}
            <div className="stepper-group flex gap-5">
                <div className="stepper border w-20 rounded flex p-1 px-3 ">
                    <button className='w-10'><FaMinus /></button>
                    <input type="text" name="text" id="product-quantity " value={1}
                        className=' w-full text-center outline-none focus:outline-none ' />
                    <button className='w-10'><FaPlus /></button>

                </div>

                {/* add to cart button  */}
                <Link className='btton-cart flex bg-black text-white rounded items-center gap-1 justify-center border w-[154px] p-1' >
                    <div className='font-bold'>
                        <BiCartAdd />
                    </div>
                    <span className='font-semibold' >Add to cart</span>
                </Link>

                {/* buy cart */}
                <div className="buy-cart flex gap-1 items-center w-[106px] border p-1 rounded justify-center">
                    <Link>
                        <BiCartDownload />
                    </Link>
                    <span className='font-semibold ' >Buy Now</span>
                </div>

            </div>

            {/* product extra text  */}
            <div className="prodcut-extra-text">
                <div className="panel-heading">
                    <Link className='text-blue-500'>
                        Shipping & Returns
                    </Link>
                    <div className="product-text">
                        Create unlimited custom product blocks and display them in accordions or tabs or open blocks. Each block can be assigned to all products at once or specific products according to
                        <Link className='border-b border-dotted text-blue-500 font-semibold' >
                        advanced criteria.
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TextArea