import { useRef } from 'react';
import { MovieProps } from 'Movies';
import useInfinityScroll from '@/hooks/useInfinityScroll';
import SlideBox from '@/components/Slide/SlideBox';
import useSliceMovie from '@/hooks/useSliceMovie';

interface SlideProps {
  movies: MovieProps[];
}
const Slide = ({ movies }: SlideProps) => {
  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useInfinityScroll(fetchMoreRef);
  const {renderMovieList} = useSliceMovie(movies, intersecting);

  return (
     <>
      {
        renderMovieList.map((movies, i) => {
          return (
            <SlideBox key={i} movies={movies} />
          )
        })
      }
      <div ref={fetchMoreRef}></div>
    </>
  );
};

export default Slide;