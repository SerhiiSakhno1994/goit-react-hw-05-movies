import PropTypes from 'prop-types';

import TrendsGalleryItem from './TrendsGalleryItem/TrendsGalleryItem';
import s from './TrendsGallery.module.css';

export default function TrendsGallery({ data }) {
  return (
    <ul className={s.CardGallery}>
      {data.map(item => (
        <TrendsGalleryItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

TrendsGallery.propTypes = {
  data: PropTypes.array.isRequired,
};
