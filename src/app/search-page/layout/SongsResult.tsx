'use client'
import React from 'react'
import SongTopCard from '../components/SongTopCard'

const SongsResult = () => {
    return (
        <div className='mx-3 w-full h-full flex flex-col gap-3'>
            <h2 className='text-2xl font-extrabold'>Songs</h2>
            <div className='w-full h-full flex flex-col justify-evenly'>
                <SongTopCard title='About You' artist='The 1975' image="https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c" time='5:03'/>
                <SongTopCard title='About You' artist='The 1975' image="https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c" time='5:03'/>
                <SongTopCard title='About You' artist='The 1975' image="https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c" time='5:03'/>
                <SongTopCard title='About You' artist='The 1975' image="https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c" time='5:03'/>
            </div>
        </div>
    )
}

export default SongsResult
