import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled, { Keyframes, keyframes } from 'styled-components';
import { Search, Star } from '@/assets/icons';
import Item from './Item';

export interface NavBarItemInterface {
  Icon: () => JSX.Element;
  title: 'Search' | 'Bookmark';
  onClickLink: () => void;
}

const NavBar = () => {
  const navigate = useNavigate();

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
