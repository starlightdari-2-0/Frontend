import React, { useState } from 'react';
import styled from 'styled-components';

interface NavigationBarProps {
    initialActiveMenu?: string;
}

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 280px;
  height: 60px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 999px;
  background-color: #1F2027;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 60px;
  cursor: pointer;
`;

const NavIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 4px;
`;

const NavText = styled.div<{ active: boolean }>`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -2%;
  text-align: center;
  color: ${({ active }) => (active ? '#E5ECF8' : '#5D636F')};
`;

const NavigationBar: React.FC<NavigationBarProps> = ({ initialActiveMenu = 'community' }) => {
    const [activeMenu, setActiveMenu] = useState(initialActiveMenu);

    const handleMenuClick = (menu: string) => {
        setActiveMenu(menu);
    };

    const menuItems = [
        {
            name: '커뮤니티',
            key: 'community',
            icons: {
                active: '/community-active.svg',
                inactive: '/community-inactive.svg',
            },
        },
        {
            name: '내 별자리',
            key: 'my-star',
            icons: {
                active: '/my-star-active.svg',
                inactive: '/my-star-inactive.svg',
            },
        },
        {
            name: '마이페이지',
            key: 'my-page',
            icons: {
                active: '/my-page-active.svg',
                inactive: '/my-page-inactive.svg',
            },
        },
    ];

    return (
        <NavWrapper>
            {menuItems.map(({ name, key, icons }) => {
                const isActive = activeMenu === key;
                const iconSrc = isActive ? icons.active : icons.inactive;

                return (
                    <NavItem key={key} onClick={() => handleMenuClick(key)}>
                        <NavIcon src={iconSrc} alt={`${name}`} />
                        <NavText active={isActive}>{name}</NavText>
                    </NavItem>
                );
            })}
        </NavWrapper>
    );
};

export default NavigationBar;