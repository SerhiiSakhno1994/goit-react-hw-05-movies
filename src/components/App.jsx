import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from './Layout/Layout';
// import Homepage from './pages/HomePage/HomePage';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
// import Cast from './pages/Cast/Cast';
// import Reviews from './pages/Reviews/Reviews';

import Loader from './Loader/Loader';
const Homepage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "Homepage" */)
);
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
