import { useState, useEffect } from 'react';
import styles from './post.module.css';
import { getAllPosts } from 'api/post';
import { Link } from 'react-router-dom';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await getAllPosts();
        setPosts(data.results?.length ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  },[]);

  const elements = posts.map(({ id, title }) => (
    <li key={id} className={styles.ImageGalleryItem}>
      <Link to={`/posts/${id}`}>{title}</Link>
    </li>
  ));
  return (
    <>
      {error && <p className={styles.error}>{error}</p>}
      {loading && <p>...Loading</p>}
      {Boolean(elements.length) && (
        <ol className={styles.ImageGallery}>{elements}</ol>
      )}
      ;
    </>
  );
};

/*
class Post extends Component {
  state = {
    posts: [],
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    try {
      const { data } = await getAllPosts();
      this.setState({
        posts: data.hits?.length ? data.hits : [],
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        loading: false,
      });
    }
    // getAllPosts()
    //   .then(({ data }) => {
    //     this.setState({
    //       posts: data.hits?.length ? data.hits : [],
    //     });
    //   })
    //   .catch(error => {
    //     this.setState({ error: error.message });
    //   })
    //   .finally(() => {
    //     this.setState({
    //       loading: false,
    //     });
    //   });
  }

  render() {
    const { posts, loading, error } = this.state;
    const elements = posts.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id} className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItem_image}
          src={webformatURL}
          alt=""
        />
      </li>
    ));
    return (
      <>
      <PostSearchForm/>
        {error && <p className={styles.error}>{error}</p>}
        {loading && <p>...Loading</p>}
        {Boolean(elements.length) && (
          <ImageGallery className={styles.ImageGallery}>{elements}</ImageGallery>
        )}
        ;
      </>
    );
  }
}
*/
export default Post;
