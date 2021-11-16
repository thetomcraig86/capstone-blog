import './post.css';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  const PF = 'http://localhost:5000/images/';
  return (
    <div className="col mt-1 mb-1 card-group">
    <div className='card post'>
      {post.photo && <img className='card-img-top postImg' src={PF + post.photo} alt='' />}
      <div className='postInfo'>
        <Link to={`/post/${post._id}`} className='link'>
          <span className='card-title postTitle'>{post.title}</span>
        </Link>
        <span className="card-subtitle">Author: {post.username}</span>
        <span className='card-subtitle postDate'>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className='card-text postContent'>{post.content}</p>
    </div>
    </div>
  );
}
