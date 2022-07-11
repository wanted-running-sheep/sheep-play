import { NavBarItemInterface } from 'navigation';
import styled from 'styled-components';

interface ItemProps {
  menuItem: NavBarItemInterface;
}

const Item = ({ menuItem }: ItemProps) => {
  const { Icon, title, onClickLink } = menuItem;
  return (
    <Container onClick={onClickLink}>
      <ItemTitle>{title}</ItemTitle>
      <IconContainer>
        <Icon />
      </IconContainer>
    </Container>
  );
};

export default Item;

const Container = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    padding-bottom: 10px;
  }

  &:hover {
    opacity: 0.3;
  }
`;

const IconContainer = styled.div`
  width: 20px;
  height: 20px;
  margin-left: 5px;
  color: ${({ theme }) => theme.color.font.white};
`;

const ItemTitle = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.font.white};
`;
