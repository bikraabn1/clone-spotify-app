'use client'
import { Col, Row } from 'antd'
import React from 'react'
import ContentList from '../components/ContentList'
import ArtistCard from '../components/ArtistCard'
import { useArtists } from '@/app/hooks/useArtist'
const PopularArtistList = () => {
    const datas = useArtists()
    const artists = datas?.artists.items
    return (
        <Row gutter={64}>
          <Col span={24}>
            <ContentList title='Popular artist'>
              {
                artists?.map((item) => {
                    return (<ArtistCard key={item.id} title={item.name} category={item.type} imgURL={item.images[0].url}/>)
                })
              }
            </ContentList>
          </Col>
        </Row>
    )
}

export default PopularArtistList
