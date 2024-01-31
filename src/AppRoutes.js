import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const SinglePostPage = lazy(() =>
  import('./pages/SinglePostPage/SinglePostPage.jsx')
);
const SinglePostComentsPage = lazy(() =>
  import('pages/SinglePostComentPage/SingelPostComentPage')
);
const Reviews = lazy(() =>
  import('pages/Reviews/Reviews.jsx')
);
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="posts/:id" element={<SinglePostPage />}>
          <Route path="credits" element={<SinglePostComentsPage />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
