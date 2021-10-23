import "./navbar.css"

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="navList">
                    <li className="navListItem">HOME</li>
                    <li className="navListItem">WRITE</li>
                    <li className="navListItem">CONTACT</li>
                    <li className="navListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                    className="profilePic"
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=47&w=79" 
                    alt="profile pic" />
                <i className="topIconSearch fas fa-search"></i>

            </div>
            
        </div>
    )
}
