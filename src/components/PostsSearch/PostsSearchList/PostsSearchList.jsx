import styles from "./posts-search-list.module.css";
import { Link, useLocation } from "react-router-dom";

const PostsSearchList = ({ items}) => {
    const location = useLocation();

    const elements = items.map(({id, title}) => (<li key={id} className={styles.item}>
        <Link to={`/posts/${id}`} state={{from: location}}>{title}</Link>
        {/* <p>{body}</p> */}
    </li>));
console.log(elements);
    return (
        (<ul className={styles.list}>
            {elements}
        </ul>)
    )
    
}

export default PostsSearchList;