import { useState } from 'react'
import Item from '../../LeftLayoutFiles/Item'
import TitleDivider from './TitleDivider'
import LeftData from '../../../data/left.json'


const Left = () => {
    const [seemore, setSeemore] = useState(false)

    return (
        <div className="hidden lg:block h-screen overflow-y-auto overflow-x-hidden pt-[4.8rem] fixed left-0 top-0  w-[350px] custom-sidebar">
            <section className="px-2 flex flex-col gap-1">
                <Item
                    imgUrl='https://www.uselooper.com/assets/images/avatars/uifaces1.jpg'
                    title='Mogyahid Ansid'
                />

                {
                    LeftData &&
                        seemore ?
                        LeftData.map(item => {
                            const { id, icon, title } = item //Destructure data from map
                            return (
                                <Item
                                    key={id}
                                    imgUrl={icon}
                                    title={title}
                                />
                            )
                        })
                        :
                        LeftData.slice(0, 5).map(item => {
                            const { id, icon, title } = item //Destructure data from map
                            return (
                                <Item
                                    key={id}
                                    imgUrl={icon}
                                    title={title}
                                />
                            )
                        })
                }

                {/* Show more button */}
                <button className="py-1 hover:bg-zinc-200 rounded-md" onClick={() => setSeemore(!seemore)}>
                    <section className="flex items-center gap-2 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-all transition-duration-700 ${seemore ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <h1 className="font-[600] text-sm">See more</h1>
                    </section>
                </button>

                <section>
                    <section className="border-b-2 my-2"></section>
                    <section className="flex justify-between items-center">
                        <TitleDivider title='Your shortcuts' />
                        <button className="text-blue-500 text-sm">Edit</button>
                    </section>
                </section>

                <Item
                    imgUrl='https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/72580117_2449937788595820_5737933847685758976_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeG5v0qrUS9bb5HFeCp1StZQdcVcAoEVRcZ1xVwCgRVFxp16Ra6sgM7A9JL_ts58_E08BnXfyrdQaGB7CuxV5ILG&_nc_ohc=Dvmjf8cTLSUAX_YjWaS&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9fWzKfOaCi6cWD_0p7B3-OD24rcxqLkmbNn9WQBy7fwQ&oe=62E92995'
                    title='ReactJS Philippines'
                    semiRounded
                />
                <Item
                    imgUrl='https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/72580117_2449937788595820_5737933847685758976_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeG5v0qrUS9bb5HFeCp1StZQdcVcAoEVRcZ1xVwCgRVFxp16Ra6sgM7A9JL_ts58_E08BnXfyrdQaGB7CuxV5ILG&_nc_ohc=Dvmjf8cTLSUAX_YjWaS&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9fWzKfOaCi6cWD_0p7B3-OD24rcxqLkmbNn9WQBy7fwQ&oe=62E92995'
                    title='BS-IT Student to Professional'
                    semiRounded
                />
                <Item
                    imgUrl='https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/121012055_3639874582700200_2380852676394405157_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeHVxgbY6iVtFZEdd5zSnr9gjJDuFVLrER6MkO4VUusRHvSncg3NN9dsg8nGLLc8c5fCdBkeLeEBp1rRqcxGL27S&_nc_ohc=JGOb555j07UAX-EbitW&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT9V7bAmlfKgHYBGkxF8MKvTSR0YupZM0V9Ye33smkudgQ&oe=62E8AE4B'
                    title='ReactJS Philippines'
                    semiRounded
                />
                <Item
                    imgUrl='https://scontent.fdvo2-1.fna.fbcdn.net/v/t1.6435-9/33105813_1918737428201511_1687826614370435072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeEAxVD-wqwQi0OTWJYPiPm_nTL6d91EMPqdMvp33UQw-taZX_UdLVtRIpFTmG1OlMn3HUtcBYk9IKB4vT-rCso3&_nc_ohc=SJYpbWGqEj0AX-X2odI&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT8yPE26-QhekG2Nr9oraPC4AUXML-wpUCaoCc3ys34UWA&oe=62E97A53'
                    title='BS-IT Student to Professional'
                    semiRounded
                />

                {/* Show more button */}
                <button className="py-1 hover:bg-zinc-200 rounded-md">
                    <section className="flex items-center gap-2 py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <h1 className="font-[600] text-sm">See more</h1>
                    </section>
                </button>

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