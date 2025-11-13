'use client'
import Image from 'next/image'
import React from 'react'

interface CardProps {
  title: string,
  category: string,
  imgURL: string
}

const Card = ({ title, category, imgURL }: CardProps) => {
  return (
    <div className='flex flex-col gap-1 rounded-md hover:bg-[#1F1F1F] w-[12.5rem] p-3 cursor-pointer transition-all duration-150 ease-in-out shrink-0'>
      <Image src={imgURL} alt="artist-img" className='w-[11rem] h-[11rem] rounded-md shadow-md mb-1' width={88} height={88} priority={true} />
      <h4 className='w-[11rem] line-clamp-2 overflow-hidden overflow-ellipsis'>{title}</h4>
      <p className='text-sm text-[#B3B3B3] w-[11rem] line-clamp-1 overflow-hidden overflow-ellipsis'>{category}</p>
    </div>
  )
}

export default Card
