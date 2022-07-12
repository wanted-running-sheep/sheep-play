import { useRef, useState, useCallback } from 'react';
import { MovieProps } from 'Movies';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useSlide from '@/hooks/useSlide';
import { RightDirection, LeftDirection } from '@/assets/icons';
import MovieInfo from '@/components/Modal/MovieInfo';
import NoData from '@/components/Bookmark/NoData';

interface SlideProps {
  movies: MovieProps[];
}
const Slide = ({ movies }: SlideProps) => {
  const { pathname } = useLocation();
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slideRef = useRef<HTMLDivElement>(null);
  const { totalSildes, currentSlide, setCurrentSlide } = useSlide(slideRef);

  const onClickSlide = (direction: number) => {
    if (currentSlide + direction >= totalSildes) {
      setCurrentSlide(0);
      return;
    }

    if (currentSlide + direction < 0) {
      setCurrentSlide(totalSildes);
      return;
    }

    setCurrentSlide(currentSlide + direction);
  };

  const onClickToggleModal = useCallback(
    (id?: number) => {
      if (id) setSelectedMovie(id);
      setIsModalOpen(!isModalOpen);
    },
    [isModalOpen]
  );

  if (!(movies.length && pathname === '/')) return <NoData />;
  return (
    <Container>
      {isModalOpen && (
        <MovieInfo close={() => onClickToggleModal()} movieId={selectedMovie} />
      )}
      <Arrows>
        <Button onClick={() => onClickSlide(-1)}>
          <LeftDirection />
        </Button>
        <Button onClick={() => onClickSlide(1)}>
          <RightDirection />
        </Button>
      </Arrows>
      <SlideWrapper ref={slideRef}>
        {movies?.map(({ id, large_cover_image, title }) => (
          <PosterImageWrapper key={id}>
            <PosterImage
              key={id}
              src={large_cover_image}
              alt={title}
              onClick={() => onClickToggleModal(id)}
            />
          </PosterImageWrapper>
        ))}
      </SlideWrapper>
    </Container>
  );
};

export default Slide;

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background.indigo};
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  padding: 20px 10px 20px 10px;
  ${({ theme }) => theme.media.mobile`
    position: relative;
    width: calc(100vw - 20px);
    height: calc(100vh - 40px);
    overflow-x: scroll;
    scroll-behavior: smooth;
  `};
`;

const Arrows = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
  svg {
    width: 30px;
    border-radius: 10px;
    cursor: pointer;
    color: #abacb4;
  }
  ${({ theme }) => theme.media.mobile`
    display: none;
  `};
`;

const Button = styled.button`
  padding: 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.background.darkgray};
  &:hover {
    opacity: 0.6;
  }
`;

const SlideWrapper = styled.div`
  height: 330px;
  max-width: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin: 3em 0;
  ${({ theme }) => theme.media.mobile`
    position: absolute;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `};
`;

const PosterImageWrapper = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    height: 400px;
  }
`;

const PosterImage = styled.img`
  height: 100%;
  object-fit: cover;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border: 5px solid ${({ theme }) => theme.color.border.lightblue};
  }
`;
