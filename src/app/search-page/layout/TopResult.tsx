import Image from 'next/image'
import React from 'react'

const TopResult = ({name, category, artist} ) => {
    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-2xl font-extrabold'>Top result</h2>
            <div className='bg-[#181818] p-5 rounded-xl flex flex-col gap-5'>
                <Image src={`https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c`} alt='' width={88} height={88} className='rounded-md overflow-hidden' />
                <div className='flex flex-col gap-2'>
                    <h3 className='text-3xl font-extrabold'>{title}</h3>
                    <p className='flex gap-2 text-sm'>
                        <span className='text-[#B2B2B2]'>
                            {category}
                        </span>
                        <span>
                            •
                        </span>
                        <span>
                            {artist}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TopResult
