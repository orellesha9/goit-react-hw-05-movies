import { useParams, } from 'react-router-dom';
import {useState,useEffect} from "react"
import { getCommetsByPostId } from 'api/post';





const SinglePostComentsPage = () => {
  const [coments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();



const isComments = Boolean(coments.length)

useEffect (() => {
    const fetchComments = async() => {
    try {
setLoading(true);
const {data} = await getCommetsByPostId(id)
setComments(data)
    }catch(error) {
setError(error.message)
    }finally{
        setLoading(false)
    }
}
fetchComments()
}, [id])
const elements = coments.map(({id,cast,crew}) => <li key={id}><h4>{cast}</h4><p>{crew}</p></li>)

  return (
    <>
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {isComments &&<ol>{elements}</ol>}
    </>
  );
};

export default SinglePostComentsPage;
