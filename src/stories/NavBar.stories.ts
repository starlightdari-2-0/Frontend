import type { Meta, StoryObj } from '@storybook/react';

import NavigationBar from './NavBar';

const meta = {
    title: 'Components/NavigationBar',
    component: NavigationBar,
    parameters: {
        // layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        initialActiveMenu: {
            control: 'select',
            options: ['community', 'my-star', 'my-page'],
            description: '초기에 활성화될 메뉴를 선택합니다.',
            defaultValue: 'community',
        },
    },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// 커뮤니티 메뉴가 활성화된 상태
export const CommunityActive: Story = {
    args: {
        initialActiveMenu: 'community',
    },
};

// 내 별자리 메뉴가 활성화된 상태
export const MyStarActive: Story = {
    args: {
        initialActiveMenu: 'my-star',
    },
};

// 마이페이지 메뉴가 활성화된 상태
export const MyPageActive: Story = {
    args: {
        initialActiveMenu: 'my-page',
    },
};