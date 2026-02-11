import React, { useState } from 'react'
import { IoChevronUp } from "react-icons/io5";
import { Link } from 'react-router-dom';


function ProductExtraText() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTwo, setIsOpenTwo] = useState(false);

    return (
        <div>
            {/* product extra text  */}
            <div className="prodcut-extra-text mt-10">
                <div className="panel-heading border-b-2 pb-7 mb-5">
                    <Link
                        onClick={() => setIsOpen(!isOpen)}
                        className={`flex justify-between items-center ${isOpen ? "pb-5 text-blue-500" : ""} `}>

                        Shipping & Returns
                        <IoChevronUp
                            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                }`}
                        />
                    </Link>
                    <div className="product-text">
                        {isOpen && (
                            <div className="">
                                <p>
                                    Create unlimited custom product blocks and display them in
                                    accordions or tabs or open blocks. Each block can be assigned
                                    to all products at once or specific products according to
                                    advanced criteria.
                                </p>
                                <Link className='border-b border-dotted text-blue-500 font-semibold' >
                                    advanced criteria.
                                </Link>
                            </div>

                        )}

                    </div>
                </div>

                {/*  */}
                <div className="panel-heading pb-7 ">
                    <Link
                        onClick={() => setIsOpenTwo(!isOpenTwo)}
                        className={`hover:text-blue-500 flex  justify-between items-center ${isOpenTwo ? "pb-5 text-blue-500" : ""} `}>

                        Additional Product Info
                        <IoChevronUp
                            className={`transition-transform duration-300 ${isOpenTwo ? "rotate-180" : ""
                                }`}
                        />
                    </Link>
                    <div className="product-text">
                        {isOpenTwo && (
                            <div className="">
                                <p>
                                    Create unlimited custom product blocks and display them in
                                    accordions or tabs or open blocks. Each block can be assigned
                                    to all products at once or specific products according to
                                    advanced criteria.
                                </p>
                                <Link className='border-b border-dotted text-blue-500 font-semibold' >
                                    advanced criteria.
                                </Link>
                            </div>

                        )}

                    </div>
                </div>
            </div>

            <hr className='mt-10 text-gray-400 ' />
        </div>
    )
}

export default ProductExtraText