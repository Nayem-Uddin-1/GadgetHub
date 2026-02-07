import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
    return (
        <div className='flex'>
            
            <div className='relative w-[371px] h-[221px] overflow-hidden rounded ' >
                <img src="https://www.journal-theme.com/5/catalog/view/theme/journal3/image.php/a0b9c9027f2a8e39.webp/740-440-h/catalog/journal3/assets/demos/5/v1/Banners/1.jpg" alt="" />


                <div className='absolute top-0 my-10 ml-5'>
                    <h3 className="text-xl font-bold  text-white py-2 ">Vision Pro</h3>
                    <div className='bg-white w-27.5 rounded text-center py-1 mb-3  '> <span className='text-gray-400 ' >from</span> <span className='font-bold' >$999</span> </div>
                    <Link className=' border-b border-dotted  text-white font-bold  ' >Shop Now</Link>

                </div>


            </div>


        </div>
    )
}

export default Card