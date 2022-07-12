import styled from 'styled-components';
import Animation from '@/components/Animation';
import FatCat from '@/assets/animation/fat-cat.json';
import { useLocation } from 'react-router-dom';

const NoData = () => {
  return (
    <Container>
      <Content>즐겨찾기 한 영화가 없습니다.</Content>
      <Animation file={FatCat} width={400} />
    </Container>
  );
};

export default NoData;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Content = styled.div`
  color: ${({ theme }) => theme.color.font.white};
  font-weight: bold;
  font-size: 24px;
`;
