import { useRef, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import defaultImg from '../../img/default-img.jpg';

const Movies = () => {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get('movieId') ?? '';

  const movieIdRef = useRef(movieId ?? '');

  const fetchMovies = async () => {
    return await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieId}&include_adult=false&language=en-US&page=1&api_key=caed7e2ebd11bebde344d1e5386bdf39`
    )
      .then(r => r.json())
      .then(r => {
        setResults(r.results);
      })
      .catch(err => alert('Oops error, please reload page'));
  };

  if (movieIdRef.current !== '') {
    fetchMovies();
    movieIdRef.current = '';
  }

  function onSubmit(e) {
    e.preventDefault();
    fetchMovies();
  }

  const location = useLocation();

  return (
    <>
      <form
        action=""
        onSubmit={e => onSubmit(e)}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <input
          type="text"
          value={movieId}
          onChange={e => {
            setSearchParams({ movieId: e.target.value });
          }}
          style={{ padding: 5, marginRight: 15 }}
        />
        <button type="submit">Search</button>
      </form>

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: 30,
          marginRight: 30,
          marginTop: 50,
        }}
      >
        {results.length > 0 &&
          results.map(film => {
            return (
              <li
                key={film.id}
                style={{
                  width: 225,
                  marginBottom: 50,
                  marginLeft: 30,
                  marginRight: 30,
                }}
              >
                <div style={{ width: 150, height: 225 }}>
                  <img
                    src={
                      film.poster_path
                        ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                        : defaultImg
                    }
                    width={150}
                    alt=""
                  />
                </div>
                <Link to={`/movie/${film.id}`} state={{ from: location }}>
                  {film.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Movies;
