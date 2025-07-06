import Image from 'next/image'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
import { HiFolderOpen } from 'react-icons/hi2'
import { IoNotificationsOutline } from 'react-icons/io5'
import { TbUsersGroup } from 'react-icons/tb'

const Navbar = () => {
    return (
        <div className='h-[8vh] grid grid-cols-12'>
            <div className='col-span-2 flex'>
                <Image src="/images/logo/Spotify_Primary_Logo_RGB_White.png" alt="logo" width={30} height={30} className='h-fit my-auto ms-3' />
            </div>
            <div className='col-span-4 col-start-5 flex gap-2 items-center justify-center'>
                <div className='w-fit rounded-full p-2 bg-[#1F1F1F] hover:bg-[#2A2A2A] cursor-pointer transition-all duration-150 ease-in-out hover:scale-105'>
                    <GoHome color='#B3B3B3' className='text-2xl' />
                </div>
                <div className='flex-1'>
                    <form className='py-2 px-2 rounded-full flex gap-3 justify-between items-center flex-1 bg-[#1F1F1F] hover:bg-[#2A2A2A] cursor-pointer transition-all duration-200 ease-in-out hover:outline-1 hover:outline[#3A3A3A]'>
                        <FiSearch color='#B3B3B3' className='text-2xl' />
                        <input type="text" placeholder='What do you want to play?' className='outline-none w-full border-r-1 text-sm text-[#B3B3B3] border-[#B3B3B3]' />
                        <HiFolderOpen color='#B3B3B3' className='text-2xl' />
                    </form>
                </div>
            </div>
            <div className='col-span-1 col-start-12 flex justify-between items-center'>
                <IoNotificationsOutline color='#B3B3B3' className='text-xl' />
                <TbUsersGroup color='#B3B3B3' className='text-xl' />
                <div className='p-2 rounded-full bg-orange-500 border-[7px] border-[#1F1F1F]'>
                    <CgProfile color='#121212' className='text-md' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
