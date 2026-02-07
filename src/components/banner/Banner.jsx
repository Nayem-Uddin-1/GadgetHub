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
    { id: 1, text: "Slide 1" },
    { id: 2, text: "Slide 2" },
    { id: 3, text: "Slide 3" },
   ];

    return (
        <Container>
            <div className="flex gap-3 mt-10 ">
                <div className='w-[30%] h-122.25 rounded bg-white relative ' >

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
                        <div ref={subCategoryRef} >
                            <ul
                                className='w-50 card-ul bg-white shadow-2xs rounded absolute -right-50 top-0  '>

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





                <div className='w-[40%] h-122.25 border ' >
                    <div className="border h-full w-full ">
                        <Slider {...settings}>
                            {items.map((item) => (
                                <div key={item.id} className="p-4 bg-gray-200 text-center rounded">
                                    {item.text}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className='w-[30%] h-122.25 border' >3</div>
            </div>

        </Container>
    )
}

export default Banner