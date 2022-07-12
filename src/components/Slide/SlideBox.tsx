import React, {useRef, useCallback, useState, useEffect} from 'react'
import styled from 'styled-components'
import {MovieProps} from 'Movies';
import ArrowButton from '@/components/Slide/ArrowButton';
import useSlide from '@/hooks/useSlide';
import MovieInfo from '@/components/Modal/MovieInfo';
import useInfinityScroll from '@/hooks/useInfinityScroll';

interface SlideBoxProps {
    movies: MovieProps[];
}

const SlideBox = ({ movies}: SlideBoxProps) => {
    const slideRef = useRef<HTMLDivElement>(null);
    const { slideMaxIdx, currentSlide, setCurrentSlide } = useSlide(slideRef);
    const [selectedMovie, setSelectedMovie] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClickToggleModal = useCallback(
        (id?: number) => {
          if (id) setSelectedMovie(id);
          setIsModalOpen(!isModalOpen);
        },
        [isModalOpen]
      );

  return (
    <>
    {isModalOpen && (
        <MovieInfo close={() => onClickToggleModal()} movieId={selectedMovie} />
      )}
        <ArrowButton currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} slideMaxIdx={slideMaxIdx} />
        <SlideWrapper ref={slideRef}>
            {movies?.map(({ id, large_cover_image, title }) => (
            <PosterImageWrapper key={id}>
                <PosterImage
                key={id}
                src={large_cover_image}
                alt={title}
                onClick={() => onClickToggleModal(id)}
                />
            </PosterImageWrapper>
            ))}
        </SlideWrapper>
      </>
  )
}

export default SlideBox;

 const SlideWrapper = styled.div`
  height: 330px;
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin: 3em 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ theme }) => theme.media.mobile`
    margin: auto;
    overflow-x: scroll;
    scroll-behavior: smooth;
    &:not(:first-child) {
      margin-top: 20px;
    }
  `};
`; 

const PosterImageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    height: 400px;
  }
  ${({ theme }) => theme.media.mobile`
    &:hover {
      height: 100%;
    }
  `};
`;

const PosterImage = styled.img`
  height: 100%;
  object-fit: cover;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    border: 5px solid ${({ theme }) => theme.color.border.lightblue};
  }
  ${({ theme }) => theme.media.mobile`
    &:hover {
      border: 0;
    }
  `};
`;
