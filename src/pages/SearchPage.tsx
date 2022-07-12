import Slide from '@/components/Slide';
import Layout from '@/components/Layout';
import { useMovieState } from '@/context/MovieContext';

const SearchPage = () => {
  /* const { movies } = useMovieState(); */

  return (
    <Layout>
      <Slide /* movies={movies}  */ />
    </Layout>
  );
};

export default SearchPage;
