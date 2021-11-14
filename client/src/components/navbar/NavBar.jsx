import { Link } from "react-router-dom";
import "./navbar.css"

export default function NavBar() {
    const user = true;
    return (
        <div className="navbar">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="navList">
                    <li className="navListItem">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li> 
                    {user && <li className="navListItem">
                    <Link className="link" to="/write">
                            WRITE
                    </Link>
                    </li>}
                    {user && <li className="navListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
            {user ? (
          <Link className="link" to="/write">
            <img
              className="profilePic"
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=47&w=79"
              alt="profile pic"
            />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topIconSearch fas fa-search"></i>

         </div>
            
        </div>
    )
}
