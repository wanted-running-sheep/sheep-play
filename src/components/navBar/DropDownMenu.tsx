import styled, { css, Keyframes } from 'styled-components';
import { NavBarItemInterface } from '.';
import MenuItem from './MenuItem';

interface DropDownMenuProps {
  menuItems: NavBarItemInterface[];
  dropDownTrigger: boolean;
  animation: Keyframes;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({
  menuItems,
  animation,
}) => {
  return (
    <>
      <Wrapper animation={animation}>
        <Container>
          {menuItems.map((menuItem, i) => (
            <MenuItem key={i} menuItem={menuItem} />
          ))}
        </Container>
      </Wrapper>
    </>
  );
};

export default DropDownMenu;

const Wrapper = styled.div<{ animation: Keyframes }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 0.25rem);
  left: 0px;
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
