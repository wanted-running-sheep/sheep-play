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
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.background.primary};
  ${({ theme }) => theme.media.mobile`
    padding: 10px;
    justify-content: space-between;
  `}
`;

const ContentContainer = styled.main`
  display: flex;
  width: calc(100vw - 250px);
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
  background-color: ${({ theme }) => theme.color.background.indigo};
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  padding: 20px 10px 20px 10px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ theme }) => theme.media.mobile`
    width: calc(100vw - 20px);
    height: calc(100vh - 40px);
  `};
`;