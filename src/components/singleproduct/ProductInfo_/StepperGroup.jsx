import React from 'react'
import { Link } from 'react-router-dom';
import { BiCartAdd } from "react-icons/bi";
import { BiCartDownload } from "react-icons/bi";

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function StepperGroup() {
    return (
        <>  {/* stepper group  */}
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

            </div></>
    )
}

export default StepperGroup