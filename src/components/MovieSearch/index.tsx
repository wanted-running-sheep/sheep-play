import React, { useRef, useState, useEffect } from 'react';

import SearchInput from './SearchInput';
import SearchedList from './SearchedList';

import { useMovieModel } from '@/modules/models/useMovieModel';
import { useKeywordModel } from '@/modules/models/useKeywordModel';
import { useMovieState } from '@/context/MovieContext';

import styled from 'styled-components';

const MovieSearch = () => {
  const [inputText, setInputText] = useState<string>('');
  const [tempText, setTempText] = useState<string>(inputText);
  const [keyEvent, setKeyEvent] = useState<React.KeyboardEvent>();
  const [currentFocusTitle, setCurrentFocusTitle] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { getMovies, movies } = useMovieModel();
  const { getRecommendMovies } = useKeywordModel();
  const { setSearchedMovies } = useMovieState();

  let debounce: NodeJS.Timeout;

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    const INTERVAL_TIME = 300;
    debounce = setTimeout(() => {
      setInputText(tempText);
    }, INTERVAL_TIME);
    return () => {
      clearTimeout(debounce);
    };
  }, [tempText]);

  const onChangeInput = () => {
    if (inputRef.current) {
      setTempText(inputRef.current.value);
      setCurrentFocusTitle(inputRef.current.value);
    }
  };

  const pushedKeyArrow = (event: React.KeyboardEvent) => {
    setKeyEvent(event);
  };

  const handleFocusTitle = (title: string) => {
    setCurrentFocusTitle(title);
  };

  const initSearchState = () => {
    setInputText('');
    setTempText('');
    setCurrentFocusTitle('');
    clearTimeout(debounce);
  };

  const reqFilteredMoviesAndClear = (targetWord: string) => {
    const searchedResult = getRecommendMovies({
      inputText: targetWord,
      movies: movies,
    });

    setSearchedMovies(searchedResult);
    initSearchState();
  };

  const handleSubmit = (event: React.FormEvent) => {
    if (inputRef.current) {
      const reqTargetWord = inputRef.current?.value;
      reqFilteredMoviesAndClear(reqTargetWord);
    }
  };

  return (
    <Wrapper>
      <SearchWrap>
        <SearchInput
          onChange={onChangeInput}
          ref={inputRef}
          placeholder="Search"
          onKeyDown={pushedKeyArrow}
          onSubmit={handleSubmit}
          value={currentFocusTitle}
        />

        {inputText && (
          <SearchedList
            inputText={inputText as string}
            movies={movies}
            keyEvent={keyEvent}
            handleFocusTitle={handleFocusTitle}
            reqFilteredMoviesAndClear={reqFilteredMoviesAndClear}
          />
        )}
      </SearchWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const SearchWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  width: 100%;
  max-width: 430px;
  padding: 0 10px;
  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.color.background.indigo};

  position: relative;

  svg {
    width: 18px;
    color: ${({ theme }) => theme.color.font.gray};
    cursor: pointer;
  }
`;

export default MovieSearch;
