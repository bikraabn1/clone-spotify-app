import React from 'react';
import { Spin } from 'antd';

const Loading: React.FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <Spin />
        </div>
    )
};

export default Loading;