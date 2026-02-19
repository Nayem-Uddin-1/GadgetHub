import React from 'react'
import Container from '../components/common/Container/Container'
import { BiCartAdd } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { FaCodeCompare } from "react-icons/fa6";
 



function Products({ type, name, products }) {
    
   

    return (
        <>
            <div>
                <div className="text flex px-3 md:px-0 justify-between mb-3">
                    <h3>{name} </h3>
                    <Link>See All</Link>
                </div>
                <div className='grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 gap-4' >
                    {
                        products.map((item, i) => (
                            <div className="bg-white  w-77.25 mx-auto md:mx-0  p-2 flex gap-3 ">
                                <div className='w-25 h-25 bg-gray-100  '>
                                    <img src={item.images[0]} alt="" />
                                </div>

                                <div className="text-area flex flex-col gap-1  ">
                                    <Link to={`/product/${item.slug}`} className="block max-w-45 overflow-hidden text-ellipsis whitespace-nowrap hover:border-b hover:border-dotted hover:text-blue-500 ">
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