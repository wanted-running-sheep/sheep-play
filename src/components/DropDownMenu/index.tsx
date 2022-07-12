import { useState } from 'react';
import styled from 'styled-components';
import { Search, Star, Menu } from '@/assets/icons';
import { useNavigate } from 'react-router-dom';
import List from '@/components/DropDownMenu/List';
import { NavBarItemInterface } from 'navigation';

const DropDownMenu = () => {
  const navigate = useNavigate();
  const [isMountedMenu, setIsMountedMenu] = useState(false);
  const [isAnimation, setIsAnimation] = useState(true);

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
      setIsAnimation(false);
      setTimeout(() => {
        setIsMountedMenu((prevToggle) => !prevToggle);
      }, TOGGLE_DELAYED);
      return;
    }
    setIsAnimation(true);
    setIsMountedMenu((prevToggle) => !prevToggle);
  };

  return (
    <MenuContainer onClick={onToggleMenu}>
      <Menu />
      {isMountedMenu && (
        <List menuItems={navBarItems} isAnimation={isAnimation} />
      )}
    </MenuContainer>
  );
};

export default DropDownMenu;

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
