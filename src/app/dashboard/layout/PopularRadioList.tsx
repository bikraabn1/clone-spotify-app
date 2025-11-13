'use client'
import { Col, Row } from 'antd'
import { useRadio } from '@/app/hooks/useRadio'
import React from 'react'
import ContentList from '../components/ContentList'
import Card from '../components/Card'

const PopularRadioList = () => {
  const datas = useRadio()
  const radios = datas?.albums.items
  return (
    <Row gutter={64}>
      <Col span={24}>
        <ContentList title='Popular radios'>
          {
            radios?.map((item) => {
              return (<Card key={item.id} title={item.name} category={item.artists[0].name} imgURL={item.images[0].url} />)
            })
          }
        </ContentList>
      </Col>
    </Row>
  )
}

export default PopularRadioList
