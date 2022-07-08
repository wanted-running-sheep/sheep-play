import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import RightDirection from '@/assets/icons/RightDirection';
import LeftDirection from '@/assets/icons/LeftDirection';

const Slide = ({ movies }) => {
    const TOTAL_SLIDES = 9;

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);

    // const [validNextBtn, setValidNextBtn] = useState(true);
    // const [validPrevBtn, setValidPrevBtn] = useState(true);

    const NextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };    
    
    const PrevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES); 
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };
    
    useEffect(() => {
       const slide = slideRef.current;
       if(slide) {
            slide.style.transition = 'all 0.5s ease-in-out';
            slide.style.transform = `translateX(-${currentSlide}00%)`;
       }
    }, [currentSlide]);

    return (
        <Container>
            <Arrows>
                <Button onClick={PrevSlide}>
                    <LeftDirection />
                </Button>
                <Button onClick={NextSlide}>
                    <RightDirection />
                </Button>
            </Arrows>
            <SlideWrapper ref={slideRef}>
                {movies?.map(({id, poster}) => (
                    <PosterImage key={id} src={poster} alt="title" />
                ))}
            </SlideWrapper>
        </Container>
    )
};

export default Slide;

const Container = styled.div`
    width: 100%;
    height: 500px;
    overflow: hidden;
`;

const Arrows = styled.div`
    display: flex;
    justify-content: flex-end;
    column-gap: 10px;
    margin-bottom: 3em;
    svg {
        width: 57px;
        background-color: ${({ theme }) => theme.color.background.darkgray};
        border-radius: 10px;
        cursor: pointer;
    }
`;

const Button = styled.button`
    padding: 0;
    background-color: ${({ theme }) => theme.color.background.white};
`;

const SlideWrapper = styled.div`
    height: 330px;
    max-width: 250px;
    display: flex;
    align-items: center;
    column-gap: 45px;
    margin-bottom: 2em;
`;

const PosterImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: 0.2s;
    &:hover{
        border: 5px solid #9896FF;
        object-fit: cover;
        height: 400px;
    }
`;
