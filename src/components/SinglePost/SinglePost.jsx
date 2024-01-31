// import styles from './single-post.module.css';
import { useState, useEffect } from 'react';
import styles from './single-post.module.css';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getPostById } from 'api/post';

const SinglePost = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { id } = useParams();
  const location = useLocation();
  const from = location.state?.from || '/';

  const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const { data } = await getPostById(id);
        console.log(data);
        setPost(data);
      } catch (error) {
        setError(error.message); // Використовуємо параметр error
      } finally {
        setLoading(false);
      }
    };

    fetchPost(); // Викликаємо функцію fetchPost() всередині useEffect, якщо це потрібно
  }, [id]); // Вказуємо id як залежність

  const goBack = () => navigate(from);
  const genreElements =
    post && post.genres.map(genre => <li key={genre.id}>{genre.name}</li>);

  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={goBack} type="button">
        Go back
      </button>
      {post && (
        <>
          <div className={styles.wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/original${post.poster_path}`}
              alt=""
              className={styles.img_title}
            />
            <ul className={styles.title_text}>
              <li className={styles.title}>{post.title}</li>
              <li >Popularity {post.popularity}</li>

              <li className={styles.heading_of_points}>Overview</li>
              <li>{post.overview}</li>
              <li className={styles.heading_of_points}>Genres</li>
              <li>{genreElements}</li>
            </ul>
          </div>
          <div className={styles.link}>
          <p>Additional information</p>
          <Link to="credits" state={{ from }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from }}>
            Reviews
          </Link>
          </div>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default SinglePost;
