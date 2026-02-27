import React from 'react'
import Container from '../components/common/Container/Container'
import TextArea from './SeconParts/TextArea';
import ImageArea from './SeconParts/ImageArea';
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SecondaryProduct() {

    const products = useSelector(state => state.product.products);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <Container>
            <div className="mt-10 product-slider ">
                <Slider {...settings}>
                    {products?.map((item, i) => (
                        <div key={i} className='px-2'>
                            <div className='w-full h-122 p-2 bg-white rounded group'>
                                <ImageArea item={item} />
                                <TextArea item={item} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Container>
    )
}

export default SecondaryProduct;