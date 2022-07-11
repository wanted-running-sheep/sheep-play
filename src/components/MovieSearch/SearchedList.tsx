import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { MovieProps } from 'Movies';
import getFilteredMovies from '@/utils/recommend-movie-list';

interface searchListProps {
  inputText: string;
  movies: MovieProps[];
}

const SearchedList = ({ inputText, movies }: searchListProps) => {
  const [recommendedMovies, setRecommendedMovies] = useState<string[]>([]);
  const filteredOptions = {
    inputText: inputText,
    movies: movies,
    listCount: 10,
  };
  const MSG_NOT_FOUND_MOVIE = '찾으려는 작품이 존재하지 않습니다.';

  useEffect(() => {
    console.log('inputText', inputText);
    setRecommendedMovies(getFilteredMovies(filteredOptions));
  }, [inputText]);

  const createMarkup = (htmlElement: string) => {
    return { __html: htmlElement };
  };

  return (
    <Wrapper>
      <GuideText>추천 검색어</GuideText>
      <RecommendMoviesContainer>
        <ul>
          {recommendedMovies.length === 0 ? (
            <RecommenedTextWrap isEnabledHover={false}>
              <RecommendedText>{MSG_NOT_FOUND_MOVIE}</RecommendedText>
            </RecommenedTextWrap>
          ) : (
            recommendedMovies.map((title, index) => (
              <RecommenedTextWrap key={index} isEnabledHover={true}>
                <RecommendedText>
                  <div dangerouslySetInnerHTML={createMarkup(title)} />
                </RecommendedText>
              </RecommenedTextWrap>
            ))
          )}
        </ul>
      </RecommendMoviesContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 430px;
  padding: 10px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.color.background.indigo};
`;

const GuideText = styled.span`
  color: ${({ theme }) => theme.color.font.gray};
  font-size: 14px;
`;

const RecommendMoviesContainer = styled.div`
  padding: 10px 0;
`;

const RecommenedTextWrap = styled.li<{ isEnabledHover: boolean }>`
  padding: 6px 0;

  &:hover {
    cursor: ${({ isEnabledHover }) => isEnabledHover && 'pointer'};
    background-color: ${({ theme, isEnabledHover }) =>
      isEnabledHover && theme.color.background.white};
  }
  mark {
    background-color: ${({ theme }) => theme.color.background.yellow};
  }
`;

const RecommendedText = styled.span`
  color: ${({ theme }) => theme.color.font.gray};
  font-size: 14px;
`;

export default SearchedList;
