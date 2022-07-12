import React, { useRef, useState, useEffect } from 'react';

import SearchInput from './SearchInput';
import SearchedList from './SearchedList';

import { useMovieModel } from '@/modules/models/useMovieModel';
import getFilteredMovies from '@/utils/recommend-movie-list';
import { useMovieState } from '@/context/MovieContext';

import styled from 'styled-components';

const MovieSearch = () => {
  const [inputText, setInputText] = useState<string | undefined>('');
  const [tempText, setTempText] = useState<string | undefined>(inputText);
  const [keyEvent, setKeyEvent] = useState<React.KeyboardEvent>();
  const [currentFocusTitle, setCurrentFocusTitle] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { getMovies, movies } = useMovieModel();
  const { setSearchedMovies } = useMovieState();

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    const INTERVAL_TIME = 300;
    const debounce = setTimeout(() => setInputText(tempText), INTERVAL_TIME);
    return () => clearTimeout(debounce);
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
    setCurrentFocusTitle('');
  };

  const requestMovieResult = (event: React.FormEvent) => {
    if (inputRef.current) {
      const requestTargetWord = inputRef.current?.value;
      const searchedResult = getFilteredMovies({
        inputText: requestTargetWord,
        movies: movies,
      });
      setSearchedMovies(searchedResult);
      initSearchState();
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
          onSubmit={requestMovieResult}
          value={currentFocusTitle}
        />

        {inputText && (
          <SearchedList
            inputText={inputText}
            movies={movies}
            keyEvent={keyEvent}
            handleFocusTitle={handleFocusTitle}
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
