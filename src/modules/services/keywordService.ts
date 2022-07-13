import { MovieProps } from 'Movies';

export interface FilteredMoviesProps {
  inputText: string;
  movies: MovieProps[];
  listCount?: number;
}
class keywordService {
  private _regex!: RegExp;
  private _reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  private _reHasRegExpChar = RegExp(this._reRegExpChar.source);

  private escapeRegExp = (string: string) => {
    return string && this._reHasRegExpChar.test(string)
      ? string.replace(this._reRegExpChar, '\\$&')
      : string || '';
  };

  /////////////////////////////////////////////////////////////

  public createFuzzyMatcher(input: string) {
    const pattern: string = input
      .split('')
      .map(this.escapeRegExp)
      .map(
        (pattern) => '([' + pattern.toLowerCase() + pattern.toUpperCase() + '])'
      )
      .join('.*?');
    this._regex = new RegExp(pattern);
  }
  public getMoviesToDistance({
    inputText,
    movies,
    listCount,
  }: FilteredMoviesProps) {
    const inputLength = inputText.length;

    const filteredMovies = movies
      .filter((movie) => this._regex.test(movie.title))
      .map((filteredMovie) => {
        let longestDistance = 0;

        // title에 비슷한 문자가 있다면 형광펜으로 표시
        const title = filteredMovie.title.replace(
          this._regex,
          (match, ...groups) => {
            const keyword = groups.slice(0, inputLength);
            let keywordLength = keyword.length;
            let index = 0;
            let lastIndex = 0;
            let highlightKeyword: string[] = [];

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
          }
        );

        return { filteredMovie, title, longestDistance };
      });

    filteredMovies.sort(
      (firstMovie, secondMovie) =>
        firstMovie.longestDistance - secondMovie.longestDistance
    );
    return filteredMovies.slice(0, listCount);
  }
}

export const keywordCheck = new keywordService();
