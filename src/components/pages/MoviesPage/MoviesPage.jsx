// import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { fetchMovieWithQuery } from 'services/movieApi';
import TrendsGallery from 'components/TrendsGallery/TrendsGallery';

import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';

const MoviesPage = () => {
  const [data, setData] = useState([]);
  // const [movieNameName, setMovieName] = useState('');
  const [loader, setIsLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('movie') || '';

  useEffect(() => {
    if (postQuery === '') {
      return;
    }
    setIsLoader(true);
    fetchMovieWithQuery(postQuery).then(r => {
      if (r.results.length === 0) {
        Notiflix.Report.failure(
          'WARNING',
          `Sorry, there is no image named ${postQuery}`,
          'Close'
        );
      }
      setData(state => [...r.results]);
      setIsLoader(false);
    });
  }, [postQuery]);

  const onSubmit = searchMovieName => {
    setData([]);
    // setMovieName(searchMovieName);
    setSearchParams({ movie: searchMovieName });
  };

  return (
    <div className="ImageInfo">
      <Searchbar onSubmit={onSubmit} />
      {loader && <Loader />}
      {data.length > 0 && <TrendsGallery data={data} />}
    </div>
  );
};

export default MoviesPage;
