import { useEffect } from 'react';
import Slide from '@/components/Slide';
import { useMovieModel } from '@/modules/models/useMovieModel';
import Layout from '@/components/Layout';

const SearchPage = () => {
  const { movies, getMovies } = useMovieModel();
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Layout>
      <Slide movies={movies} />
    </Layout>
  );
};

export default SearchPage;
