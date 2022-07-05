import Image from '../../components/HeaderFiles/Image'

const Item = ({ imgUrl, title }) => {
    return (
        <section className="cursor-pointer hover:bg-zinc-200 rounded-md">
            <section className="flex items-center gap-2 py-2">
                <figure>
                    <Image
                        imgUrl={imgUrl}
                        size='h-[2.5rem] w-[2.5rem]'
                        outlined='border border-gray-100'
                    />
                </figure>
                <h1 className="font-[600] text-sm">{title}</h1>
            </section>
        </section>
    )
}

export default Item