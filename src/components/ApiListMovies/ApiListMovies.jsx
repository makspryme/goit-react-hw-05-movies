import { Link } from 'react-router-dom';
import defaultImg from '../../img/defaultPoster.jpg';

const ApiListMovies = ({ results, location }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
      }}
    >
      {results?.length > 0 &&
        results.map(({ name, title, id, poster_path }) => {
          return (
            <li
              key={id}
              style={{
                width: 225,
                marginBottom: 50,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <Link to={`/movie/${id}`} state={{ from: location }}>
                <div style={{ width: 150, height: 225 }}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w200${poster_path}`
                        : defaultImg
                    }
                    width={150}
                    alt=""
                  />
                  {name ?? title}
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default ApiListMovies;
