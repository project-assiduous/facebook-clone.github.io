import React from 'react'

const Post_Content = ({ icon, title }) => {
    return (
        <>
            <button className="cursor-pointer flex items-center gap-1 py-2 rounded-lg hover:bg-gray-200 justify-center transition transition-duration-200">
                <img src={icon} alt={title} className="h-[1.7rem] w-[1.7rem]" />
                <p className="text-sm font-[600] text-gray-500">{title}</p>
            </button>
        </>
    )
}

export default Post_Content