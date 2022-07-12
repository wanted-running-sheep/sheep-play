import { MovieProps } from 'Movies';

export class keywordService {
  private regex!: RegExp;
  private reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  private reHasRegExpChar = RegExp(this.reRegExpChar.source);

  private escapeRegExp = (string: string) => {
    return string && this.reHasRegExpChar.test(string)
      ? string.replace(this.reRegExpChar, '\\$&')
      : string || '';
  };
  private createFuzzyMatcher(input: string) {
    const pattern = input
      .split('')
      .map(this.escapeRegExp)
      .map(
        (pattern) => '([' + pattern.toLowerCase() + pattern.toUpperCase() + '])'
      )
      .join('.*?');
    this.regex = new RegExp(pattern);
  }

  searchMovies(input: string, movies: MovieProps[]) {
    this.createFuzzyMatcher(input);
    return movies.filter((movie) => this.regex.test(movie.title));
  }
  searchMoviesByDistance(input: string, movies: MovieProps[]) {
    const inputLength = input.length;
    const filteredMovies = keywordTest.searchMovies(input, movies);
    const similarMovies = filteredMovies.map((movie) => {
      let longestDistance = 0;

      // title에 비슷한 문자가 있다면 형광펜으로 표시
      const title = movie.title.replace(this.regex, (match, ...groups) => {
        const keyword = groups.slice(0, inputLength);
        let keywordLength = keyword.length;
        let index = 0;
        let lastIndex = 0;
        let highlightKeyword = new Array<string>();

        // 한 글자씩 확인하며 키워드와 같은 글자에 <mark> 태그 추가 + 거리 비례 가장 유사한 검색어 확인
        while (index < keywordLength) {
          const sameWordIndex = groups.indexOf(0, inputLength);
          highlightKeyword.push(match.substring(lastIndex, sameWordIndex));
          highlightKeyword.push(`<mark>${keyword[index]}</mark>`);
          if (lastIndex > 0) {
            longestDistance = Math.max(
              longestDistance,
              sameWordIndex - lastIndex
            );
          }
          lastIndex = sameWordIndex + 1;
          index++;
        }
        return highlightKeyword + '';
      });

      return { title, longestDistance };
    });
    return similarMovies.sort(
      (firstMovie, secondMovie) =>
        firstMovie.longestDistance - secondMovie.longestDistance
    );
  }
}

export const keywordTest = new keywordService();
