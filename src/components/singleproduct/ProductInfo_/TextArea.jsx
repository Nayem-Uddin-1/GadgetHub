import React from 'react'
import { FaStar } from "react-icons/fa";

function TextArea() {
    return (
        <div>
            <div className='flex gap-3  items-center'>

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
                <h3>
                    from
                </h3>

                <h2>

                $730.22

                </h2>

                Ex Tax: $730.22

                 
                Price in reward points: 49
            </div>


        </div>
    )
}

export default TextArea