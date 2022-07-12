import React, { useState } from 'react';
import { movieRequest } from '@/modules/services/movieService';
import { AxiosResponse } from 'axios';

import { MovieProps } from 'Movies';

export const useMovieModel = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const updateMovies = (response: AxiosResponse | void) => {
    if (response) {
      setMovies(response.data);
    }
  };

  const getMovies = async () => {
    const response = await movieRequest.get('');
    updateMovies(response);
  };

  const patchMovieById = async (id: number, data: {}) => {
    return await movieRequest.patch(id, data);
  };

  return {
    movies,
    setMovies,
    getMovies,
    patchMovieById,
  };
};
