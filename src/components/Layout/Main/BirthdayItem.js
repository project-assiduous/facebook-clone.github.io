import React from 'react'
import GiftBox from '../../../assets/images/gift-box.png'

const BirthdayItem = ({ userName, count }) => {
    return (
        <section className="cursor-pointer hover:bg-zinc-200 rounded-md p-2">
            <section className="flex items-center gap-2 py-2">
                <img src={GiftBox} alt="Gift box icon from flaticon" />
                <h1 className="w-[15rem] text-sm">
                    <span className='font-[600]'>{userName} </span>
                    and
                    <span className='font-[600]'> {count} others </span>
                    have birthdays today.
                </h1>
            </section>
        </section>
    )
}

export default BirthdayItem