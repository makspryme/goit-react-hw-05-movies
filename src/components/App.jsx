import { Routes, Route } from 'react-router-dom';
import { lazy, useState, useEffect } from 'react';

// import Home from './Home/Home';
// import Movies from './Movies/Movies';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home topFilms={topFilms} />} />
        <Route path="movie" element={<Movies />} />
        <Route path="movie/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
