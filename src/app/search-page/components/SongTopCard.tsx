import Image from 'next/image'
import React from 'react'

interface SongTopCardProps {
  title : string,
  artist : string,
  image : string,
  time : string
}

const SongTopCard = ({title, artist, image, time} : SongTopCardProps) => {
  return (
    <div className='w-full flex gap-2'>
      <Image src={image} alt='' className='rounded-md' width={40} height={40} />
      <div className='flex flex-1 justify-between items-center'>
        <div>
          <h3 className='font-semibold'>{title}</h3>
          <p className='text-[#9C9C9C]'>{artist}</p>
        </div>
        <div>
          <p className='text-[#9C9C9C]'>{time}</p>
        </div>
      </div>
    </div>
  )
}

export default SongTopCard

