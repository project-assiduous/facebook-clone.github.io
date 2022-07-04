import React from 'react'
import { MdVideoCall } from 'react-icons/md'
import Image from '../HeaderFiles/Image'

const index = () => {
    return (
        <>
            <div className="my-4 bg-white px-4 py-3 rounded-lg shadow flex items-center gap-4">
                <button className="items-center border-2 gap-2 rounded-full inline-flex py-2 px-3">
                    <MdVideoCall className='text-2xl text-[#4A00E0]' />
                    <p className='text-transparent font-semibold text-sm bg-clip-text bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2]'>Create room</p>
                </button>

                <section className='relative'>
                    <Image
                        imgUrl='https://art-facto.today/wp-content/uploads/2014/04/uifaces-kolage.jpg'
                        size='h-[2.6rem] w-[2.6rem]'
                        outlined='border'
                    />
                    <div className='inline absolute bottom-0 right-0 h-[.7rem] w-[.7rem] border-[2.2px] border-white bg-green-600 rounded-full'></div>
                </section>

                <section className='relative'>
                    <Image
                        imgUrl='https://art-facto.today/wp-content/uploads/2014/04/uifaces-kolage.jpg'
                        size='h-[2.6rem] w-[2.6rem]'
                        outlined='border'
                    />
                    <div className='inline absolute bottom-0 right-0 h-[.7rem] w-[.7rem] border-[2.2px] border-white bg-green-600 rounded-full'></div>
                </section>

                <section className='relative'>
                    <Image
                        imgUrl='https://art-facto.today/wp-content/uploads/2014/04/uifaces-kolage.jpg'
                        size='h-[2.6rem] w-[2.6rem]'
                        outlined='border'
                    />
                    <div className='inline absolute bottom-0 right-0 h-[.7rem] w-[.7rem] border-[2.2px] border-white bg-green-600 rounded-full'></div>
                </section>

                <section className='relative'>
                    <Image
                        imgUrl='https://art-facto.today/wp-content/uploads/2014/04/uifaces-kolage.jpg'
                        size='h-[2.6rem] w-[2.6rem]'
                        outlined='border'
                    />
                    <div className='inline absolute bottom-0 right-0 h-[.7rem] w-[.7rem] border-[2.2px] border-white bg-green-600 rounded-full'></div>
                </section>

                <section className='relative'>
                    <Image
                        imgUrl='https://art-facto.today/wp-content/uploads/2014/04/uifaces-kolage.jpg'
                        size='h-[2.6rem] w-[2.6rem]'
                        outlined='border'
                    />
                    <div className='inline absolute bottom-0 right-0 h-[.7rem] w-[.7rem] border-[2.2px] border-white bg-green-600 rounded-full'></div>
                </section>
            </div>
        </>
    )
}

export default index