import React from 'react'
import { FaSearchPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ImageArea() {
    return (
        <>

            <div className='h-[284px] bg-gray-100 relative ' >
                <img src="https://www.journal-theme.com/5/catalog/view/theme/journal3/image.php/21f2a0a612c9a99c.webp/350-350/catalog/journal3/catalog/categories/electronics/audio-headphones/headphones/noise-cancelling-headphones/noise-cancelling-headphones.png" alt="" className='' />

                {/* Pre-order section */}
                <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden z-10">
                    <div className="absolute top-4 -left-8 w-32 py-1 bg-red-50 text-red-500 text-xs font-bold text-center uppercase tracking-wider transform -rotate-45 border-y border-red-100 shadow-sm">
                        Pre-Order
                    </div>
                </div>

                {/* new bedge */}
                <h2 className='border border-blue-500 text-center rounded bg-blue-100 text-blue-500 w-[50px] p-1 font-semibold absolute top-3 right-3 '>New</h2>

                {/* Zoom/Seach item */}
                <Link className='border rounded opacity-0 invisible
                                       translate-y-2
                                       group-hover:opacity-100
                                       group-hover:visible
                                       group-hover:translate-y-0
                                       transition-all duration-300 
                                       ease-out p-2 absolute bottom-3 left-3 '>
                    <FaSearchPlus />

                </Link>
            </div>
        </>
    )
}

export default ImageArea