import React from 'react'
import Left from '../components/Layout/Main/Left'
import Middle from '../components/Layout/Main/Middle'
import Right from '../components/Layout/Main/Right'

const Main = () => {
    return (
        <div className="flex flex-col items-start justify-center relative">
            <Left />
            <Middle />
            <Right />
        </div>
    )
}

export default Main