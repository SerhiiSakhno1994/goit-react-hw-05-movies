import { Link } from 'react-router-dom';

import s from './TrendsGalleryItem.module.css';
import ErrorImage from '../../icons/no_mage.jpg';

export default function TrendsGalleryItem({ item }) {
  return (
    <li key={item.id} className={s.ImageGalleryItem}>
      <Link to={`/movies/${item.id}`} className={s.link}>
        <img
          className={s.ImageGalleryItemImage}
          src={`https://themoviedb.org/t/p/w342${item.poster_path}`}
          alt={item.original_title}
        />

        <div className={s.text}>
          {item.title ? (
            <>
              <h3 className={s.textTitle}>{item.title}</h3>
            </>
          ) : (
            <h3 className={s.textTitle}>{item.original_name}</h3>
          )}
        </div>
      </Link>
    </li>
  );
}
