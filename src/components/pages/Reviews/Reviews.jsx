import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchReviewsDetails } from 'services/movieApi';
import ReviewsCard from 'components/ReviewsCard/ReviewsCard';
import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviewsDetails(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <ul className={s.wrapper}>
      {reviews.length > 0 ? (
        reviews.map(item => <ReviewsCard item={item} key={item.id} />)
      ) : (
        <h4 className={s.noReviews}>No reviews</h4>
      )}
    </ul>
  );
}
