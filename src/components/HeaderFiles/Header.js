import React from 'react'
import { IoSearch } from 'react-icons/io5'
import { HiOutlineMenu } from 'react-icons/hi'
import { GoPlus } from 'react-icons/go'
import { BsMessenger } from 'react-icons/bs'
import { HiBell } from 'react-icons/hi'
import NavIcon from './Navicon'
import Image from './Image'

const Header = () => {
    return (
        <>
            <header className="px-2 bg-white drop-shadow h-[3.5rem] flex items-center">
                <nav className="flex justify-between text-xl w-full">
                    <div className="flex items-center gap-[1px]">
                        <Image imgUrl='https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png' size='h-[3.7rem] w-[3.7rem]' />
                        <section>
                            <NavIcon icon={<IoSearch />} color='text-gray-800' />
                        </section>

                        <button className="text-3xl ml-5"><HiOutlineMenu /></button>

                    </div>
                    <section className="flex items-center gap-2">
                        <NavIcon icon={<GoPlus />} color='text-black' fWeight='font-black' />
                        <NavIcon icon={<BsMessenger />} color='text-black' fWeight='font-black' withNotification />
                        <NavIcon icon={<HiBell />} color='text-black' fWeight='font-black' withNotification />
                        <Image imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg' size='h-[2.7rem] w-[2.7rem]' outlined='border border-gray-100' />
                    </section>
                </nav>
            </header>
        </>
    )
}

export default Header