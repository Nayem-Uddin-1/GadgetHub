import React from 'react'
import Breadcrumb from './Breadcrumb'
import Container from '../common/Container/Container'
import ImageArea from '../../Products/SeconParts/ImageArea'
import { Prods } from '../../api/productApi'
import TextArea from './ProductInfo_/TextArea'
import TabsList from './Tabs_/TabsList'
import TitlePage from '../../pages/TitlePage'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";

function SingleProduct() {

    const product = Prods[0]

    const { slug } = useParams();
    const products = useSelector((state => state.product.products))

    const singleProduct = products.find(
        product => product.slug === slug
    );

    console.log("single pro", );



    // if (!singleProduct) {
    //     return <h2>Product not found</h2>;
    // }



    return (
        <section className="border">
            <Breadcrumb singleProduct={singleProduct} />
            <TitlePage title={singleProduct.name} />
            <Container>

                {/* <h1>name {singleProduct.name} </h1> */}

                {/* ========= TOP SECTION (Image + Text) ========= */}
                <div className="flex gap-12 mt-10">

                    {/* LEFT SIDE - IMAGES */}
                    <div className="w-[688px] flex-shrink-0">

                        {/* Main Image */}
                        <ImageArea
                            item={product}
                            className="h-[688px] bg-[#EBEBF0]"
                            singleProduct={singleProduct}
                        />

                        {/* Images */}
                   

                    </div>

                    {/* RIGHT SIDE - TEXT AREA */}
                    <div className="flex-1">
                        <TextArea singleProduct={singleProduct} />
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
