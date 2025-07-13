'use client'

import React from 'react';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import HeaderSidebarLabel from './sidebar-components/HeaderSidebarLabel';
import CategoryNameLabel from './CategoryNameLabel';
import PlaylistCard from './sidebar-components/PlaylistCard';

type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
    {
        key: 'header',
        label: <HeaderSidebarLabel/>,
        type: 'group'
    },
    {
        key: 'Category',
        label: <CategoryNameLabel/>,
        type: 'group'
    },
    {
        key: 'PlaylistCard1',
        label: <PlaylistCard/>,
        type: 'group'
    },
];

const Sidebar: React.FC = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        itemColor: '#ffffff',
                        groupTitleColor: '#ffffff'
                    }
                }
            }}
        >
            <div className='custom-sidebar h-full'>
                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                    className='h-full'
                />
            </div>
        </ConfigProvider>
    );
};

export default Sidebar;