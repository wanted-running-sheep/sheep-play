import Layout from '@/components/Layout';
import Slide from '@/components/Slide';
import { useMovieState } from '@/context/MovieContext';
import { MovieProps } from 'Movies';
import { useEffect, useState } from 'react';

const BookmarkPage = () => {
  const { movies } = useMovieState();
  const [bookmarkMovies, setBookmarkMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    setBookmarkMovies(movies.filter((movie) => movie.like));
  }, []);

  return (
    <Layout>
      <Slide movies={bookmarkMovies} />
    </Layout>
  );
};

export default BookmarkPage;
