

export function Card({ url, username="Utsav", info, btnText }) {
    return (
        <>
            <div className="relative h-[400px] w-[300px] rounded-md m-4 hover:border-2 hover:drop-shadow-xl">
                <img
                    src={url}
                    alt={username}
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{username}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                        {info}
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        {btnText} &rarr;
                    </button>
                </div>
            </div>
        </>
    )
}
