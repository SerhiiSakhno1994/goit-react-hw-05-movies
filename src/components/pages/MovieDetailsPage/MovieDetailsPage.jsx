import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useNavigate } from 'react-router-dom';

import movieApp from 'services/movieApi';
import Section from 'components/Section/Section';
import MovieDetalisCard from 'components/MovieDetalisCard/MovieDetalisCard';
import s from '../../Layout/Layout.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    if (movie) {
      return;
    }
    movieApp.fetchMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movie, movieId]);

  return (
    <>
      {movie && (
        <>
          <button onClick={goBack}> Go back</button>
          <Section>
            <MovieDetalisCard movie={movie} />
          </Section>
          <Section>
            <NavLink to={`/movies/${movie.id}/cast`} className={s.link}>
              Cast
            </NavLink>
            <NavLink to={`/movies/${movie.id}/reviews`} className={s.link}>
              Reviews
            </NavLink>
          </Section>
          <div className={s.wrapper}>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}

export { MovieDetailsPage };
