import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled, { Keyframes, keyframes } from 'styled-components';
import { Search, Star, Menu } from '@/assets/icons';

import Item from './Item';
import DropDownMenu from './DropDownMenu';

export interface NavBarItemInterface {
  Icon: () => JSX.Element;
  title: 'Search' | 'Bookmark';
  onClickLink: () => void;
}
const dropDownMountedAnimation = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`;
const dropDownUnMountedAnimation = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [isMountedMenu, setIsMountedMenu] = useState(false);
  const [animation, setAnimation] = useState<Keyframes>(
    dropDownMountedAnimation
  );

  const navBarItems: NavBarItemInterface[] = [
    {
      Icon: Search,
      title: 'Search',
      onClickLink: () => navigate('/'),
    },
    {
      Icon: Star,
      title: 'Bookmark',
      onClickLink: () => navigate('/bookmark'),
    },
  ];

  const onToggleMenu = () => {
    const TOGGLE_DELAYED = 250;

    if (isMountedMenu) {
      setAnimation(dropDownUnMountedAnimation);
      setTimeout(() => {
        setIsMountedMenu((prevToggle) => !prevToggle);
      }, TOGGLE_DELAYED);
      return;
    }

    setAnimation(dropDownMountedAnimation);
    setIsMountedMenu((prevToggle) => !prevToggle);
  };

  return (
    <>
      <Wrapper>
        <Container>
          {navBarItems.map(({ Icon, title, onClickLink }) => {
            return (
              <Item
                key={title}
                Icon={Icon}
                title={title}
                onClickLink={onClickLink}
              />
            );
          })}
        </Container>
      </Wrapper>
      <MenuContainer onClick={onToggleMenu}>
        <Menu />
        {isMountedMenu && (
          <DropDownMenu
            menuItems={navBarItems}
            dropDownTrigger={isMountedMenu}
            animation={animation}
          />
        )}
      </MenuContainer>
    </>
  );
};

export default NavBar;

const Wrapper = styled.nav`
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background.indigo};
  padding: 40px 10px;
  ${({ theme }) => theme.media.mobile`
    display: none;
  `}
`;

const Container = styled.ul`
  list-style: none;
`;

const MenuContainer = styled.div`
  display: none;
  ${({ theme }) => theme.media.mobile`
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      color: red
    }
  `}
`;