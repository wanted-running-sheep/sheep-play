import React from 'react';
import styled from 'styled-components';

interface ItemProps {
  Icon: () => JSX.Element;
  title: 'Search' | 'Bookmark';
  onClickLink: () => void;
}

const Item: React.FC<ItemProps> = ({ Icon, title, onClickLink }) => {
  return (
    <ItemContainer onClick={onClickLink}>
      <IconContainer>
        <Icon />
      </IconContainer>
      <ItemTitle>{title}</ItemTitle>
    </ItemContainer>
  );
};

export default Item;

const ItemContainer = styled.li`
  display: flex;
  color: ${({ theme }) => theme.color.font.gray};
  height: 30px;
  align-items: center;
  padding: 20px 10px;
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    background: linear-gradient(to left, #9796ff, #8987ff, #8280ff, #7977ff);
    color: #fff;
  }
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const ItemTitle = styled.span`
  font-size: 14px;
`;
