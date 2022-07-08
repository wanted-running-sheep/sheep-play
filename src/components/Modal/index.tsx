import styled from 'styled-components';

const Modal = () => {
  return (
    <Wrapper>
      <Container>
        <PosterWrap>
          <PosterImage src="https://yts.mx/assets/images/movies/heilung_lifa_2017/large-cover.jpg" />
        </PosterWrap>
        <ModalInfo>
          <TextWrap>
            <MovieInfo>
              <span>2011</span> | <span>2h 50m</span> | <span>9.2 / 10</span>
            </MovieInfo>
            <Title>Heilung - Lifa</Title>
            <GenreWrap>
              <Genre>Action</Genre>
              <Genre>Action</Genre>
            </GenreWrap>
          </TextWrap>
          <DescriptionWrap>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
              molestie semper viverra bibendum diam sed eu. Faucibus massa nec,
              posuere ut. At sit quis porttitor odio mauris. Et, cras leo diam
              pharetra.
            </Description>
          </DescriptionWrap>
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
  ${({ theme }) => theme.media.desktop`
    padding: 20px;
  `};
  ${({ theme }) => theme.media.mobile`
    padding: 0;
  `};
`;

const Container = styled.div`
  position: relative;
  max-width: 1400px;
  width: 100%;
  max-height: 800px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.background.indigo};
  border-radius: 40px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 50px;
  gap: 30px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  ${({ theme }) => theme.media.desktop`
    padding: 30px;
  `};
  ${({ theme }) => theme.media.tablet`
    padding: 15px;
    border-radius: 10px;
  `};
  ${({ theme }) => theme.media.mobile`
  display:block;
    max-height:100%;
    border-radius: 0;
  `};
`;

const PosterWrap = styled.div`
  max-width: 285px;
  width: 100%;
  box-shadow: 7px 7px 20px #00000080;
  flex-shrink: 0;
  margin-bottom: 30px;
  ${({ theme }) => theme.media.tablet`
    max-width:180px;
  `};
  ${({ theme }) => theme.media.mobile`
    max-width:285px;
    margin:0 auto;
    margin-bottom: 30px;
  `};
`;

const PosterImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ModalInfo = styled.div`
  width: 100%;
`;

const TextWrap = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const MovieInfo = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.color.font.white};
  margin-bottom: 10px;

  ${({ theme }) => theme.media.desktop`
    font-size:20px;
  `};
`;

const Title = styled.p`
  font-size: 65px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.font.white};
  margin-bottom: 20px;

  ${({ theme }) => theme.media.desktop`
    font-size:40px;
  `};
`;

const GenreWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

const Genre = styled.p`
  font-size: 23px;
  color: ${({ theme }) => theme.color.font.white};
  border: 2px solid #fff;
  padding: 5px 14px;
  border-radius: 30px;
  margin-right: 10px;
  ${({ theme }) => theme.media.desktop`
  font-size: 18px;
  `};
`;

const DescriptionWrap = styled.div`
  padding-bottom: 30px;
`;

const Description = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.color.font.white};
`;

const ButtonWrap = styled.div`
  text-align: right;
  position: absolute;
  bottom: 50px;
  right: 50px;
  ${({ theme }) => theme.media.desktop`
    bottom: 30px;
  right: 30px;
  `};
  ${({ theme }) => theme.media.mobile`
    position: static;
  `};
`;

const WatchButton = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 20px;
  font-size: 25px;
  background-color: white;
  color: #222;
  margin-right: 10px;
  ${({ theme }) => theme.media.desktop`
    font-size:20px;
    width: 100px;
    height: 50px;
    border-radius: 15px;
  `};
`;

const BookmarkButton = styled.button`
  width: 350px;
  height: 60px;
  border-radius: 20px;
  font-size: 25px;
  background-color: ${({ theme }) => theme.color.background.darkgray};
  color: ${({ theme }) => theme.color.font.gray};
  ${({ theme }) => theme.media.desktop`
    font-size:20px;
    width: 210px;
    height: 50px;
    border-radius: 15px;
  `};
`;

export default Modal;
