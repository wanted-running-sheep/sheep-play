import React, { ChangeEvent, forwardRef } from 'react';
import styled from 'styled-components';
import Search from '@/assets/icons/Search';
interface SearchInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onSubmit?: (event: React.FormEvent) => void;
  placeholder?: string;
  value: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    const clickedSearchButton = (event: React.FormEvent) => {
      event.preventDefault();
      props.onSubmit && props.onSubmit(event);
    };

    return (
      <>
        <Wrapper onSubmit={clickedSearchButton}>
          <Input type="search" ref={ref} {...props} />
          <SearchButton type="submit">
            <Search />
          </SearchButton>
        </Wrapper>
      </>
    );
  }
);

export default SearchInput;

const Wrapper = styled.form`
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

const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.color.background.indigo};
`;
