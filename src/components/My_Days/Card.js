import React from 'react'

const Card = ({ userProfile, myDayUrl, userName }) => {
    return (
        <figure className="h-[12.5rem] bg-white w-[130px] rounded-xl shadow cursor-pointer overflow-hidden relative">
            <figure className="absolute top-3 h-[2.6rem] w-[2.6rem] rounded-full border-4 border-blue-500 ml-2 z-50">
                <img src={userProfile} alt="user name" className="rounded-full z-50 h-full w-full object-cover object-center" />
            </figure>
            <div
                style={{ backgroundImage: `url(${myDayUrl})` }}
                className={`h-full w-full bg-cover bg-center hover:transform hover:scale-105 transition-transform transition-duration-600`}
            >
                <div className='w-full h-full bg-black/30'></div>
            </div>
            <p className="text-xs font-semibold tracking-wider text-left ml-3 text-white leading-[.9rem] absolute bottom-0 mb-2">{userName}</p>
        </figure>
    )
}

export default Card

// bg-[url('https://data.whicdn.com/images/279124825/original.jpg')]