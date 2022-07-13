import {
  keywordCheck,
  FilteredMoviesProps,
} from '@/modules/services/keywordService';

export const useKeywordModel = () => {
  const getRecommendMovies = (filterOptions: FilteredMoviesProps) => {
    keywordCheck.createFuzzyMatcher(filterOptions.inputText);
    return keywordCheck
      .getMoviesToDistance(filterOptions)
      .map(({ filteredMovie }) => filteredMovie);
  };

  const getRecommendMoviesTitle = (filterOptions: FilteredMoviesProps) => {
    keywordCheck.createFuzzyMatcher(filterOptions.inputText);
    return keywordCheck
      .getMoviesToDistance(filterOptions)
      .map(({ title }) => title);
  };

  return {
    getRecommendMovies,
    getRecommendMoviesTitle,
  };
};
