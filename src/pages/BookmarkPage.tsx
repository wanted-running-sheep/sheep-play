import { useEffect, useState } from 'react';
import { MovieProps } from 'Movies';
import NoData from '@/components/Bookmark/NoData';
import Layout from '@/components/Layout';
import Slide from '@/components/Slide';
import { useMovieState } from '@/context/MovieContext';

const BookmarkPage = () => {
  const { movies } = useMovieState();
  const [bookmarkMovies, setBookmarkMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const likedMovies = movies.filter((movie) => movie.like);
    setBookmarkMovies(likedMovies);
  }, [JSON.stringify(movies)]);

  return (
    <Layout>
      {bookmarkMovies.length ? <Slide movies={bookmarkMovies} /> : <NoData />}
    </Layout>
  );
};

export default BookmarkPage;
