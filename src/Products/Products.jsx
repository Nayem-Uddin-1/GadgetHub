import React from 'react'
import Container from '../components/common/Container/Container'
import { BiCartAdd } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";

import { Prods } from '../api/productApi';



function Products({ type ,name }) {


    return (
        <>
            <div>
                <div className="text flex justify-between mb-3">
                    <h3>{name} </h3>
                    <Link>See All</Link>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' >
                    {
                        Prods.map((item, i) => (
                            <div className="bg-white w-[309px] p-2 flex gap-3 ">
                                <div className='w-25 h-25 bg-gray-100  '>
                                    <img src="https://www.journal-theme.com/5/catalog/view/theme/journal3/image.php/ce582b68cfaaf896.webp/350-350/catalog/journal3/catalog/categories/electronics/mobile/phones/pro-phone-13-pro-demo-mock-up/pro-phone-13-pro-demo-mock-up.png" alt="" />
                                </div>

                                <div className="text-area flex flex-col gap-1  ">
                                    <Link className="block max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap hover:border-b hover:border-dotted hover:text-blue-500 ">
                                        {item.name}
                                    </Link>
                                    <h4 className='font-bold' >${item.price} </h4>
                                    <h4 className='text-red-500 font-thin text-[14px] ' > <del>${item.price} </del> </h4>
                                    <div className='flex gap-4'>
                                        <Link className='text-gray-500 ' > <BiCartAdd /></Link>
                                        <Link className='text-gray-500 ' > <FaRegHeart /></Link>
                                        <Link className='text-gray-500 ' > <FaCodeCompare /></Link>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </>
    )
}

export default Products