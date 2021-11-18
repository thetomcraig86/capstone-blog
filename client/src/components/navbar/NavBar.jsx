import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './navbar.css';

export default function NavBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <nav className='navbar navbar-expand-md bg-dark navbar-dark fixed-top'>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarContent'
        aria-controls='navbarContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <i className='fas fa-bars hamburger'></i>
      </button>
      <div className='collapse navbar-collapse justify-content-between' id='navbarContent'>
      <div className="icons">
        <i className='topIcon fab fa-facebook-square nav-item nav-link'></i>
        <i className='topIcon fab fa-twitter-square nav-item nav-link'></i>
        <i className='topIcon fab fa-instagram-square nav-item nav-link'></i>
      </div>

        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>
              HOME
            </Link>
          </li>
          {user && (
            <li className='nav-item'>
              <Link className='nav-link' to='/write'>
                WRITE
              </Link>
            </li>
          )}
          <li className='nav-link' onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>

        {user ? (
          <Link className='nav-link' to='/write'>
            <img
              className='profilePic nav-item'
              src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=47&w=79'
              alt='profile pic'
            />
          </Link>
        ) : (
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className='topIconSearch fas fa-search nav-link'></i>
      </div>
    </nav>
  );
}
