import { ReactNode, createContext, useContext, useEffect } from 'react';
import { MovieProps } from 'Movies';
import { useMovieModel } from '@/modules/models/useMovieModel';

interface MovieContextInterface {
  movies: MovieProps[];
  addBookmarkById: (id: number) => void;
  setSearchedMovies: (movies: MovieProps[]) => void;
  originMovies: MovieProps[];
}

const defaultContext: MovieContextInterface = {
  movies: [],
  originMovies: [],
  addBookmarkById: () => {},
  setSearchedMovies: () => {},
};

const MoiveContext = createContext<MovieContextInterface>(defaultContext);

export const MoiveContextProvider = ({ children }: { children: ReactNode }) => {
  const { movies, setMovies, getMovies, originMovies, setOriginMovies } =
    useMovieModel();

  const addBookmarkById = (id: number) => {
    setOriginMovies((prevMovies) =>
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

  const value = {
    movies,
    addBookmarkById,
    setSearchedMovies,
    originMovies,
  };

  return (
    <MoiveContext.Provider value={value}>{children}</MoiveContext.Provider>
  );
};

export const useMovieState = () => {
  return useContext(MoiveContext);
};
