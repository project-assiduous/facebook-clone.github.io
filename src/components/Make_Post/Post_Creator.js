import React from 'react'
import Image from '../HeaderFiles/Image'
import PostContent from './Post_Content'
import LiveVideo from '../../assets/images/live_video.png'
import Gallery from '../../assets/images/image_gallery.png'
import Feeling from '../../assets/images/feeling.png'


const Post_Creator = () => {
    return (
        <>
            <div className="mt-4 bg-white px-4 py-3 rounded-lg shadow">
                <section className="flex items-center gap-2">
                    <Image imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg' size='h-[2.7rem] w-[2.7rem]' outlined='border border-gray-100' />
                    <div className="flex-1 bg-gray-200/70 rounded-full py-2 px-3 text-gray-500">What's on your mind, Mogyahid?</div>
                </section>

                <section className="border-b mt-3 mb-4"></section>

                <section className="grid grid-cols-3 justify-center w-[95%]">
                    <PostContent icon={LiveVideo} title='Live video' />
                    <PostContent icon={Gallery} title='Photo/video' />
                    <PostContent icon={Feeling} title='Feeling/activity' />
                </section>
            </div>
        </>
    )
}

export default Post_Creator