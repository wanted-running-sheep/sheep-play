import { useState, useEffect } from 'react';
import { MovieProps } from 'Movies';

const useSliceMovie = (movies: MovieProps[], intersecting: boolean) => {
  const [movieList, setMovieList] = useState<MovieProps[][]>([]);
  const [renderMovieList, setRenderMovieList] = useState<MovieProps[][]>([]);
  const [currentMovieIdx, setCurrentMovieIdx] = useState(0);

  const sliceMovieList = (movies: MovieProps[]) => {
    const TOTAL_SLIDES_COUNT = 10;
    const newArr = [];
    const num = Math.ceil(movies.length / TOTAL_SLIDES_COUNT);

    for (let i = 1; i <= num; i++) {
      const arr = movies.slice(
        (i - 1) * TOTAL_SLIDES_COUNT,
        i * TOTAL_SLIDES_COUNT
      );
      newArr.push(arr);
    }

    return newArr;
  };

  useEffect(() => {
    const sliceMovies = sliceMovieList(movies);
    setMovieList(sliceMovies);
    setRenderMovieList(sliceMovies.slice(0, 2));
    setCurrentMovieIdx(2);
  }, [JSON.stringify(movies)]);

  useEffect(() => {
    if (intersecting) {
      setRenderMovieList((prevRenderMovieList) => {
        return [
          ...prevRenderMovieList,
          ...movieList.slice(currentMovieIdx, currentMovieIdx + 2),
        ];
      });
      setCurrentMovieIdx((prevMovieIdx) => prevMovieIdx + 2);
    }
  }, [intersecting]);

  return {
    renderMovieList,
  };
};

export default useSliceMovie;
