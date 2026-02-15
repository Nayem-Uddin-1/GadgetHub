import React from 'react'
import { FaRegUser } from "react-icons/fa";


function GroupButton({icon,text,alpha,type}) {
    return (
        <div>

            <button className={`text-[20px] text-black rounded cursor-pointer
                 flex items-center ${type==="later" ? "gap-0 p-2":"gap-2 p-3"} bg-white `}>
                <span>{icon}</span>
                 <h3>{text}</h3>
                 <h2 className='text-blue-900 text-4xl font-bold' >{alpha}</h2>
            </button>


        </div>
    )
}

export default GroupButton