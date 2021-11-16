import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Context } from '../../context/Context';
import { Link } from "react-router-dom";
import './singlePost.css';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {}
  };

  return (
    <div className='singlePost'>
      <div className='sPWrapper'>
        {post.photo && (
          <img src={PF + post.photo} alt='' className='singlePostImg' />
        )}
        <h1 className='sPTitle'>
          {post.title}
          {post.username === user?.username && (
            <div className='sPEdit'>
              <Link to={`/update/${post._id}`} className='link'>
                <i className='sPIcon far fa-edit'></i>
              </Link>

              <i className='sPIcon far fa-trash-alt' onClick={handleDelete}></i>
            </div>
          )}
        </h1>
        <div className='sPInfo'>
          <span className='sPAuthor'>{post.username}</span>
          <span className='sPDate'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className='sPContent'>{post.content}</p>
      </div>
    </div>
  );
}
