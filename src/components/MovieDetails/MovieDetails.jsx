import defaultImg from '../../img/default-img.jpg';
import { useEffect, useState } from 'react';
import { Outlet, useParams, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  margin-right: 15px;

  &:hover {
    color: orange;
  }
`;

const StyledLinkBack = styled(NavLink)`
  color: black;
  padding: 2px;
  text-decoration: none;
  font-size: 20px;
  border: 1px solid black;

  &:hover {
    color: white;
    background-color: orange;
  }
`;

const MovieDetails = () => {
  const [aboutFilm, setAboutFilm] = useState(null);

  const param = useParams();
  console.log(param.movieId);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${param.movieId}?language=en-US&api_key=caed7e2ebd11bebde344d1e5386bdf39`
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setAboutFilm(response);
      })
      .catch(err => alert('Oops error, please reload page'));
  }, [param.movieId]);

  const location = useLocation();

  return (
    <section>
      <StyledLinkBack to={location.state?.from ?? `/movie`}>
        ← back
      </StyledLinkBack>
      {aboutFilm && (
        <div style={{ marginTop: 15 }}>
          <img
            src={
              aboutFilm.poster_path
                ? `https://image.tmdb.org/t/p/w200${aboutFilm.poster_path}`
                : defaultImg
            }
            width={300}
            alt=""
          />
          <h2>{aboutFilm.title}</h2>
          <h3>Score: {aboutFilm.vote_average}</h3>
          <h3>Overview</h3>
          <p style={{ width: 400 }}>{aboutFilm.overview}</p>
          <h3>Genres: {aboutFilm.genres.map(({ name }) => `${name} `)}</h3>
        </div>
      )}

      <StyledLink to="cast">Cast</StyledLink>
      <StyledLink to="reviews">Reviews</StyledLink>
      <Outlet />
    </section>
  );
};

export default MovieDetails;
