import avatar from './avatar.webp';
import s from './CastCard.module.css';

export default function CastCard({ item }) {
  return (
    <li className={s.container}>
      {item.profile_path ? (
        <img
          className={s.avatarImg}
          src={`https://themoviedb.org/t/p/w185/${item.profile_path}`}
          alt={item.name}
        />
      ) : (
        <img className={s.avatar} src={avatar} alt={item.name} />
      )}
      <h2 className={s.name}>{item.name}</h2>
      <p>{item.character}</p>
    </li>
  );
}
