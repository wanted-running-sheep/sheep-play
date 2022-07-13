import styled, { css } from 'styled-components';
import Item from '@/components/DropDownMenu/Item';
import { NavBarItemInterface } from 'navigation';

interface ListProps {
  menuItems: NavBarItemInterface[];
  isAnimation: boolean;
}

const List = ({ menuItems, isAnimation }: ListProps) => {
  return (
    <Wrapper isAnimation={isAnimation}>
      <Container>
        {menuItems.map((menuItem, index) => (
          <Item key={index} menuItem={menuItem} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default List;
const Wrapper = styled.div<{ isAnimation: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 0.25rem);
  right: 0px;
  z-index: ${({ theme }) => theme.zIndex.menuLevel};

  ${({ theme, isAnimation }) => {
    const { dropDownMountedAnimation, dropDownUnMountedAnimation } =
      theme.animation.dropDownAnimation;
    return css`
      animation: ${isAnimation
          ? dropDownMountedAnimation
          : dropDownUnMountedAnimation}
        0.3s ease-in-out;
    `;
  }}
`;

const Container = styled.ul`
  width: 150px;
  padding: 10px;
  background: ${({ theme }) => theme.color.background.primary};
`;
