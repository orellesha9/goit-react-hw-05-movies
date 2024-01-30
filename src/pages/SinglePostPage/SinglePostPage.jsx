// import styles from "./single-post-page.module.css"
import SinglePost from "components/SinglePost/SinglePost";
import { Link } from "react-router-dom";


const SinglePostPage =() => {
return (
    <div>
        <SinglePost/>
        <Link to="credits">Coments</Link>
    </div>
)
}


export default SinglePostPage;