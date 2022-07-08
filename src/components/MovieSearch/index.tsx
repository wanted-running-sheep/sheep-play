import React, { useRef, useState } from 'react';

import SearchInput from './SearchInput';
import SearchedList from './SearchedList';

import styled from 'styled-components';
import Search from '@/assets/icons/Search';

const MovieSearch = () => {
  const [inputText, setInputText] = useState<string | undefined>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = () => {
    setInputText(inputRef.current?.value);
  };

  return (
    <Wrapper>
      <SearchWrap>
        <SearchInput
          onChange={onChangeInput}
          ref={inputRef}
          placeholder="Search"
        />
        <Search />
      </SearchWrap>
      {inputText && <SearchedList inputText={inputText} />}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;

  width: 100%;
  max-width: 430px;
  padding: 0 10px;
  margin-bottom: 8px;

  background-color: ${({ theme }) => theme.color.background.indigo};

  svg {
    width: 18px;
    color: ${({ theme }) => theme.color.font.gray};
    cursor: pointer;
  }
`;

export default MovieSearch;
