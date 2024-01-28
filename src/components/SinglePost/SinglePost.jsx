// import styles from './single-post.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from 'api/post';

const SinglePost = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { id } = useParams();

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


  return (
    <div>
      {loading && <p>...Loading</p>}
      {error && <p>Error: {error}</p>}
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default SinglePost;
