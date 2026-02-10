import React from 'react'
import Container from '../common/Container/Container'
import Products from '../../Products/Products'
import { Link } from 'react-router-dom'

function FeaturedProductDisplay({data}) {
    return (
        <Container>

            <div className='flex flex-col md:flex-row gap-10 justify-center bg-[#F7F7F7] py-10 mt-20 ' >


                <div className='w-[300px] mx-auto md:mx-0 md:w-[389px] relative h-[380px] md:h-[420px]  '>
                    <img src="https://www.journal-theme.com/5/catalog/view/theme/journal3/image.php/051c64e1f3b5167d.webp/300-300-h/catalog/journal3/assets/demos/5/v1/Blocks/block-1.jpg" alt="" className='w-full h-full rounded ' />

                    <div className='absolute top-10 left-10'>
                        <p className='bg-[#FFEBEB] w-[130px] text-center rounded p-1 mb-2 ' >Up to 70% Off</p>
                        <h3 className='text-[25px] text-white font-bold mb-2' >Shop Mobile</h3>
                        <div className="flex items-start">
                            <span className="font-bold text-gray-200 mt-1 mr-2">From</span>

                            <div className="flex text-white">
                                <span className="text-5xl  ">$299</span>
                                <span className="text-2xl font-bold mt-1">.99</span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-10">
                        <Link className='bg-amber-500 py-3 px-10 rounded '>Shop Now</Link>
                    </div>


                </div>


               <Products name={data} />








            </div>



        </Container>
    )
}

export default FeaturedProductDisplay