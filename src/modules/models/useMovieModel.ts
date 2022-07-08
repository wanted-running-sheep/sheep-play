import React, { useState } from 'react';
import { movieRequest } from '@/modules/services/movieService';
import { AxiosResponse } from 'axios';

import { MovieProps } from 'Movies';

export const useMovieModel = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const getMoviesCallback = (response: AxiosResponse) => {
    setMovies(response.data);
  };

  const getMovies = () => {
    movieRequest.get('', getMoviesCallback);
  };

  const patchMovieById = async (id: number, data: {}) => {
    movieRequest.patch(id, data);
  };

  return {
    movies,
    getMovies,
    patchMovieById,
  };
};
