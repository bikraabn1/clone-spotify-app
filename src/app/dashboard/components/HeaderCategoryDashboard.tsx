'use client'

import React from 'react'

interface HeaderCategoryDashboardProps {
  text: string
}

const HeaderCategoryDashboard = ({ text }: HeaderCategoryDashboardProps) => {
  return (
    <div>
      <h3 className='text-sm py-1 px-3 bg-[#373737] hover:bg-[#3F3F3F] rounded-full w-fit cursor-pointer transition-all duration-150 ease-in-out'>
        {text}
      </h3>
    </div>
  )
}

export default HeaderCategoryDashboard
