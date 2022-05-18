// import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { fetchMovieWithQuery } from 'services/movieApi';
import TrendsGallery from 'components/TrendsGallery/TrendsGallery';

import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';

const MoviesPage = () => {
  const [data, setData] = useState([]);
  const [movieNameName, setMovieName] = useState('');
  const [loader, setIsLoader] = useState(false);

  useEffect(() => {
    if (movieNameName === '') {
      return;
    }
    setIsLoader(true);
    fetchMovieWithQuery(movieNameName).then(r => {
      // console.log(r);
      if (r.results.length === 0) {
        Notiflix.Report.failure(
          'WARNING',
          `Sorry, there is no image named ${movieNameName}`,
          'Close'
        );
      }
      setData(state => [...state, ...r.results]);
      setIsLoader(false);
    });
  }, [movieNameName]);

  const onSubmit = searchMovieName => {
    setData([]);
    setMovieName(searchMovieName);
  };

  return (
    <div className="ImageInfo">
      <Searchbar onSubmit={onSubmit} />
      {loader && <Loader />}
      {data.length > 0 && <TrendsGallery data={data} />}
    </div>
  );
};

export { MoviesPage };
