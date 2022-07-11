import React, { ChangeEvent, forwardRef } from 'react';
import Search from '@/assets/icons/Search';
import styled from 'styled-components';

interface SearchInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    return (
      <Wrapper>
        <Input type="search" ref={ref} {...props} />
        <Search />
      </Wrapper>
    );
  }
);

export default SearchInput;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Input = styled.input`
  height: 40px;
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.color.background.indigo};
  color: ${({ theme }) => theme.color.font.white};
`;
