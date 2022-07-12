import React from 'react'
import styled from 'styled-components'
import { RightDirection, LeftDirection } from '@/assets/icons';

interface ArrowButtonProps {
    currentSlide: number;
    slideMaxIdx: number;
    setCurrentSlide: (v: number) => void;
    
}

const ArrowButton = ({currentSlide, slideMaxIdx,setCurrentSlide}: ArrowButtonProps) => {
  const onClickSlide = (direction: number) => {
        if (currentSlide + direction > slideMaxIdx) {
            setCurrentSlide(0);
            return;
        }

        if (currentSlide + direction < 0) {
            setCurrentSlide(slideMaxIdx);
            return;
        }

        setCurrentSlide(currentSlide + direction);
  };

    return (
        <Arrows>
            <Button onClick={() => onClickSlide(-1)}>
            <LeftDirection />
            </Button>
            <Button onClick={() => onClickSlide(1)}>
            <RightDirection />
            </Button>
        </Arrows>
    )
}

export default ArrowButton

const Arrows = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 10px;
  svg {
    width: 30px;
    border-radius: 10px;
    cursor: pointer;
    color: #abacb4;
  }
  ${({ theme }) => theme.media.mobile`
    display: none;
  `};
`;

const Button = styled.button`
  padding: 0;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.background.darkgray};
  &:hover {
    opacity: 0.6;
  }
`;