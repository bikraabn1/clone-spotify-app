'use client'
import Image from 'next/image'
import React from 'react'

interface ArtistCardProps {
  title: string,
  category: string,
  imgURL: string
}

const ArtistCard = ({ title, category, imgURL }: ArtistCardProps) => {
  return (
    <div className='flex flex-col gap-1 rounded-md hover:bg-[#1F1F1F] w-fit p-3 cursor-pointer transition-all duration-150 ease-in-out shrink-0'>
      <Image src={imgURL} alt="artist-img" className='w-[11rem] h-[11rem] rounded-full shadow-md' width={88} height={88} priority={true}/>
      <h4>{title}</h4>
      <p className='text-sm text-[#B3B3B3]'>{category}</p>
    </div>
  )
}

export default ArtistCard
