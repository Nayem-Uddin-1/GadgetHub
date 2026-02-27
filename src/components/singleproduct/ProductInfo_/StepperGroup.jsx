import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BiCartAdd, BiCartDownload } from "react-icons/bi";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/cartSlice';

function StepperGroup({ singleProduct }) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [quantity, setQuantity] = useState(1)

    // Increase quantity
    const handleIncrease = () => {
        setQuantity(prev => prev + 1)
    }

    // Decrease quantity
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    // Add to cart
    const handleAddToCart = () => {
        dispatch(addToCart({ ...singleProduct, quantity }))
        
        setTimeout(()=>{
            navigate("/cart")
        },1000)
    }

    return (
        <div className="stepper-group flex gap-5">

            {/* Stepper */}
            <div className="stepper border w-20 rounded flex p-1 px-3">
                <button onClick={handleDecrease} className='w-10'>
                    <FaMinus />
                </button>

                <input
                    type="text"
                    value={quantity}
                    readOnly
                    className='w-full text-center outline-none'
                />

                <button onClick={handleIncrease} className='w-10'>
                    <FaPlus />
                </button>
            </div>

            {/* Add to cart */}
            <button
                onClick={handleAddToCart}
                className='flex cursor-pointer bg-black text-white rounded items-center gap-1 justify-center border w-38.5 p-1'
            >
                <BiCartAdd />
                <span className='font-semibold'>Add to cart</span>
            </button>

            {/* Buy Now */}
            <div className="flex gap-1 items-center w-26.5 border p-1 rounded justify-center">
                <Link to="/checkout">
                    <BiCartDownload />
                </Link>
                <span className='font-semibold'>Buy Now</span>
            </div>

        </div>
    )
}

export default StepperGroup