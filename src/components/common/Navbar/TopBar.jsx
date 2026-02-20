import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { RiBloggerLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import { CgMenuLeftAlt } from "react-icons/cg";

import Container from '../Container/Container'
import SearchBar from './searchbar/SearchBar'
import { BiDollar } from "react-icons/bi";
import GroupButton from './buttonGroup/GroupButton';
import { useSelector } from 'react-redux';






function TopBar() {

  const user = useSelector((state) => state.user.users);
  const firstLetter = user?.name?.charAt(0).toUpperCase();


  return (
    <section className='bg-[#092A53] text-[36px] '>
      <Container>
        <div className='flex items-center justify-between py-5'>

          <div className=' md:hidden text-white flex justify-center items-center' >
            <CgMenuLeftAlt />
          </div>

          <Link to={"/"} className='logoFont text-white sm:text-xl md:text-5xl ' >
            Gadget<span className='text-red-500' >.</span>Hub
          </Link>
          <div className="flex justify-between items-center gap-10 ">

            <SearchBar />

            {/* country img */}
            <div className=' hidden md:flex gap-3  '>
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
            <div className='hidden md:flex gap-3'>
              {user ?
                 <GroupButton alpha={firstLetter} type="later" />
                :
                <GroupButton icon={<FaRegUser />} text="Account" />}

              <GroupButton icon={<CgMail />} text="Contact" />
              <GroupButton icon={<RiBloggerLine />} text="Blog" />
            </div>

            <div className="flex  md:hidden  items-center gap-6 p-4 w-fit">
              <Link>
                <FiUser size={24} className="text-white cursor-pointer" />
              </Link>
              <Link>
                <LuHeart size={24} className="text-white cursor-pointer" />
              </Link>
              <Link to={"/cart"} ><LuShoppingBag size={24} className="text-white cursor-pointer" /></Link>
            </div>


          </div>







        </div>
        <SearchBar type="menu-bar" />
      </Container>
    </section>
  )
}

export default TopBar