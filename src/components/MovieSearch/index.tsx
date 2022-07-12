import React, { useRef, useState, useEffect } from 'react';

import SearchInput from './SearchInput';
import SearchedList from './SearchedList';

import { useMovieModel } from '@/modules/models/useMovieModel';

import styled from 'styled-components';

import DropDownMenu from '@/components/DropDownMenu/';

const MovieSearch = () => {
  const [inputText, setInputText] = useState<string | undefined>('');
  const [tempText, setTempText] = useState<string | undefined>(inputText);
  const [keyEvent, setKeyEvent] = useState<React.KeyboardEvent>();
  const [currentFocusTitle, setCurrentFocusTitle] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { getMovies, movies } = useMovieModel();

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

  const requestMovieResult = (event: React.FormEvent) => {
    console.log('제출', inputRef.current?.value);
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

      <DropDownMenu />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
