import { useContext, useEffect, useState } from 'react';
import './update.css';
import axios from "axios";
import { Context } from "../../context/Context";
import { useLocation } from 'react-router';


export default function Update() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const PF = 'http://localhost:5000/images/';

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data);
      setTitle(res.data.title);
      setContent(res.data.content);
    };
    getPost();
  }, [path]);

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        content,
      });
      window.location.assign('/post/' + path);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='update'>
      {post.photo && (
          <img src={PF + post.photo} alt='' className='updateImg' />
        )}
      <form className='updateForm' onSubmit={handleUpdate}>
        <div className='updateFormGroup'>
          <label htmlFor='fileInput'>
            <i className='updateIcon fas fa-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type='text'
            value = {title}
            className='updateInput'
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className='updateFormGroup'>
          <textarea
            value={content}
            type='text'
            className='updateInput updateText'
            onChange={e=>setContent(e.target.value)}
          ></textarea>
        </div>
        <button className='updateSubmit' type='submit'>
          Update
        </button>
      </form>
    </div>
  );
}
