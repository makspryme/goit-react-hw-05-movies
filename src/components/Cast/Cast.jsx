import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImg from '../../img/default-img.jpg';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${param.movieId}/credits?language=en-US&api_key=caed7e2ebd11bebde344d1e5386bdf39`
    )
      .then(response => response.json())
      .then(response => {
        setCasts(response);
      })
      .catch(err => alert('Oops error, please reload page'));
  }, [param.movieId]);

  console.log(casts)

  return (
    <section>
      <ul>
        {casts?.cast.length > 0 ? (
          casts.cast.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : defaultImg
                  }
                  width={70}
                  alt=""
                />
                <h3>name: {name}</h3>
                <p>character: {character}</p>
              </li>
            );
          })
        ) : (
          <h2>{`No cast :(`}</h2>
        )}
      </ul>
    </section>
  );
};

export default Cast;
