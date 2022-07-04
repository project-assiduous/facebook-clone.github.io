import React from 'react'
import Image from './HeaderFiles/Image'
import { GoGlobe } from 'react-icons/go'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlineLike } from 'react-icons/ai'
import { FiMessageSquare } from 'react-icons/fi'
import { RiShareForwardLine } from 'react-icons/ri'

const Post = () => {
    return (
        <>
            <div className="bg-white rounded-lg px-4 py-3 shadow my-4">
                <section className="flex items-center justify-between">
                    <section className='flex items-start gap-2'>
                        <Image
                            imgUrl='https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=400x300&vertical=top'
                            size='h-[2.6rem] w-[2.6rem]'
                            outlined='border'
                        />
                        <section>
                            <h1 className='font-[500] text-sm'>German Cut</h1>
                            <section className='flex gap-2 items-center'>
                                <p className='text-xs font-[300]'>2 hrs</p>
                                <p className='text-gray-500 text-sm'>•</p>
                                <GoGlobe className='text-sm text-gray-600' />
                            </section>
                        </section>
                    </section>

                    <button>
                        <BiDotsHorizontalRounded className='text-2xl text-gray-800' />
                    </button>
                </section>

                <section className='my-3'>
                    <h1>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus, eaque amet sunt in odio laborum suscipit numquam dolore sequi sint!
                    </h1>
                </section>

                <section className='my-2'>
                    <section className="border-b mt-3"></section>
                    <section className='my-2 grid grid-cols-3'>
                        <button className='flex items-center gap-1 text-gray-800 hover:bg-gray-200 justify-center transition transition-duration-200 py-2 rounded-md'>
                            <AiOutlineLike className='text-xl' />
                            <h1 className='font-semibold text-sm'>Like</h1>
                        </button>
                        <button className='flex items-center gap-1 text-gray-800 hover:bg-gray-200 justify-center transition transition-duration-200 py-2 rounded-md'>
                            <FiMessageSquare className='text-xl' />
                            <h1 className='font-semibold text-sm'>Comment</h1>
                        </button>
                        <button className='flex items-center gap-1 text-gray-800 hover:bg-gray-200 justify-center transition transition-duration-200 py-2 rounded-md'>
                            <RiShareForwardLine className='text-xl' />
                            <h1 className='font-semibold text-sm'>Share</h1>
                        </button>
                    </section>
                    <section className="border-b mb-4"></section>
                </section>

                <section className='flex items-center gap-2'>
                    <Image imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg' size='h-[2.5rem] w-[2.5rem]' outlined='border border-gray-100' />
                    <input
                        type='text'
                        className="flex-1 bg-gray-200/70 rounded-full py-2 px-3 text-black focus:outline-none"
                        placeholder='Write a comment...' />
                </section>
            </div>
        </>
    )
}

export default Post