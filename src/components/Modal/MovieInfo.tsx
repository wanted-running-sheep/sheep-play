import React from 'react';
import styled from 'styled-components';
import Modal from './index';
import { Close, Star } from '@/assets/icons';

interface MovieInfoProps {
  close: () => void;
}
const MovieInfo: React.FC<MovieInfoProps> = ({ close }) => {
  const movie = {
    title: 'The Fate of the Furious JOkerJOkerJOkerJOker',
    year: 2017,
    rating: 6.6,
    runtime: 136,
    background_image:
      'https://yts.mx/assets/images/movies/the_fate_of_the_furious_2017/background.jpg',
    medium_cover_image:
      'https://yts.mx/assets/images/movies/the_fate_of_the_furious_2017/medium-cover.jpg',
    genres: ['Action', 'Adventure', 'Crime', 'Thriller'],
  };
  return (
    <Modal close={close}>
      <BaseBackground baseSrc={movie.background_image}>
        <Close close={close} />
      </BaseBackground>
      <Wrapper>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <Section>
          <Infomation>
            <Title>
              <div>
                <p>{movie.year}</p>
                <p>{movie.runtime}</p>
                <p>
                  <Star color="#F4C518" /> {movie.rating}
                </p>
              </div>

              <h1>{movie.title}</h1>
            </Title>

            <div>
              {movie.genres.map((genre, index) => (
                <button key={index}>{genre}</button>
              ))}
            </div>
          </Infomation>
        </Section>
      </Wrapper>
    </Modal>
  );
};

export default MovieInfo;

const BaseBackground = styled.div<{ baseSrc: string }>`
  ${({ theme }) => theme.mixins.backgroundImage()}
  width: 100%;
  height: 350px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${({ baseSrc }) => baseSrc});
  border-radius: 40px 40px 0px 0px;
  padding: 25px;
  text-align: right;
`;
const Wrapper = styled.div`
  padding: 0px 70px;
  margin-top: -250px;
  display: flex;

  img {
    ${({ theme }) => theme.mixins.boxShadow()}
    width: 230px;
    height: 345px;
  }
`;
const Section = styled.div`
  padding: 15px 20px;
`;
const Infomation = styled.div`
  height: 220px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;

  button {
    margin-right: 7px;
    padding: 3px 13px;
    border-radius: 30px;
    font-size: 20px;
    background: transparent;
    color: ${({ theme }) => theme.color.font.white};
    border: 3px solid ${({ theme }) => theme.color.border.white};
  }
`;
const Title = styled.div`
  h1 {
    margin-top: 20px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.font.white};
    font-size: 55px;
    line-height: 50px;
    letter-spacing: -3px;
  }
  div {
    display: flex;
    p {
      ${({ theme }) => theme.mixins.flexBox()}
      color: ${({ theme }) => theme.color.font.lightgray};
      font-size: 23px;
      padding: 0px 15px;

      &:not(:last-child) {
        border-right: 3px solid ${({ theme }) => theme.color.border.lightgray};
      }
      svg {
        width: 28px;
        margin-right: 3px;
      }
    }
  }
`;
