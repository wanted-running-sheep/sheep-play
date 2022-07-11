import { useState } from 'react';
import styled, { keyframes, Keyframes } from 'styled-components';
import { Search, Star, Menu } from '@/assets/icons';
import { NavBarItemInterface } from '@/components/NavBar';
import { useNavigate } from 'react-router-dom';
import List from '@/components/DropDownMenu/List';

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

const DropDownMenu = () => {
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
    <MenuContainer onClick={onToggleMenu}>
      <Menu />
      {isMountedMenu && (
        <List
          menuItems={navBarItems}
          dropDownTrigger={isMountedMenu}
          animation={animation}
        />
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
