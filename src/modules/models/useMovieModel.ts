import { useState } from 'react';
import { movieRequest } from '@/modules/services/movieService';
import { AxiosResponse } from 'axios';

import { MovieProps } from 'Movies';

export const useMovieModel = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [originMovies, setOriginMovies] = useState<MovieProps[]>([]);
  const updateMovies = (response: AxiosResponse | void) => {
    if (response) {
      setMovies(response.data);
      setOriginMovies(response.data);
    }
  };

  const getMovieById = async (url: string = '') => {
    const response = await movieRequest.get(url);
    if (response) return response.data;
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
    getMovieById,
    getMovies,
    patchMovieById,
    originMovies,
    setOriginMovies,
  };
};
