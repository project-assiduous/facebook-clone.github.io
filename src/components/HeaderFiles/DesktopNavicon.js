import React from 'react'

const DesktopNavicon = ({ isActive, icon }) => {
    return (
        <li className='relative py-[.7rem] px-[1.5rem] hover:bg-zinc-200 flex justify-center items-center rounded-md cursor-pointer'>
            <p className={`text-3xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`} >{icon}</p>
        </li>
    )
}

export default DesktopNavicon