import { Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import TopFilms from './TopFilms/TopFilms';
import { useEffect } from 'react';
import Movies from './Movies/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import css from './App.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 20px;

  &.active {
    color: orange;
  }
`;

const App = () => {
  const [topFilms, setTopFilms] = useState({});

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=caed7e2ebd11bebde344d1e5386bdf39'
    )
      .then(r => r.json())
      .then(r => setTopFilms(r));
  }, []);

  return (
    <div>
      <nav className={css.navigation}>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movie">Movies</StyledLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" index element={<TopFilms topFilms={topFilms} />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
