import React from 'react';
import { Spin } from 'antd';
import { Color } from 'antd/es/color-picker';


const Loading: React.FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <Spin size='large' className='loader' />
        </div>
    )
};

export default Loading;