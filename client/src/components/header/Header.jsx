import "./header.css"
import hero from "../../media/blue_hero.jpg"



export default function Header() {
    return (
        <div className="h-container">
           <img src={hero} alt="brand message" className="hero" />
        </div>
    )
}
