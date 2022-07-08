import React from 'react';

import styled from 'styled-components';

interface searchListProps {
  inputText?: string;
}

const SearchedList = ({ inputText }: searchListProps) => {
  const tempArray = [1, 2, 3];
  return (
    <Wrapper>
      <GuideText>추천 검색어</GuideText>
      <div>
        <ul>
          {tempArray.map((num) => (
            <RecommenedTextWrap key={num}>
              <RecommendedText>{inputText}</RecommendedText>
            </RecommenedTextWrap>
          ))}
        </ul>
      </div>
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

const RecommenedTextWrap = styled.li`
  padding: 6px 0;
`;

const RecommendedText = styled.span`
  color: ${({ theme }) => theme.color.font.gray};
  font-size: 14px;
`;

export default SearchedList;
