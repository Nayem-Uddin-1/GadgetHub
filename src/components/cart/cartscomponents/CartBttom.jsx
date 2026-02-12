import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import CouponComponent from './inputs/CouponComponent';
import ShippingTax from './inputs/ShippingTax';
import { Link } from 'react-router-dom';


function CartBttom() {

    const [isCouponOpen, setIsCouponOpen] = useState(false)

    return (
        <>
            <div className="w-122.5 border rounded border-gray-300 p-10 ">
                <h2 className='title text-xl mb-10 font-semibold '>What would you like to do next?</h2>

                <div className="panel-heading ">
                    <h4  onClick={() => setIsCouponOpen(!isCouponOpen)} className={`panel-title flex transform transisition justify-between ${isCouponOpen ? "text-blue-500 ": "hover:text-blue-500 "} `}>
                       <Link>
                        Use Coupon Code
                        </Link>
                        <span   >
                            <IoIosArrowDown
                               
                                className={` transition-transform duration-300 ${isCouponOpen ? "rotate-180" : ""}  `} />

                        </span>
                    </h4>
                </div>
                
                <CouponComponent isCouponOpen={isCouponOpen} />

                <ShippingTax/>
            </div>

        </>
    )
}

export default CartBttom