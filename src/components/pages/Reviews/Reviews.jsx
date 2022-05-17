import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';

import { fetchReviewsDetails } from 'services/movieApi';
import ReviewsCard from 'components/ReviewsCard/ReviewsCard';
import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  const params = {
    slidesPerView: 3,
  };

  useEffect(() => {
    fetchReviewsDetails(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <ul className={s.wrapper}>
      <Swiper {...params}>
        {reviews &&
          reviews.map(item => <ReviewsCard item={item} key={item.id} />)}
      </Swiper>
    </ul>
  );
}
