import React from 'react'
import { FaRegUser } from "react-icons/fa";


function GroupButton({icon,text}) {
    return (
        <div>

            <button className='text-[20px] text-black p-3 rounded flex items-center gap-2 bg-white '>
                <span>{icon}</span>
                 <h3>{text}</h3>
            </button>


        </div>
    )
}

export default GroupButton