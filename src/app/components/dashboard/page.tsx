import React from 'react'
import HeaderCategoryDashboard from './components/HeaderCategoryDashboard'
import ArtistCard from './components/ArtistCard'
import ContentList from './components/ContentList'
import { Col, Row } from 'antd'

const Dashboard = () => {
  return (
    <div className='w-full h-full p-5 flex flex-col'>
      <div className='flex gap-2 items-center ps-3 mb-10'>
        <HeaderCategoryDashboard text='All' />
        <HeaderCategoryDashboard text='Music' />
        <HeaderCategoryDashboard text='Podcast' />
      </div>

      <div className='max-h-[75vh] overflow-scroll border'>
        <Row>
          <Col span={24}>
            <ContentList title='Popular artist'>
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
            </ContentList>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ContentList title='Popular artist'>
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
            </ContentList>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ContentList title='Popular artist'>
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
            </ContentList>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ContentList title='Popular artist'>
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
            </ContentList>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ContentList title='Popular artist'>
              <ArtistCard title='Sheila on 7' imgURL='https://i.scdn.co/image/ab6761610000e5eb2017fda314b1745c3e96e0d5' category='Artist' />
            </ContentList>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard
