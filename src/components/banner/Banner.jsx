import React, { useEffect, useRef, useState } from 'react'
import Container from '../common/Container/Container'
import { PiDeviceMobileSpeakerLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





function Banner() {

    const [disModal, setDisModal] = useState(false)

    const subCategoryRef = useRef(null);


    useEffect(() => {

        const handleClickOutside = (e) => {
            if (subCategoryRef.current && !subCategoryRef.current.contains(e.target)) {
                setDisModal(false)
            }

        }


        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);


    const settings = {
        infinite: true,       // infinite loop
        speed: 500,           // transition speed
        slidesToShow: 1,      // how many slides to show at once
        slidesToScroll: 1,    // how many slides to scroll per swipe
        autoplay: true,       // automatic sliding
        autoplaySpeed: 2000,  // autoplay interval in ms
        arrows: true,         // show next/prev arrows
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
            <div className="flex gap-3 mt-10 ">
                <div className='w-[20%] h-122.25 rounded bg-white relative ' >

                    {/* main category list */}
                    <ul onMouseEnter={() => setDisModal(true)} className='flex gap-2 items-center border-b-2 p-5 cursor-pointer border-gray-300 ' >

                        <PiDeviceMobileSpeakerLight className='text-[40px]' />
                        <li className='flex justify-between items-center w-full cursor-pointer group ' >
                            <span className='group-hover:border-b group-hover:border-dotted'>Mobile</span>
                            <IoIosArrowForward className='text-gray-400 group-hover:text-black ' />
                        </li>
                    </ul>

                    {/* subcategory list */}
                    {
                        disModal &&
                        <div ref={subCategoryRef} className='z-1000'  >
                            <ul
                                className='w-50 card-ul bg-white shadow-2xs rounded absolute -right-50 top-0 z-100 '>

                                <li className='flex justify-between hover:bg-gray-200 items-center w-full cursor-pointer group p-5 ' >
                                    <span className='group-hover:border-b group-hover:border-dotted'>Phones</span>
                                    <IoIosArrowForward className='text-gray-400  group-hover:text-black ' />
                                </li>
                                <li className='flex justify-between hover:bg-gray-200 items-center w-full cursor-pointer group p-5 ' >
                                    <span className='group-hover:border-b group-hover:border-dotted'>Phones</span>
                                    <IoIosArrowForward className='text-gray-400  group-hover:text-black ' />
                                </li>




                            </ul>
                        </div>

                    }

                </div>





                <div className='w-[60%] h-122.25 banner-slider ' >
                    <Slider {...settings}>
                        {items.map((item) => (
                            <div key={item.id} className=" w-full h-122.25">
                                <div className="relative w-full h-full rounded overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.text}
                                        className="w-full h-full object-cover"
                                    />                                  
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>


                <div className='w-[20%] h-122.25 border' >3</div>
            </div>

        </Container>
    )
}

export default Banner