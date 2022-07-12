import Slide from '@/components/Slide';
import Layout from '@/components/Layout';
import { useMovieState } from '@/context/MovieContext';
import MovieSearch from '@/components/MovieSearch';

const SearchPage = () => {
  const { movies } = useMovieState();

  return (
    <Layout>
      <Slide movies={movies} />
    </Layout>
  );
};

export default SearchPage;
