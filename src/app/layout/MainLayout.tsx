'use client'
import React, { Suspense } from 'react'
import Navbar from '../components/main-layout/Navbar'
import Sidebar from '../components/main-layout/Sidebar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { fetchWithAuth } from '../lib/api'
import Loading from '../components/main-layout/Loading'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                queryFn: async ({ queryKey }) => {
                    const url = queryKey.join('/')
                    return fetchWithAuth(process.env.NEXT_PUBLIC_API_URL + url)
                },
                // suspense: true
            },
        },
    })
    return (
        <div className='mx-2 min-h-screen'>
            <Navbar />
            <div className='flex min-h-[92vh] gap-2'>
                <div className='w-fit bg-[#121212] overflow-hidden rounded-lg mb-2 pt-2'>
                    <Sidebar />
                </div>
                <div className='flex-1 bg-linear-to-b from-[#222222] via-[#121212] to-[#121212] overflow-hidden rounded-lg mb-2'>
                    <Suspense fallback={<Loading />}>
                        <QueryClientProvider client={queryClient}>
                            {children}
                        </QueryClientProvider>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default MainLayout
