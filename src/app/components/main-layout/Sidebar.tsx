import React from 'react';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'grp',
        label: 'Your Library',
        type: 'group',
        children: [
            { key: '13', label: 'Option 13' },
            { key: '14', label: 'Option 14' },
        ],
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