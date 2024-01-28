import { Routes, Route } from 'react-router-dom';

import MainMenu from './MainMenu/MainMenu';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import SinglePostPage from 'pages/SinglePostPage/SinglePostPage';

export const App = () => {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
