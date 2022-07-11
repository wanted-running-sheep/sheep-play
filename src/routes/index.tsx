import { Route, Routes } from 'react-router-dom';
import { SearchPage, BookmarkPage } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/bookmark" element={<BookmarkPage />} />
    </Routes>
  );
};

export default Router;
