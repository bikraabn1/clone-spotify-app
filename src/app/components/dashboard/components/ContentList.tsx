'use client'

import React from 'react'
import { Flex } from 'antd'

interface ContentListProps {
    children: React.ReactNode
    title: string
}

const ContentList = ({ children, title }: ContentListProps) => {
    return (
        <div className='border w-full h-full'>
            <h2 className='text-2xl font-bold ps-3'>{title}</h2>
            <Flex gap="middle" vertical={false} justify='start' align='middle' wrap='nowrap' className='overflow-x-scroll'>
                {children}
            </Flex>
        </div>
    )
}

export default ContentList
