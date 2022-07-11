import { useState, useCallback } from 'react';
import MovieInfo from './components/Modal/MovieInfo';

const App = () => {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onClickToggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && <MovieInfo close={onClickToggleModal} />}
      <h1>안녕하세요</h1>
      <h1>안녕하세요</h1>
      <h1>안녕하세요</h1>
      <h1>안녕하세요</h1>
      <button onClick={onClickToggleModal}>모달</button>
    </>
  );
};
export default App;
