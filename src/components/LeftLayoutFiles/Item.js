
const Item = ({ imgUrl, title, semiRounded }) => {
    return (
        <section className="cursor-pointer hover:bg-zinc-200 rounded-md">
            <section className="flex items-center gap-2 py-2">
                <figure>
                    <img
                        src={imgUrl}
                        className={`h-[2.3rem] w-[2.3rem] ${semiRounded ? 'rounded-md' : 'rounded-full'}`}
                        alt={title}
                    />
                </figure>
                <h1 className="font-[600] text-sm">{title}</h1>
            </section>
        </section>
    )
}

export default Item