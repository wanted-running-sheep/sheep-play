import React, { useState } from 'react';
import { movieRequest } from '@/services/movieService';
import { AxiosResponse } from 'axios';

export const useMovieModel = () => {
  const [movies, setMovies] = useState(null);

  const getMoviesCallback = (response: AxiosResponse) => {
    setMovies(response.data);
  };

  const getMovies = () => {
    movieRequest.get('', getMoviesCallback);
  };

  const patchMovieById = async (id: string, data: {}) => {
    movieRequest.patch(id, data);
  };

  return {
    movies,
    getMovies,
    patchMovieById,
  };
};
