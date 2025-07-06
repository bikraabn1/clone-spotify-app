import React from 'react'
import Navbar from '../components/main-layout/Navbar'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className='mx-2'>
            <Navbar />
            {children}
        </div>
    )
}

export default MainLayout
