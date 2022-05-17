import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchActorsDetails } from 'services/movieApi';
// import Section from 'components/Section/Section';
import CastCard from 'components/CastCard/CastCard';
import s from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  console.log(cast);

  useEffect(() => {
    fetchActorsDetails(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <ul className={s.wrapper}>
      {cast && cast.map(item => <CastCard item={item} key={item.id} />)}
    </ul>
  );
}
