'use client'

import React from 'react'
import Navbar from '../components/main-layout/Navbar'
import Sidebar from '../components/main-layout/Sidebar'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className='mx-2 min-h-screen'>
            <Navbar />
            <div className='flex min-h-[92vh] gap-2'>
                <div className='w-fit bg-[#121212] overflow-hidden rounded-lg mb-2 pt-2'>
                    <Sidebar />
                </div>
                <div className='flex-1 bg-linear-to-b from-[#222222] via-[#121212] to-[#121212] overflow-hidden rounded-lg mb-2'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout
