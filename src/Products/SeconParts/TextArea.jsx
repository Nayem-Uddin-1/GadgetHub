import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgPentagonDown } from "react-icons/cg";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { LuChevronUp, LuChevronDown } from 'react-icons/lu';
import { BiCartAdd } from "react-icons/bi";




function TextArea({item}) {

    const [val, setVal] = useState(1);
 
    return (
        <>

            <div className='p-2 flex justify-center gap-2 flex-col '>
                <h3 className='  ' >{item.categories[1]} </h3>
                <Link className=' hover:text-blue-500 hover:underline ' >{item.name}</Link>
                <h3 className='text-gray-800 font-semibold ' >$ {item.price} </h3>

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

        </>
    )
}

export default TextArea