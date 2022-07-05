import React from 'react'
import Left from '../components/Layout/Main/Left'
import Middle from '../components/Layout/Main/Middle'
import Right from '../components/Layout/Main/Right'
import { FiEdit } from 'react-icons/fi'

const Main = () => {
    return (
        <div className="flex lg:flex-col relative">
            <Left />
            <Middle />
            <Right />
            <button className="bg-white shadow-xl rounded-full h-[3.1rem] w-[3.1rem] z-50 grid place-items-center fixed bottom-4 right-4">
                <FiEdit className="text-xl" />
            </button>
        </div>
    )
}

export default Main