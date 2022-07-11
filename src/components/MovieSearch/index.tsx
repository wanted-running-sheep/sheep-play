import React, { useRef, useState } from 'react';

import SearchInput from './SearchInput';
import SearchedList from './SearchedList';

import styled from 'styled-components';

import DropDownMenu from '@/components/DropDownMenu/';

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

        {inputText && <SearchedList inputText={inputText} />}
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
