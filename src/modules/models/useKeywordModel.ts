import { MovieProps } from 'Movies';
import { keywordTest } from '@/modules/services/keywordService';

interface FilteredMoviesProps {
  inputText: string;
  movies: MovieProps[];
  listCount?: number;
}
export const useKeywordModel = () => {
  const getRecommendMovies = ({
    inputText,
    movies,
    listCount,
  }: FilteredMoviesProps) => {
    const filteredMovies = keywordTest.searchMovies(inputText, movies);
    return filteredMovies.slice(0, listCount);
  };

  const getRecommendMoviesTitle = ({
    inputText,
    movies,
    listCount,
  }: FilteredMoviesProps) => {
    const similarMovies = keywordTest.searchMoviesByDistance(inputText, movies);
    return similarMovies.slice(0, listCount).map(({ title }) => title);
  };

  return {
    getRecommendMovies,
    getRecommendMoviesTitle,
  };
};
