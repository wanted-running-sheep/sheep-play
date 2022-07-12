import { MovieProps } from 'Movies';
import createFuzzyMatcher from './createFuzzyMatcher';

interface FilteredMoviesProps {
  inputText: string;
  movies: MovieProps[];
  listCount?: number;
}

export default function getFilteredMovies({
  inputText,
  movies,
  listCount,
}: FilteredMoviesProps) {
  const regex = createFuzzyMatcher(inputText);
  const filteredMovies = movies.filter((movie) => regex.test(movie.title));

  return filteredMovies.slice(0, listCount);
}

export const getFilteredMovieTitles = ({
  inputText,
  movies,
  listCount,
}: FilteredMoviesProps) => {
  const regex = createFuzzyMatcher(inputText);
  const filteredMovies = movies
    .filter((movie) => regex.test(movie.title))
    .map((row) => {
      let longestDistance = 0;

      const title = row.title.replace(regex, (match, ...groups) => {
        const letters = groups.slice(0, inputText.length);
        let lastIndex = 0;
        let highlighted: string[] = [];
        for (let i = 0, l = letters.length; i < l; i++) {
          const idx = match.indexOf(letters[i], lastIndex);
          highlighted.push(match.substring(lastIndex, idx));
          highlighted.push(`<mark>${letters[i]}</mark>`);
          if (lastIndex > 0) {
            longestDistance = Math.max(longestDistance, idx - lastIndex);
          }
          lastIndex = idx + 1;
        }
        return highlighted.join('');
      });

      return { title, longestDistance };
    });
  filteredMovies.sort((a, b) => a.longestDistance - b.longestDistance);
  return filteredMovies.slice(0, listCount).map(({ title }) => title);
};
