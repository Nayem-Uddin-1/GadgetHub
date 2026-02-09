import React, { useState } from 'react'
import Container from '../components/common/Container/Container'
import { LuChevronUp, LuChevronDown } from 'react-icons/lu';
import { BiCartAdd } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";
import { CgPentagonDown } from "react-icons/cg";


import { Prods } from '../api/productApi';


function SecondaryProduct() {

    const [val, setVal] = useState(1);
    return (
        <Container>
            <div className="flex gap-5">
                {
                    Prods.map((item, i) => (
                        <div className='w-[300px] h-[468px] p-2 bg-white rounded group border ' >
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

                            <div className='p-2 flex justify-center gap-2 flex-col '>
                                <h3 className='  ' >category</h3>
                                <Link className=' hover:text-blue-500 hover:underline ' >title</Link>
                                <h3 className='text-gray-800 font-semibold ' >$555.6</h3>

                            </div>

                            <div className="icons border-t border-gray-300">

                                <div className='mt-3 mx-3 flex gap-3 items-center' >
                                    <div className="flex w-20 border border-gray-300 rounded overflow-hidden">
                                        {/* Input Display */}
                                        <span className="flex-1 flex items-center justify-center font-medium text-gray-800">
                                            {val}
                                        </span>

                                        {/* Controls */}
                                        <div className="flex flex-col border-l border-gray-300 bg-gray-50">
                                            <button
                                                onClick={() => setVal(v => v + 1)}
                                                className="px-2 border-b border-gray-300 hover:bg-gray-200"
                                            >
                                                <LuChevronUp size={14} />
                                            </button>
                                            <button
                                                onClick={() => setVal(v => Math.max(1, v - 1))}
                                                className="px-2 hover:bg-gray-200"
                                            >
                                                <LuChevronDown size={14} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className='flex gap-4 items-center'>
                                        <Link className='text-gray-500 flex items-center gap-1 '  > <BiCartAdd /> Add to cart </Link>
                                        <Link className='text-gray-500 ' > <FaRegHeart /></Link>
                                        <Link className='text-gray-500 ' > <FaCodeCompare /></Link>
                                    </div>


                                </div>

                            </div>

                        </div>
                    ))

                }
            </div>
        </Container>
    )
}

export default SecondaryProduct