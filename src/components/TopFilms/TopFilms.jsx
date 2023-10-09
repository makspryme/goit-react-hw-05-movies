import { Link, useLocation } from 'react-router-dom';

const TopFilms = ({ topFilms }) => {
  console.log(topFilms.page);
  console.log(topFilms);

  const location = useLocation();
  return (
    <section>
      <h2>Top Films</h2>
      <ul>
        {topFilms.page &&
          topFilms.results.map(({ name, title, id }) => {
            return (
              <li key={id}>
                <Link to={`/movie/${id}`} state={{ from: location }}>
                  {name ?? title}
                </Link>
                ;
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default TopFilms;
