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
    const getLikedMovies = async () => {
      const likedMovies = await movies.filter((movie) => movie.like);
      setBookmarkMovies(likedMovies);
    };
    getLikedMovies();
  }, []);
  return (
    <Layout>
      {bookmarkMovies.length ? <Slide movies={bookmarkMovies} /> : <NoData />}
    </Layout>
  );
};

export default BookmarkPage;
