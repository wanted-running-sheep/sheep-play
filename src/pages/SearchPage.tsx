import React, { useEffect, useState } from 'react';
import Slide from '@/components/Slide';
import axios from 'axios';
import { MovieProps } from 'Movies';

const SearchPage = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/movies') //자체적으로 데이터 테스트용도로 3001포트 사용
      .then((res) => {
        setMovies(res.data.slice(0, 10));
      });
  }, []);

  return (
    <div>
      <Slide movies={movies} />
    </div>
  );
};

export default SearchPage;
