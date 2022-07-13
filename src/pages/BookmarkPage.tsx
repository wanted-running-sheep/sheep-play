import { useEffect, useState } from 'react';
import { MovieProps } from 'Movies';
import EmptyData from '@/components/EmptyData';
import Layout from '@/components/Layout';
import Slide from '@/components/Slide';
import { useMovieState } from '@/context/MovieContext';

const BookmarkPage = () => {
  const { originMovies } = useMovieState();
  const [bookmarkMovies, setBookmarkMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const likedMovies = originMovies.filter((movie) => movie.like);
    setBookmarkMovies(likedMovies);
  }, [JSON.stringify(originMovies)]);

  return (
    <Layout>
      {bookmarkMovies.length ? (
        <Slide movies={bookmarkMovies} />
      ) : (
        <EmptyData />
      )}
    </Layout>
  );
};

export default BookmarkPage;
