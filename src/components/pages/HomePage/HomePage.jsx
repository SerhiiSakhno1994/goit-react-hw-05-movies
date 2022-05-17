import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import movieApp from 'services/movieApi';
import TrendsGallery from 'components/TrendsGallery/TrendsGallery';
import Loader from 'components/Loader/Loader';
const Homepage = () => {
  const [data, setData] = useState([]);
  const [loader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);

    movieApp.fetchMovieTrends().then(data => {
      setData(data.results);
      setIsLoader(false);
    });
  }, []);

  return (
    <>
      {loader && <Loader />}
      {data.length > 0 && <TrendsGallery data={data} />}
    </>
  );
};

export { Homepage };
