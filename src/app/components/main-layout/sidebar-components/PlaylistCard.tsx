'use client'
import React from 'react'
import { LuMusic } from 'react-icons/lu'

const PlaylistCard = () => {
  return (
    <div className='w-fit mt-2 flex gap-3 items-center-safe'>
      <h3 className='bg-[#282828] w-fit text-2xl p-3 rounded'><LuMusic /></h3>
      <div className='w-[10rem] flex flex-col'>
        <h3 className='m-0 font-semibold'>My Playlist #1</h3>
        <p className='whitespace-nowrap overflow-hidden overflow-ellipsis font-medium m-0 text-[#ACACAC] leading-none'>
          Playlist . Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, laborum.
        </p>
      </div>
    </div>
  )
}

export default PlaylistCard
