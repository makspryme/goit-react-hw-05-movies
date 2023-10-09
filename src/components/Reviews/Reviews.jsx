import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const param = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${param.movieId}/reviews?language=en-US&api_key=caed7e2ebd11bebde344d1e5386bdf39`
    )
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setReviews(response);
      })
      .catch(err => alert('Oops error, please reload page'));
  }, [param.movieId]);

  return (
    <section>
      <ul>
        {reviews?.results.length > 0 ? (
          reviews.results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <h2>{'No Reviews :('}</h2>
        )}
      </ul>
    </section>
  );
};

export default Reviews;
