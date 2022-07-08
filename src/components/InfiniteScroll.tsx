import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MovieProps } from 'Movies';
import useInfinityScroll from '@/hooks/useInfinityScroll';

export default function InfiniteScroll(): JSX.Element {
  const [movies, setMovies] = useState<MovieProps[][]>([]);
  const [renderMovies, setRenderMovies] = useState<MovieProps[][]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const fetchMoreRef = useRef<HTMLDivElement>(null);
  const intersecting = useInfinityScroll(fetchMoreRef);

  const sliceMovieList = (movies: MovieProps[]) => {
    const newArr = [];
    const num = Math.ceil(movies.length / 10);

    for (let i = 1; i <= num; i++) {
      const arr = movies.slice((i - 1) * 10, i * 10);
      newArr.push(arr);
    }

    return newArr;
  };

  useEffect(() => {
    fetch('/data/mockdata.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data: MovieProps[]) => {
        const sliceMovies = sliceMovieList(data);
        setMovies(sliceMovies);
        setRenderMovies(sliceMovies.slice(currentIdx, 3));
        setCurrentIdx(currentIdx + 3);
      });
  }, []);

  useEffect(() => {
    if (intersecting && currentIdx) {
      setRenderMovies((prevRenderMovies) => {
        console.log(prevRenderMovies);
        return [
          ...prevRenderMovies,
          ...movies.slice(currentIdx, currentIdx + 3),
        ];
      });
      setCurrentIdx((prevIdx) => prevIdx + 3);
    }
  }, [intersecting]);

  return (
    <>
      <Container>
        {renderMovies.map((sliceMovies, i) => {
          return (
            <PostBox key={i}>
              {sliceMovies.map((movie) => {
                return (
                  <PostItem key={movie.id}>
                    <img src={movie.medium_cover_image} />
                  </PostItem>
                );
              })}
            </PostBox>
          );
        })}
      </Container>
      <div ref={fetchMoreRef}></div>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PostBox = styled.div`
  display: flex;
`;
const PostItem = styled.div`
  width: 200px;
  height: 350px;
`;

const PostImg = styled.img`
  width: 100%;
  height: 100%;
`;
