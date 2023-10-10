import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ApiListMovies from 'components/ApiListMovies/ApiListMovies';

const TopFilms = () => {
  const [topFilms, setTopFilms] = useState({});

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=caed7e2ebd11bebde344d1e5386bdf39'
    )
      .then(r => r.json())
      .then(r => setTopFilms(r));
  }, []);

  const location = useLocation();
  return (
    <section>
      <h2>Top Films</h2>
      <ApiListMovies results={topFilms.results} location={location} />
    </section>
  );
};

export default TopFilms;
