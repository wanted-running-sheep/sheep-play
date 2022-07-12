import { ReactNode } from 'react';
import styled from 'styled-components';
import NavBar from '@/components/NavBar';
import DropDownMenu from '@/components/DropDownMenu';
import { useLocation } from 'react-router-dom';
import MovieSearch from '@/components/MovieSearch';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  return (
    <MainContainer>
      <NavBar />
      <ContentContainer>
        <SearchContainer>
          <DropDownMenu />
          {pathname === '/' && <MovieSearch />}
        </SearchContainer>
        <MovieContainer>{children}</MovieContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.section`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background.primary};
  ${({ theme }) => theme.media.mobile`
    padding: 10px;
    justify-content: space-between;
  `}
`;

const ContentContainer = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 10px 10px 10px 20px;

  ${({ theme }) => theme.media.mobile`
    padding: 0px;
  `}
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media.mobile`
    flex-direction: row-reverse;
  `}
`;

const MovieContainer = styled.div`
  width: 100%;
  height: 100%;
`;
