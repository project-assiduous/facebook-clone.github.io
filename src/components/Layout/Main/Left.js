import React from 'react'
import Item from '../../LeftLayoutFiles/Item'

const Left = () => {
    return (
        <div className="h-screen overflow-y-auto overflow-x-hidden pt-[4.8rem] fixed left-0 top-0  w-[350px] custom-sidebar">
            <section className="px-2 flex flex-col gap-1">
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='Mogyahid Ansid'
                />
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='Friends'
                />
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='Groups'
                />
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='Marketplace'
                />
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='Watch'
                />
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='Memories'
                />
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='See more'
                />

                <section>
                    <section className="border-b-2 my-2"></section>
                    <section className="flex justify-between items-center">
                        <h1 className="text-gray-600 font-semibold">Your shortcuts</h1>
                        <button className="text-blue-500 text-sm">Edit</button>
                    </section>
                </section>

                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='ReactJS Philippines'
                />
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='BS-IT Student to Professional '
                />
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='ReactJS Philippines'
                />
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='BS-IT Student to Professional '
                />
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='Show more'
                />

                <section className='text-xs flex items-center flex-wrap gap-[2px] text-gray-600 font-[400] mb-2'>
                    <a href="/#" className="hover:underline">Privacy</a>
                    <p className='font-[100]'>•</p>
                    <a href="/#" className="hover:underline">Terms</a>
                    <p className='font-[100]'>•</p>
                    <a href="/#" className="hover:underline">Advertising</a>
                    <p className='font-[100]'>•</p>
                    <a href="/#" className="hover:underline">Ad Choices</a>
                    <p className='font-[100]'>•</p>
                    <a href="/#" className="hover:underline">Cookies</a>
                    <p className='font-[100]'>•</p>
                    <a href="/#" className="hover:underline">More</a>
                    <p className='font-[100]'>•</p>
                    <a href="/#" className="hover:underline">Meta &copy; 2022</a>
                </section>
            </section>
        </div>
    )
}

export default Left