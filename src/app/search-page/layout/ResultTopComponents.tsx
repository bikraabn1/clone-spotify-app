    import { Row, Col } from 'antd'
    import React from 'react'
    import TopResult from './TopResult'
    import SongsResult from './SongsResult'
    import { useSearchParams } from 'next/navigation'
    import { useSearch } from '@/app/hooks/useSearch'
    import { TracksItem, Welcome } from '@/app/types/search-types'

    const ResultTopComponents = () => {
        const searchQuery = useSearchParams()   
        const query = searchQuery.get('q')
        const datas = useSearch(query)
        const { tracks } : Welcome = datas
        const topResultDatas = tracks?.items

        console.log(topResultDatas)

        return (
            <Row gutter={8}>
                <Col span={8}>
                    {/* <TopResult title={topResultDatas[0].name} category={topResultDatas.artist[0].type} artist={topResultDatas.artist[0].name}/> */}
                </Col>
                <Col span={16}>
                    <SongsResult />
                </Col>
            </Row>
        )
    }

    export default ResultTopComponents
