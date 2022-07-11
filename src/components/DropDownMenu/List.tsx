import styled, { css, Keyframes } from 'styled-components';
import { NavBarItemInterface } from '@/components/NavBar';
import Item from '@/components/DropDownMenu/Item';

interface ListProps {
  menuItems: NavBarItemInterface[];
  dropDownTrigger: boolean;
  animation: Keyframes;
}

const List = ({ menuItems, animation }: ListProps) => {
  return (
    <>
      <Wrapper animation={animation}>
        <Container>
          {menuItems.map((menuItem, index) => (
            <Item key={index} menuItem={menuItem} />
          ))}
        </Container>
      </Wrapper>
    </>
  );
};

export default List;

const Wrapper = styled.div<{ animation: Keyframes }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 0.25rem);
  right: 0px;
  ${({ animation }) => {
    return css`
      animation: ${animation} 0.3s ease-in-out;
    `;
  }}
`;

const Container = styled.ul`
  width: 150px;
  list-style: none;
  padding: 10px;
  background: ${({ theme }) => theme.color.background.primary};
`;
