// import styles from './single-post.module.css';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getPostById } from 'api/post';

// const SinglePost = () => {
//   const [post, setPost] = useState();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState();
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         setLoading(true);
//         const { data } = await getPostById(id);
//         console.log(data);
//         setPost(data);
//       } catch {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//   }, []);
//   return (
//     <div>
//       {loading && <p>...Loading</p>}
//       {error && <p>Error: {error}</p>}
//       {post && (
//         <>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default SinglePost;
