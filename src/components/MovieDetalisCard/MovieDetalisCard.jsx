import s from './MovieDetalisCard.module.css';

export default function MovieDetalisCard({ movie }) {
  return (
    <>
      <div className={s.cardImg}>
        <img
          className={s.img}
          src={`https://themoviedb.org/t/p/w342${
            movie.poster_path ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.title}
        />
      </div>
      <div className={s.cardText}>
        <h2 className={s.title}>{movie.title}</h2>
        <p className={s.tagline}>{movie.tagline}</p>
        <h3 className={s.status}>{movie.status}</h3>
        <p className={s.release_date}>{movie.release_date}</p>
        <h3 className={s.status}>Overview</h3>
        <p className={s.release_date}>
          {movie.overview ? movie.overview : 'not Overview'}
        </p>
      </div>
    </>
  );
}
