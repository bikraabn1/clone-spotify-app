import React from 'react'
import HeaderCategoryDashboard from './components/HeaderCategoryDashboard'
import PopularArtistList from './layout/PopularArtistList'
import PopularRadioList from './layout/PopularRadioList'

const Dashboard = () => {
  return (
    <div className='w-full h-full p-5 flex flex-col'>
      <div className='flex gap-2 items-center ps-3 mb-10'>
        <HeaderCategoryDashboard text='All' />
        <HeaderCategoryDashboard text='Music' />
        <HeaderCategoryDashboard text='Podcast' />
      </div>

      <div className='max-h-[75vh] grid gap-8 overflow-scroll'>
        <PopularArtistList />
        <PopularRadioList />
      </div>
    </div>
  )
}

export default Dashboard
