import React from 'react'
import { BsSearch } from "react-icons/bs";
import { HiOutlineSearch } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';


function SearchBar({type}) {
    return (
        <div className={`search-bar w-full  hidden bg-white md:flex justify-center items-center rounded border-gray-300 ${type === "menu-bar" ? "flex md:hidden" : "hidden md:flex"} ` }>
            <div className="flex items-center gap-1 px-4 text-gray-600 cursor-pointer border-r border-gray-200 h-full">
                <span className="text-sm font-normal">All</span>
                <IoMdArrowDropdown className="text-lg" />
            </div>


            <input type="text" className='border-none bg-white w-full ' />
            <button className="px-4 flex items-center justify-center cursor-pointer">
                <HiOutlineSearch className="text-2xl text-gray-500" />
            </button>

        </div>
    )
}

export default SearchBar