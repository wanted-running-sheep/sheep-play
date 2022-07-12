import { useMovieModel } from '@/modules/models/useMovieModel';
import { ReactNode, createContext, useContext, useEffect } from 'react';
import { MovieProps } from 'Movies';

interface MovieContextInterface {
  movies: MovieProps[];
  addBookmarkById: (id: number) => void;
  setSearchedMovies: (movies: MovieProps[]) => void;
}

const defaultContext: MovieContextInterface = {
  movies: [],
  addBookmarkById: () => {},
  setSearchedMovies: () => {},
};

const MoiveContext = createContext<MovieContextInterface>(defaultContext);

export const MoiveContextProvider = ({ children }: { children: ReactNode }) => {
  const { movies, setMovies, getMovies } = useMovieModel();

  const addBookmarkById = (id: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        return movie.id === id ? { ...movie, like: !movie.like } : { ...movie };
      })
    );
  };

  const setSearchedMovies = (movies: MovieProps[]) => {
    setMovies(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const value = { movies, addBookmarkById, setSearchedMovies };

  return (
    <MoiveContext.Provider value={value}>{children}</MoiveContext.Provider>
  );
};

export const useMovieState = () => {
  return useContext(MoiveContext);
};
