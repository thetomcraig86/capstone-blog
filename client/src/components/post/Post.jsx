import './post.css';
import postimg  from "../../media/bwcomputerdesk.jpg";
import { Link } from "react-router-dom";

export default function Post({post}) {
    return (
        <div className="post">
            <img className="postImg"
            src={postimg}
            alt="black and white computer" />
            <div className="postInfo">
            <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">{post.title}</span>
            </Link>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.content}</p>
        </div>
    )
}
