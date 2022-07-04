import React from 'react'

const Image = ({ imgUrl, size, outlined }) => {
    return (
        <>
            <img src={imgUrl} alt="facebook icon" className={`${size} rounded-full ${outlined}`} />
        </>
    )
}

export default Image