import { useRef } from 'react';
import styled from 'styled-components';
import RightDirection from '@/assets/icons/RightDirection';
import LeftDirection from '@/assets/icons/LeftDirection';
import useSlide from '@/hooks/useSlide';
import { MovieProps } from 'Movies';
import NoData from '@/components/Bookmark/NoData';
import { useLocation } from 'react-router-dom';

interface SlideProps {
  movies: MovieProps[];
}
const Slide = ({ movies }: SlideProps) => {
  const { pathname } = useLocation();

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

  if (!movies.length) return pathname === '/' ? null : <NoData />;
  return (
    <>
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
          <PosterImage key={id} src={large_cover_image} alt={title} />
        ))}
      </SlideWrapper>
    </>
  );
};

export default Slide;

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
