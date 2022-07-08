import React, { ChangeEvent, forwardRef } from 'react';

import styled from 'styled-components';

interface SearchInputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  (props, ref) => {
    return (
      <>
        <Input type="search" ref={ref} {...props} />
      </>
    );
  }
);

const Input = styled.input`
  height: 40px;
  width: 100%;
  max-width: 400px;
  background-color: ${({ theme }) => theme.color.background.indigo};
  color: ${({ theme }) => theme.color.font.white};
`;

export default SearchInput;
