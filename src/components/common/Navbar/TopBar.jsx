import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import SearchBar from './searchbar/SearchBar'
import { BiDollar } from "react-icons/bi";
import GroupButton from './buttonGroup/GroupButton';
import { FaRegUser } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { RiBloggerLine } from "react-icons/ri";





function TopBar() {
  return (
    <section className='bg-[#092A53] text-[36px] '>
      <Container>
        <div className='flex items-center gap-30 py-5'>
          <Link to={"/"} className='logoFont text-white text-5xl ' >
            Gadget<span className='text-red-500' >.</span>Hub
          </Link>
          <div className="flex justify-between items-center gap-10 ">

            <SearchBar />

            {/* country img */}
            <div className='flex gap-3'>
              <button className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-lg bg-transparent hover:bg-white/10 transition-colors">
                <img
                  src="https://flagcdn.com/w80/gb.png"
                  alt="UK Flag"
                  className="w-7 h-auto"
                />
              </button>

              <button className="flex items-center justify-center w-12 h-12 border-2 border-white rounded-lg bg-transparent hover:bg-white/10 transition-colors" >
                <BiDollar className="text-white text-2xl" />
              </button>
            </div>

            {/* buttons */}
            <div className='flex gap-3'>
              <GroupButton icon={<FaRegUser />} text="Account" />
              <GroupButton icon={<CgMail />} text="Contact" />
              <GroupButton icon={<RiBloggerLine />} text="Blog" />
            </div>

          </div>



        </div>
      </Container>
    </section>
  )
}

export default TopBar