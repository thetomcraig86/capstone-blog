import { useContext, useState } from 'react';
import './write.css';
import axios from "axios";
import { Context } from "../../context/Context";


export default function Write() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      content,
    };

    try {
      const res = await axios.post('/posts', newPost);
      
    window.location.assign('/post/' + res.data._id);
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <div className='write'>
      
        <img className='writeImg' src={process.env.PUBLIC_URL + 'blogimg.png'} alt='blog' />
      
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Write Blog Here'
            type='text'
            className='writeInput writeText'
            onChange={e=>setContent(e.target.value)}
          ></textarea>
        </div>
        <button className='writeSubmit' type='submit'>
          Post
        </button>
      </form>
    </div>
  );
}
