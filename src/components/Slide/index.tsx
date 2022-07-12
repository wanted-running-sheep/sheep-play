import { useRef, useState, useCallback } from 'react';
import { MovieProps } from 'Movies';
import styled from 'styled-components';
import useSlide from '@/hooks/useSlide';
import { RightDirection, LeftDirection } from '@/assets/icons';
import MovieInfo from '@/components/Modal/MovieInfo';

interface SlideProps {
  movies: MovieProps[];
}

const Slide = ({ movies }: SlideProps) => {
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
          <PosterImage
            key={id}
            src={large_cover_image}
            alt={title}
            onClick={() => onClickToggleModal(id)}
          />
        ))}
      </SlideWrapper>
    </Container>
  );
};

export default Slide;

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background.indigo};
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  padding: 20px 10px 20px 10px;
`;

const Arrows = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
  margin-bottom: 3em;
  svg {
    width: 30px;
    border-radius: 10px;
    cursor: pointer;
    color: #abacb4;
  }
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
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 2em;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border: 5px solid ${({ theme }) => theme.color.border.lightblue};
    object-fit: cover;
    height: 400px;
  }
`;
