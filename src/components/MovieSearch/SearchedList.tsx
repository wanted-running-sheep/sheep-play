import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { MovieProps } from 'Movies';
import getFilteredMovies from '@/utils/recommend-movie-list';

interface searchListProps {
  inputText: string;
  movies: MovieProps[];
  keyEvent?: React.KeyboardEvent;
  handleFocusTitle: (title: string) => void;
}

const SearchedList = ({
  inputText,
  movies,
  keyEvent,
  handleFocusTitle,
}: searchListProps) => {
  const [recommendedMovies, setRecommendedMovies] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const listRef = useRef<HTMLUListElement>(null);
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

  useEffect(() => {
    if (keyEvent) handleKeyPress(keyEvent);
  }, [keyEvent]);

  useEffect(() => {
    if (listRef.current && isVerifiedIndex()) {
      const movieTitle = listRef.current.children[currentIndex].textContent;
      if (movieTitle !== null) handleFocusTitle(movieTitle);
    }
  }, [currentIndex]);

  const isVerifiedIndex = () => currentIndex !== -1;

  const createMarkup = (htmlElement: string) => {
    return { __html: htmlElement };
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event) {
      switch (event.key) {
        case 'ArrowDown':
          setCurrentIndex((prevIndex) => prevIndex + 1);
          if (recommendedMovies.length === currentIndex + 1) setCurrentIndex(0);
          break;
        case 'ArrowUp':
          setCurrentIndex((prevIndex) => prevIndex - 1);
          if (currentIndex <= 0) setCurrentIndex(recommendedMovies.length - 1);
          break;
        case 'Escape':
          setCurrentIndex(-1);
          break;
      }
    }
  };

  return (
    <Wrapper>
      <GuideText>추천 검색어</GuideText>
      <RecommendMoviesContainer>
        <RecommendedList ref={listRef}>
          {recommendedMovies.length === 0 ? (
            <RecommendedTextWrap isEmptyResult={true}>
              <RecommendedText>{MSG_NOT_FOUND_MOVIE}</RecommendedText>
            </RecommendedTextWrap>
          ) : (
            recommendedMovies.map((title, index) => (
              <RecommendedTextWrap
                key={index}
                isFocus={currentIndex === index ? true : false}
                isEmptyResult={false}
              >
                <RecommendedText>
                  <div dangerouslySetInnerHTML={createMarkup(title)} />
                </RecommendedText>
              </RecommendedTextWrap>
            ))
          )}
        </RecommendedList>
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
  position: absolute;
  top: 100%;
  z-index: 1;
`;

const GuideText = styled.span`
  color: ${({ theme }) => theme.color.font.gray};
  font-size: 14px;
`;

const RecommendMoviesContainer = styled.div`
  padding: 10px 0;
`;

const RecommendedList = styled.ul``;

const RecommendedTextWrap = styled.li<{
  isFocus?: boolean;
  isEmptyResult?: boolean;
}>`
  padding: 6px 0;

  background-color: ${({ theme, isFocus }) =>
    isFocus && theme.color.background.white};

  &:hover {
    cursor: ${({ isEmptyResult }) => !isEmptyResult && 'pointer'};
    background-color: ${({ theme, isEmptyResult }) =>
      !isEmptyResult && theme.color.background.white};
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
