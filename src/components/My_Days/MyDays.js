import React from 'react'
import { GoPlus } from 'react-icons/go'
import Card from './Card'

const MyDays = () => {
    return (
        <>
            <div className="flex flex-wrap gap-2 overflow-x-auto">
                <figure className="h-[12.5rem] bg-white w-[7.5rem] rounded-xl shadow flex flex-col justify-between relative cursor-pointer overflow-hidden">
                    <section className="overflow-hidden">
                        <img src="https://www.uselooper.com/assets/images/avatars/uifaces1.jpg"
                            alt="My Day Card"
                            className="rounded-tl-xl rounded-tr-xl h-[9.5rem] object-cover object-center hover:transform hover:scale-105 transition-transform transition-duration-600"
                        />
                    </section>
                    <button className="absolute bottom-8 border-4 border-white rounded-full font-normal p-1 text-xl bg-blue-500 text-white left-[50%] transform -translate-x-[50%]">
                        <GoPlus />
                    </button>

                    <p className="text-xs font-semibold tracking-wider text-center mb-2">Create story</p>
                </figure>

                <Card
                    userProfile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMS4qFPYNfvfLl60DiVWsXxu_xG8sXY209A&usqp=CAU'
                    myDayUrl='https://data.whicdn.com/images/279124825/original.jpg'
                    userName='Jovelyn Laforteza'
                />
                <Card
                    userProfile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMS4qFPYNfvfLl60DiVWsXxu_xG8sXY209A&usqp=CAU'
                    myDayUrl='https://data.whicdn.com/images/279124825/original.jpg'
                    userName='Jovelyn Laforteza'
                />
                <Card
                    userProfile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMS4qFPYNfvfLl60DiVWsXxu_xG8sXY209A&usqp=CAU'
                    myDayUrl='https://data.whicdn.com/images/279124825/original.jpg'
                    userName='Jovelyn Laforteza'
                />
                <Card
                    userProfile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMS4qFPYNfvfLl60DiVWsXxu_xG8sXY209A&usqp=CAU'
                    myDayUrl='https://data.whicdn.com/images/279124825/original.jpg'
                    userName='Jovelyn Laforteza'
                />
            </div>
        </>
    )
}

export default MyDays