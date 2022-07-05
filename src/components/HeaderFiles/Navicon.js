import React from 'react'

const Navicon = ({ icon, color, fWeight, withNotification }) => {
    return (
        <>
            <section className='bg-zinc-200 p-[.7rem] rounded-full relative cursor-pointer'>
                <p className={`${color} inline ${fWeight}`}>{icon}</p>
                {
                    withNotification &&
                    <div className='absolute -top-1 -right-2 bg-red-500 text-white rounded-full h-[1.2rem] w-[1.2rem] flex items-center justify-center p-2'>
                        <p className='font-[500] text-[.85rem]'>6</p>
                    </div>
                }
            </section>
        </>
    )
}

export default Navicon