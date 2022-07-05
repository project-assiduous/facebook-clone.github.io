import React from 'react'

const SponsoredCard = ({ imgUrl, headingTitle, website }) => {
    return (
        <section className="flex justify-start items-center gap-3 cursor-pointer hover:bg-gray-200 rounded-md p-2">
            <figure className="w-[133px] h-[81px] flex items-center">
                <img
                    src={imgUrl}
                    alt="plural site ad banner"
                    className='w-full object-cover object-center rounded-md'
                />
            </figure>
            <section className="w-[12rem]">
                <h4 className="font-[600] text-sm">{headingTitle}</h4>
                <a href={website} className='text-xs text-gray-500 font-[400]'>{website}</a>
            </section>
        </section>
    )
}

export default SponsoredCard