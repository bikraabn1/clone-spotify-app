'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { fetchWithAuth } from './lib/api'

interface ProvidersProps {
    children: React.ReactNode
}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            queryFn: async ({ queryKey }) => {
                const url = queryKey.join('/')
                return fetchWithAuth(process.env.NEXT_PUBLIC_API_URL + url)
            },
            suspense: true
        },
    },
})

const Providers = ({ children } : ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default Providers
