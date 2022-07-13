import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Animation from '@/components/Animation';
import Rocket from '@/assets/animation/rocket.json';
import FatCat from '@/assets/animation/fat-cat.json';

const EmptyData = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      {pathname === '/' ? (
        <>
          <Content>
            <h1>입력하신 검색어와 일치하는 결과가 없습니다.</h1>
            <p>모든 단어의 철자가 정확한지 확인하세요.</p>
            <p>다른 검색어를 사용해 보세요.</p>
          </Content>
          <Animation file={Rocket} width={330} />
        </>
      ) : (
        <>
          <Content>
            <h1>즐겨찾기 한 영화가 없습니다.</h1>
            <p>오늘은 고양이와 함께 영화를 보는 건 어떠세요?</p>
            <Animation file={FatCat} width={330} />
          </Content>
        </>
      )}
    </Container>
  );
};

export default EmptyData;

const Container = styled.div`
  height: 100%;
  padding: 15px;
`;

const Content = styled.div`
  color: ${({ theme }) => theme.color.font.white};
  font-weight: bold;
  font-size: 23px;

  h1 {
    margin-bottom: 3px;
  }
  p {
    font-size: 17px;
    font-weight: 400;
  }
`;
