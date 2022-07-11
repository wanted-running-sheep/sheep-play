import { ReactNode } from 'react';
import styled from 'styled-components';
import NavBar from '@/components/NavBar';
import MovieSearch from '../MovieSearch';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <NavBar />
      <ContetContainer>
        <MovieSearch />
        {children}
      </ContetContainer>
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.color.background.primary};
  ${({ theme }) => theme.media.mobile`
    padding: 10px;
    flex-direction: row-reverse;
    justify-content: space-between;
  `}
`;

const ContetContainer = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 10px 10px 20px;
  ${({ theme }) => theme.media.mobile`
    padding: 0px;
  `}
`;
