import React from 'react'
import { PiListChecks } from "react-icons/pi";
import Container from '../Container/Container';
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { LiaOpencart } from "react-icons/lia";
import { Link } from 'react-router-dom';
 




function MainNav() {

   
    

  return (
    <section className='bg-[#092A53] py-2'>
      <Container>

        <div className='hidden md:flex justify-between ' >
          <button className='bg-[#FED243] p-3 rounded flex items-center justify-center gap-2 pr-30' >
            <PiListChecks />
            All Depertments
          </button>

          <div className="flex gap-5 ">

            <Link to={"/Wishlist "} className='text-white flex gap-2 items-center justify-center'>
              <FaRegHeart />
              Wishlist
            </Link>
            <Link to={"/compare"} className='text-white  flex gap-2 items-center justify-center'>
              <FaCodeCompare />
              Compare
            </Link>

            <Link to={"/cart"} className='bg-[#FED243] p-3 rounded flex items-center justify-center gap-2 ' >
              0 item(s) - $0.00
              <LiaOpencart />

            </Link>


          </div>

        </div>

      </Container>
    </section>
  )
}

export default MainNav