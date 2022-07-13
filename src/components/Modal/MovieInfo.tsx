import React, { useEffect, useState } from 'react';
import { MovieProps } from 'Movies';
import styled from 'styled-components';

import Modal from './index';
import { Close, Star, Add, Delete } from '@/assets/icons';
import { useMovieModel } from '@/modules/models/useMovieModel';
import { convertHoursAndMinutes } from '@/utils/timeConvert';
import { useMovieState } from '@/context/MovieContext';
import NoImage from '@/assets/images/no_image.svg';
interface MovieInfoProps {
  close: () => void;
  movieId: number;
}
const MovieInfo: React.FC<MovieInfoProps> = ({ close, movieId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieProps>();
  const { getMovieById, patchMovieById } = useMovieModel();
  const { addBookmarkById } = useMovieState();

  useEffect(() => {
    const getMovie = async () => {
      const response = await getMovieById(`/${movieId}`);
      setSelectedMovie(response);
      setIsLiked(response.like);
    };
    getMovie();
  }, []);

  const toggleBookmark = () => {
    const bookmarkMovie = { ...selectedMovie };
    patchMovieById(movieId, { like: !bookmarkMovie.like });
    addBookmarkById(movieId);
    setIsLiked(!isLiked);
  };
  const onErrorImage = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = NoImage;
  };

  return (
    <Modal close={close}>
      {selectedMovie && (
        <>
          <BaseBackground baseSrc={selectedMovie.background_image}>
            <Close close={close} />
          </BaseBackground>
          <Wrapper>
            <img
              src={selectedMovie.medium_cover_image}
              alt={selectedMovie.title}
              onError={(e) => onErrorImage(e)}
            />
            <Section>
              <Header>
                <Title>
                  <div>
                    <p>{selectedMovie.year}</p>
                    <p>{convertHoursAndMinutes(selectedMovie.runtime)}</p>
                    <p>
                      <Star /> {selectedMovie.rating} / 10
                    </p>
                  </div>

                  <h1>{selectedMovie.title}</h1>
                </Title>

                <GenreWrapper>
                  {selectedMovie.genres.map((genre, index) => (
                    <button key={index}>{genre}</button>
                  ))}
                </GenreWrapper>
              </Header>
              <Article>
                {selectedMovie.summary ? (
                  <p>${selectedMovie.summary}</p>
                ) : (
                  <>
                    <p>존재하는 줄거리가 없습니다.</p>
                    <p>
                      구글에서 검색한 결과가 궁금하다면{' '}
                      <a
                        href={`https://google.com/search?q=${selectedMovie.title}`}
                        target="_blank"
                      >
                        여기
                      </a>
                      를 클릭하세요.
                    </p>
                  </>
                )}
              </Article>
            </Section>
          </Wrapper>
          <ButtonWrapper>
            <button>Watch</button>
            <button onClick={toggleBookmark}>
              {isLiked ? (
                <>
                  <Delete />
                  Delete Bookmark
                </>
              ) : (
                <>
                  <Add />
                  Add to My Bookmark
                </>
              )}
            </button>
          </ButtonWrapper>
        </>
      )}
    </Modal>
  );
};

export default MovieInfo;

const BaseBackground = styled.div<{ baseSrc: string }>`
  position: absolute;
  ${({ theme }) => theme.mixins.backgroundImage()}
  width: 100%;
  height: 350px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${({ baseSrc }) => baseSrc});
  border-radius: 40px 40px 0px 0px;
  padding: 25px;
  text-align: right;

  ${({ theme }) => theme.media.tablet`
    height: 250px;
  `}
`;
const Wrapper = styled.div`
  position: absolute;
  padding: 0px 70px;
  display: flex;
  top: 100px;
  ${({ theme }) => theme.media.desktop`
    padding: 0px 30px;
  `}
  ${({ theme }) => theme.media.tablet`
    display: block;
    top: 50px;
  `}

  img {
    ${({ theme }) => theme.mixins.boxShadow()}
    max-width: 230px;
    height: 345px;
    ${({ theme }) => theme.media.tablet`
      max-width: 180px;
      width: 50%;
      height: auto;
    `}
  }
`;
const Section = styled.div`
  padding: 15px 20px;
  ${({ theme }) => theme.media.tablet`
    padding: 8px 0px;
  `}
`;
const Header = styled.div`
  height: 215px;
  margin-bottom: 35px;
  display: flex;
  align-content: space-between;
  flex-direction: column;
  justify-content: flex-end;

  ${({ theme }) => theme.media.tablet`
    margin: 0px;
    display:block;
    height: auto;
  `}

  button {
    margin-right: 7px;
    padding: 3px 13px;
    border-radius: 30px;
    font-size: 20px;
    background: transparent;
    color: ${({ theme }) => theme.color.font.white};
    border: 2px solid ${({ theme }) => theme.color.border.white};
    ${({ theme }) => theme.media.desktop`
      font-size: 15px;
    `}
    ${({ theme }) => theme.media.tablet`
      padding: 1px 5px;
      font-size: 12px;
      margin-bottom: 3px;
    `}
  }
`;
const GenreWrapper = styled.div`
  ${({ theme }) => theme.media.tablet`
    margin: 5px 0px 15px 0px;
  `}
`;
const Title = styled.div`
  h1 {
    margin-top: 3px;
    margin-bottom: 20px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.font.white};
    font-size: 55px;
    line-height: 45px;
    letter-spacing: -1px;
    flex: 1 1 100%;

    ${({ theme }) => theme.media.desktop`
      font-size: 4.8vw;
      line-height: 4.5vw;
    `}
    ${({ theme }) => theme.media.tablet`
      font-size: 6vw;
      line-height: 5.2vw;
      margin-bottom:0px;
    `}
  }
  div {
    display: flex;
    p {
      ${({ theme }) => theme.mixins.flexBox()}
      color: ${({ theme }) => theme.color.font.lightgray};
      font-size: 23px;
      padding: 0px 15px;
      ${({ theme }) => theme.media.tablet`
        font-size: 15px;
        padding: 0px 7px;
        height: 18px;
        margin-bottom: 2px;
      `}

      &:first-child {
        padding-left: 0px;
      }
      &:not(:last-child) {
        border-right: 2px solid ${({ theme }) => theme.color.border.lightgray};
      }
      svg {
        width: 20px;
        margin-right: 3px;
        color: #f4c518;
      }
    }
  }
`;
const Article = styled.div`
  height: 220px;

  overflow-y: auto;
  p {
    font-size: 18px;

    color: ${({ theme }) => theme.color.font.white};

    ${({ theme }) => theme.media.tablet`
      font-size: 15px;
      // height: 220px;
    `}
  }
  a {
    color: ${({ theme }) => theme.color.font.lightblue};
    text-decoration: underline;
  }
`;
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
  text-align: right;
  display: flex;

  svg {
    margin-right: 5px;
  }
  button {
    ${({ theme }) => theme.mixins.flexBox()}
    border-radius: 15px;
    margin-left: 8px;
    padding: 10px 25px;
    font-size: 18px;
    ${({ theme }) => theme.media.tablet`
      font-size: 15px;
      padding: 5px 15px;
    `}

    &:last-child {
      background: ${({ theme }) => theme.color.button.darkgray};
      color: ${({ theme }) => theme.color.font.lightgray};
    }
  }
`;
