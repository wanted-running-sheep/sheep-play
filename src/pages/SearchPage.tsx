import React, { useEffect, useState } from 'react'
import Slide from '@/components/Slide';
import axios from 'axios';


const SearchPage = () => {
  const [movies, setMovies] = useState();
  useEffect(() => {
    axios.get('http://localhost:3001/movies') //자체적으로 데이터 테스트용도로 3001포트 사용
      .then((res) => {
        setMovies(res.data.slice(0,10));  
      });
  }, []);
  return (
    <div>
      {/* !!배열을 분산해서 10개씩 슬라이드에 넣어서 매핑해줘야 함. */}
      <Slide movies={movies}/>
    </div>
  )
};

export default SearchPage;