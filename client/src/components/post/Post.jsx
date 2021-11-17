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
          <div className='card-title postTitle'>{post.title}</div>
        </Link>
        <div className="card-subtitle postUsername">Author: {post.username}</div>
        <div className='card-subtitle postDate'>
          {new Date(post.createdAt).toDateString()}
        </div>
      </div>
      <p className='card-text postContent'>{post.content}</p>
    </div>
    </div>
  );
}
