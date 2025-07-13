import React from 'react'
import { GoPlus } from 'react-icons/go'
import { GrExpand } from 'react-icons/gr'

const HeaderSidebarLabel = () => {
    return (
        <div className='flex justify-between items-center'>
            <h2 className='font-extrabold text-lg'>Your Library</h2>
            <div className='flex gap-5 items-center '>
                <h3 className='text-[#B3B3B3] text-2xl p-1 rounded-full bg-[#1F1F1F]'><GoPlus /></h3>
                <h3 className='text-[#B3B3B3] text-md'><GrExpand /></h3>
            </div>
        </div>
    )
}

export default HeaderSidebarLabel
