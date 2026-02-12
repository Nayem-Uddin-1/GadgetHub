import React from 'react'
import Breadcrumb from './Breadcrumb'
import Container from '../common/Container/Container'
import ImageArea from '../../Products/SeconParts/ImageArea'
import { Prods } from '../../api/productApi'
import TextArea from './ProductInfo_/TextArea'
import TabsList from './Tabs_/TabsList'
import TitlePage from '../../pages/TitlePage'

function SingleProduct() {

    const product = Prods[0]

    return (
        <section className="border">
            <Breadcrumb />
            <TitlePage title={"Pro Phone 13 Pro Demo Mock-up"} />
            <Container>

                {/* ========= TOP SECTION (Image + Text) ========= */}
                <div className="flex gap-12 mt-10">

                    {/* LEFT SIDE - IMAGES */}
                    <div className="w-[688px] flex-shrink-0">

                        {/* Main Image */}
                        <ImageArea
                            image={product.images[0]}
                            className="h-[688px] bg-[#EBEBF0]"
                        />

                        {/* Thumbnails */}
                        <div className="mt-8 flex gap-3">
                            {product.images.slice(0, 5).map((img, index) => (
                                <div
                                    key={index}
                                    className="w-24 h-24 border rounded border-gray-300"
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

                    {/* RIGHT SIDE - TEXT AREA */}
                    <div className="flex-1">
                        <TextArea />
                    </div>

                </div>

                {/* ========= TABS / TABLE SECTION ========= */}


            </Container>

            <TabsList />

            <div className="h-screen"></div>

        </section>
    )
}

export default SingleProduct
