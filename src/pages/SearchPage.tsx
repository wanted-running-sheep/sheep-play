import Slide from '@/components/Slide';
import Layout from '@/components/Layout';
import { useMovieState } from '@/context/MovieContext';
import MovieSearch from '@/components/MovieSearch';
import NoData from '@/components/Bookmark/NoData';

const SearchPage = () => {
  const { movies } = useMovieState();

  if (!movies.length) return <NoData />;

  return (
    <Layout>
      <Slide movies={movies} />
    </Layout>
  );
};

export default SearchPage;
