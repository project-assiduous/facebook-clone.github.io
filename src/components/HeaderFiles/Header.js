import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { HiOutlineMenu } from 'react-icons/hi'
import { GoPlus } from 'react-icons/go'
import { BsMessenger } from 'react-icons/bs'
import { HiBell } from 'react-icons/hi'
import NavIcon from './Navicon'
import Image from './Image'
import TabletNavicon from '../HeaderFiles/TabletNavicon'
import DesktopNavicon from '../HeaderFiles/DesktopNavicon'

// Icons -> Make it JSON file sooner
import { AiOutlineHome } from 'react-icons/ai'
// import { AiFillHome } from 'react-icons/ai'

// import { BsCollectionPlay } from 'react-icons/bs'
import { BsCollectionPlayFill } from 'react-icons/bs'

import { RiStore2Line } from 'react-icons/ri'
// import { RiStore2Fill } from 'react-icons/ri'

import { HiOutlineUserGroup } from 'react-icons/hi'
// import { HiUserGroup } from 'react-icons/hi'

import { IoGameControllerOutline } from 'react-icons/io5'



const Header = () => {
    return (
        <>
            <header
                className="px-2 bg-white drop-shadow h-[3.5rem] flex items-center fixed top-0 w-full"
                style={{ zIndex: 100000 }}
            >
                <nav className="flex justify-between text-xl w-full">
                    <div className="inline-flex items-center gap-[1px] lg:w-[500px]">
                        <Image imgUrl='https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png' size='h-[3.7rem] w-[3.7rem]' />

                        <section className="hidden lg:flex rounded-full bg-gray-100 items-center justify-start gap-1 w-[15rem] p-[.7rem]">
                            <IoSearch className="font-[400] text-gray-500" />
                            <input type="text" placeholder="Search Facebook" className="text-sm bg-transparent focus:outline-none placeholder:text-gray-400 placeholder:font-[300] placeholder:tracking-wide" />
                        </section>

                        <section className='lg:hidden'>
                            <NavIcon icon={<IoSearch />} color='text-gray-800' />
                        </section>

                        <button className="text-3xl ml-5 md:hidden"><HiOutlineMenu /></button>
                    </div>

                    <menu className='lg:grid grid-cols-5 items-center gap-2 hidden w-full max-w-lgMaxWidth mx-auto'>
                        <DesktopNavicon icon={<AiOutlineHome />} className="w-[7.5rem]" />
                        <DesktopNavicon isActive icon={<BsCollectionPlayFill />} />
                        <DesktopNavicon icon={<RiStore2Line />} />
                        <DesktopNavicon icon={<HiOutlineUserGroup />} />
                        <DesktopNavicon icon={<IoGameControllerOutline />} />
                    </menu>

                    <section className="flex items-center lg:w-[500px] justify-end">
                        <menu className='md:grid grid-cols-5 items-center mr-8 gap-1 hidden lg:hidden'>
                            <TabletNavicon icon={<AiOutlineHome />} />
                            <TabletNavicon isActive icon={<BsCollectionPlayFill />} />
                            <TabletNavicon icon={<RiStore2Line />} />
                            <TabletNavicon icon={<HiOutlineUserGroup />} />
                            <TabletNavicon icon={<HiOutlineMenu />} />
                        </menu>
                        <section className="flex items-center gap-2">
                            <NavIcon icon={<GoPlus />} color='text-black' fWeight='font-black' />
                            <NavIcon icon={<BsMessenger />} color='text-black' fWeight='font-black' withNotification />
                            <NavIcon icon={<HiBell />} color='text-black' fWeight='font-black' withNotification />
                            <Image imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg' size='h-[2.7rem] w-[2.7rem]' outlined='border border-gray-100' />
                        </section>
                    </section>
                </nav>
            </header>
        </>
    )
}

export default Header