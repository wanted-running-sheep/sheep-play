import Slide from '@/components/Slide';
import Layout from '@/components/Layout';
import { useMovieState } from '@/context/MovieContext';
import NoData from '@/components/Bookmark/NoData';

const SearchPage = () => {
  const { movies } = useMovieState();

  return (
    <Layout>{movies.length ? <Slide movies={movies} /> : <NoData />}</Layout>
  );
};

export default SearchPage;
