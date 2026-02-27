import React, { useEffect, useRef, useState } from 'react'
import Container from '../common/Container/Container'
import { PiDeviceMobileSpeakerLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import RightCard from './RightCard';

function Banner() {

    const [activeCategory, setActiveCategory] = useState(null);
    const subCategoryRef = useRef(null);

    const products = useSelector((state) => state.product.products);

    // ===============================
    // Create Category Structure
    // ===============================
    const categoryMap = {};

    products?.forEach((product) => {
        const [main, sub] = product.categories;

        if (!categoryMap[main]) {
            categoryMap[main] = [];
        }

        if (sub && !categoryMap[main].includes(sub)) {
            categoryMap[main].push(sub);
        }
    });

    const mainCategories = Object.keys(categoryMap);


    useEffect(() => {

        const handleClickOutside = (e) => {
            if (subCategoryRef.current && !subCategoryRef.current.contains(e.target)) {
                setActiveCategory(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);


    const settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    };

    const items = [
        {
            id: 1,
            text: "Slide 1",
            img: "https://www.journal-theme.com/5/catalog/view/theme/journal3/image.php/e503e7a78dc47849.webp/370-220-w/catalog/journal3/assets/demos/5/v1/Banners/4.jpg",
        },
        {
            id: 2,
            text: "Slide 2",
            img: "https://www.journal-theme.com/5/catalog/view/theme/journal3/image.php/cd1dc0119ed5a85c.webp/370-220-w/catalog/journal3/assets/demos/5/v1/Banners/2.jpg",
        },
        {
            id: 3,
            text: "Slide 3",
            img: "https://www.journal-theme.com/5/catalog/view/theme/journal3/image.php/a8f0919f2ae9e90e.webp/370-220-h/catalog/journal3/assets/demos/5/v1/Banners/3.png",
        },
    ];

    return (
        <Container>
            <div className="md:flex gap-3 md:h-132.25 mt-10">


                <div className='w-[20%] hidden md:block md:h-full rounded bg-white relative'>

                    {mainCategories.map((mainCat, index) => (
                        <ul
                            key={index}
                            onMouseEnter={() => setActiveCategory(mainCat)}
                            className='flex gap-2 items-center border-b-2 p-5 cursor-pointer border-gray-300'
                        >
                            <PiDeviceMobileSpeakerLight className='text-[40px]' />

                            <li className='flex justify-between items-center w-full cursor-pointer group'>
                                <span className='group-hover:border-b group-hover:border-dotted'>
                                    {mainCat}
                                </span>
                                <IoIosArrowForward className='text-gray-400 group-hover:text-black' />
                            </li>
                        </ul>
                    ))}


                    {activeCategory && (
                        <div
                            ref={subCategoryRef}
                            className="absolute left-full top-0 ml-2 bg-white shadow-lg rounded z-50 w-56"
                        >
                            <ul>
                                {categoryMap[activeCategory].map((subCat, i) => (
                                    <li
                                        key={i}
                                        className='flex justify-between hover:bg-gray-200 items-center w-full cursor-pointer group p-4'
                                    >
                                        <span className='group-hover:border-b group-hover:border-dotted'>
                                            {subCat}
                                        </span>
                                        <IoIosArrowForward className='text-gray-400 group-hover:text-black' />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>


                <div className='min-w-78 h-37.5 px-5 md:w-[60%] md:h-full banner-slider'>
                    <Slider {...settings}>
                        {items.map((item) => (
                            <div key={item.id} className="w-full h-full">
                                <div className="relative w-full h-full rounded overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.text}
                                        className="w-full h-37.5 md:h-132.25 object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>


                <div className='w-[20%] hidden md:block '>
                    <RightCard/>
                </div>

            </div>
        </Container>
    )
}

export default Banner;