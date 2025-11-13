'use client'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'
import Dashboard from './dashboard/page'
import Search from './search-page/page'
import Providers from './providers'
import Loading from './components/main-layout/Loading'

const PageRouter = () => {
    const searchParams = useSearchParams()
    const query = searchParams.get('q')
    return (
        <Providers>
            <Suspense fallback={<Loading />}>
                {query ?
                    (<Search />)
                    :
                    (<Dashboard />)
                }
            </Suspense>
        </Providers>
    )
}

export default PageRouter
