import Slide from '@/components/Slide';
import Layout from '@/components/Layout';
import { useMovieState } from '@/context/MovieContext';
import EmptyData from '@/components/EmptyData';

const SearchPage = () => {
  const { movies } = useMovieState();

  return (
    <Layout>{movies.length ? <Slide movies={movies} /> : <EmptyData />}</Layout>
  );
};

export default SearchPage;
