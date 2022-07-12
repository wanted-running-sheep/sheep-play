import { useRef } from 'react';
import styled from 'styled-components';
import RightDirection from '@/assets/icons/RightDirection';
import LeftDirection from '@/assets/icons/LeftDirection';
import { MovieProps } from 'Movies';
import useSlide from '@/hooks/useSlide';

interface SlideProps {
  movies: MovieProps[];
}

const Slide = ({ movies }: SlideProps) => {
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

  return (
    <Container>
      <Arrows>
        <Button onClick={() => onClickSlide(-1)}>
          <LeftDirection />
        </Button>
        <Button onClick={() => onClickSlide(1)}>
          <RightDirection />
        </Button>
      </Arrows>
      <SlideWrapper ref={slideRef}>
        {movies.slice(0,15)?.map(({ id, large_cover_image, title }) => ( 
          <PosterImageWrapper key={id}>
            <PosterImage key={id} src={large_cover_image} alt={title} />
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
    width: clac(100vw - 20px);
    height: calc(100vh - 40px);
    max-height: calc(400px + 2em);
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
