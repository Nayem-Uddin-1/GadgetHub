import React from 'react'
import Breadcrumb from './Breadcrumb'
import Container from '../common/Container/Container'
import ImageArea from '../../Products/SeconParts/ImageArea'
import { Prods } from '../../api/productApi'
import TextArea from './ProductInfo_/TextArea'

import { FaStar } from "react-icons/fa";





function SingleProduct() {

    console.log(Prods[0].images[0]);




    return (
        <section className='border' >

            <Breadcrumb />
            <Container>
                <h3 className='py-5 text-3xl font-bold' >Pro Phone 13 Pro Demo Mock-up </h3>
                <div className='border-b-3 border-black w-15 '></div>
            </Container>

            <hr className='w-full' />

            <Container>
                <div className='flex' >
                    {/* Main Image... */}
                    <div className="w-[688px] h-[688px] ">

                        <ImageArea image={Prods[0].images[0]} className={`h-full bg-[#EBEBF0] `} />

                        {/* Images... */}
                        <div className="mt-3 flex gap-3 ">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="w-25 h-25 border rounded border-gray-300"
                                >
                                    <img
                                        src="https://www.journal-theme.com/5/catalog/view/theme/journal3/image.php/d673fc908c980942.webp/800-800/catalog/journal3/catalog/categories/electronics/mobile/phones/pro-phone-13-pro-demo-mock-up/pro-phone-13-pro-demo-mock-up-variant-color-gold.png"
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                    <div>
                        <TextArea />
                    </div>

                </div>


            </Container>


            <div className="h-screen"></div>

        </section>
    )
}

export default SingleProduct