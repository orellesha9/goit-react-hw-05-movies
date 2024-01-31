import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviewsById } from 'api/post';

import styles from './reviews.module.css';

const Reviews = () => {
  const [coments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const isComments = Boolean(coments.length);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const { data } = await getReviewsById(id);
        setComments(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [id]);
  const elements = coments.map(({ id, author, content }) => (
    <li key={id}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isComments && coments.results !== 0 ? (
        <ul className={styles.list}>{elements}</ul>
      ) : (
        <p>We don't have any comments for this movie.</p>
      )}{' '}
    </>
  );
};

export default Reviews;
