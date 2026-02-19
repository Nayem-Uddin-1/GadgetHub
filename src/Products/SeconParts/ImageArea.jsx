import React, { useState } from 'react'
import { FaSearchPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ImageArea({ singleProduct, className }) {


    console.log("imagearea", singleProduct);

    const [mainImage, setMainImage] = useState(singleProduct?.images[0])


    return (
        <>

            <div>
                <div className={`h-[284px] bg-gray-100 relative ${className} `} >
                    <img src={mainImage} alt="" className='w-full h-full' />

                    {/* Pre-order section */}
                    {singleProduct?.stock === 0 && (
                        <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden z-10">
                            <div className="absolute top-4 -left-8 w-32 py-1 bg-red-50 text-red-500 text-xs font-bold text-center uppercase tracking-wider transform -rotate-45 border-y border-red-100 shadow-sm">
                                Pre-Order
                            </div>
                        </div>
                    )}

                    {/* new bedge */}

                    {singleProduct?.isNew && (
                        <h2 className='border border-blue-500 text-center rounded bg-blue-100 text-blue-500 w-[50px] p-1 font-semibold absolute top-3 right-3'>
                            New
                        </h2>
                    )}



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

                {/* Images */}

                <div className="mt-8 flex gap-3">
                    {singleProduct?.images.map((img, index) => (
                        <div
                            key={index}
                            className={`w-24 h-24 border rounded  cursor-pointer ${mainImage === img ? "border-green-500" : "border-gray-300"}   `}
                            onClick={() => setMainImage(img)}
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ImageArea