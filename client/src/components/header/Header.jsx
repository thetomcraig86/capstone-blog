import "./header.css"
import hero from "../../media/blue_hero.jpg"



export default function Header() {
    return (
        <div className="container">
           <img src={hero} alt="hero image of forest" className="hero" />
        </div>
    )
}
