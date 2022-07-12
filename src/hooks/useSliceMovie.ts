import {useState, useEffect} from 'react'
import {MovieProps} from 'Movies';

const useSliceMovie = (movies: MovieProps[], intersecting: boolean) => {
    const [movieList, setMovieList] = useState<MovieProps[][]>([]);
    const [renderMovieList, setRenderMovieList] = useState<MovieProps[][]>([]); 
    const [currentMovieIdx, setCurrentMovieIdx] = useState(0);

    const sliceMovieList = (movies: MovieProps[]) => {
        const newArr = [];
        const num = Math.ceil(movies.length / 10);
    
        for (let i = 1; i <= num; i++) {
          const arr = movies.slice((i - 1) * 10, i * 10);
          newArr.push(arr);
        }
    
        return newArr;
      };

      useEffect(() => {
        const sliceMovies = sliceMovieList(movies) 
        setMovieList(sliceMovies);
        setRenderMovieList(sliceMovies.slice(currentMovieIdx, 2));
        setCurrentMovieIdx(currentMovieIdx + 2);
      }, []);

      useEffect(() => {
        if(intersecting && currentMovieIdx) {  
          setRenderMovieList((prevRenderMovieList) => {
            return [
              ...prevRenderMovieList,
              ...movieList.slice(currentMovieIdx, currentMovieIdx+2),
            ];
          });
          setCurrentMovieIdx(prevMovieIdx => prevMovieIdx+2);
        }
      }, [intersecting]);

      return {
        renderMovieList
      }
}

export default useSliceMovie