import styled from 'styled-components';

const Modal = () => {
  return (
    <Wrapper>
      <Container>
        <PosterWrap>
          <PosterImage src="https://m.media-amazon.com/images/M/MV5BMWU2OTAyMTktMTU5MC00MTNhLTg1NzAtOTZjNWFjMDRiZGUxXkEyXkFqcGdeQXVyNDY3MzUxOTI@._V1_SX300.jpg" />
        </PosterWrap>
        <ModalInfo>
          <TextWrap>
            <YearType>
              <span>2011</span> | movie
            </YearType>
            <Title>You Are the Apple of My Eye</Title>
          </TextWrap>
          <ButtonWrap>
            <WatchButton>watch</WatchButton>
            <BookmarkButton>Add to My Bookmark</BookmarkButton>
          </ButtonWrap>
        </ModalInfo>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #00000066;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background.indigo};
  border-radius: 40px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 30px;
  gap: 30px;
`;

const PosterWrap = styled.div`
  max-width: 473px;
  width: 100%;
  box-shadow: 7px 7px 20px #00000080;
  flex-shrink: 0;
`;

const PosterImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ModalInfo = styled.div`
  /* width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;

const TextWrap = styled.div`
  position: relative;
`;

const YearType = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.color.font.white};
  span {
    font-weight: lighter;
  }
  margin-bottom: 10px;
`;

const Title = styled.p`
  font-size: 70px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.font.white};
`;

const ButtonWrap = styled.div`
  text-align: right;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

const WatchButton = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 20px;
  font-size: 25px;
  background-color: white;
  color: #222;
  margin-right: 10px;
`;

const BookmarkButton = styled.button`
  width: 350px;
  height: 60px;
  border-radius: 20px;
  font-size: 25px;
  background-color: ${({ theme }) => theme.color.background.darkgray};
  color: ${({ theme }) => theme.color.font.gray};
`;

export default Modal;
