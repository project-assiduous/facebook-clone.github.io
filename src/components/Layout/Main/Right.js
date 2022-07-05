import React from 'react'
import BirthdayItem from './BirthdayItem'
import SponsoredCard from './SponsoredCard'
import TitleDivider from './TitleDivider'
import { BiVideoPlus, BiSearch, BiDotsHorizontalRounded } from 'react-icons/bi'
import Item from '../../LeftLayoutFiles/Item'

const Right = () => {
    return (
        <div className="hidden lg:block h-screen overflow-y-auto overflow-x-hidden pt-[4.8rem] fixed right-0 top-0  w-[350px] custom-sidebar">
            <section>
                <section>
                    <TitleDivider title='Sponsored' />
                    <p className="py-1"></p>
                    <SponsoredCard
                        imgUrl='https://scontent.fdvo2-1.fna.fbcdn.net/v/t45.1600-4/277609716_6262514017300_6402416374730908518_n.jpg?stp=cp0_dst-jpg_p173x172_q75_spS444&_nc_cat=109&ccb=1-7&_nc_sid=67cdda&_nc_eui2=AeG-I9Ts0cY-GjoAYYu1A1Y71Ky2lXHFG6zUrLaVccUbrN6EemDO-26IQJx4T-1_te39w-mRqF6FQAgs7qzyj-Qb&_nc_ohc=XOXbzsFKEfUAX-VcSgO&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT8iWkZR_g8gLd_vb58wfdC9zUUl_th0oGfO2BmCw3Yxpw&oe=62C94B57'
                        headingTitle='Get a free month and save on new skills'
                        website='www.pluralsight.com/bogo'
                    />
                    <SponsoredCard
                        imgUrl='https://scontent.fdvo2-1.fna.fbcdn.net/v/t45.1600-4/279967933_23850739823660660_5278988536852618708_n.jpg?stp=dst-jpg_p476x249&_nc_cat=104&ccb=1-7&_nc_sid=eaa83b&_nc_eui2=AeF0TfFK4d7Lczna0U6sm1zr6vnwT__2Ubjq-fBP__ZRuL9_tVFhGEplq3PVfa6Hd8dXdIpEoBo43Px-0UEzrrgw&_nc_ohc=GFa5222UxvoAX-N9D9M&_nc_ht=scontent.fdvo2-1.fna&oh=00_AT-vmteFu-SEjaNPWwc5yop4jkcqUyCwr75Qjcaqmer8wg&oe=62C8217D'
                        headingTitle='CLOSING APPLICATIONS SOON'
                        website='www.kodego.ph'
                    />
                </section>

                <section className="border-b-2 my-1"></section>

                <section>
                    <TitleDivider title='Birthdays' />
                    <section>
                        <BirthdayItem userName='John Doe' count='5' />
                    </section>
                </section>

                <section className="border-b-2 my-1"></section>

                <section className='mt-3'>
                    <section className='flex items-center justify-between'>
                        <TitleDivider title='Contacts' />
                        <section className='inline-flex items-center gap-5'>
                            <BiVideoPlus className='text-gray-800 text-xl cursor-pointer' />
                            <BiSearch className='text-gray-800 text-xl cursor-pointer' />
                            <BiDotsHorizontalRounded className='text-gray-800 text-xl cursor-pointer' />
                        </section>
                    </section>
                    <section>
                        <Item
                            imgUrl='https://xsgames.co/randomusers/assets/avatars/male/18.jpg'
                            title='Nickolas Bryd'
                        />
                        <Item
                            imgUrl='https://xsgames.co/randomusers/assets/avatars/female/43.jpg'
                            title='Coralee Kolterman'
                        />
                        <Item
                            imgUrl='https://xsgames.co/randomusers/assets/avatars/female/31.jpg'
                            title='Stephen GonsowskiCards Tanjay'
                        />
                        <Item
                            imgUrl='https://xsgames.co/randomusers/assets/avatars/female/40.jpg'
                            title='Catalina Sheetz'
                        />
                        <Item
                            imgUrl='https://xsgames.co/randomusers/assets/avatars/female/46.jpg'
                            title='Frances Vanhoosen'
                        />
                        <Item
                            imgUrl='https://xsgames.co/randomusers/assets/avatars/male/18.jpg'
                            title='Nickolas Bryd'
                        />
                        <Item
                            imgUrl='https://xsgames.co/randomusers/assets/avatars/female/43.jpg'
                            title='Coralee Kolterman'
                        />
                        <Item
                            imgUrl='https://xsgames.co/randomusers/assets/avatars/female/31.jpg'
                            title='Stephen GonsowskiCards Tanjay'
                        />
                        <Item
                            imgUrl='https://xsgames.co/randomusers/assets/avatars/female/40.jpg'
                            title='Catalina Sheetz'
                        />
                        <Item
                            imgUrl='https://xsgames.co/randomusers/assets/avatars/female/46.jpg'
                            title='Frances Vanhoosen'
                        />
                    </section>
                </section>
            </section>
        </div>
    )
}

export default Right