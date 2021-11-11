import './post.css'
import postimg  from "../../media/bwcomputerdesk.jpg"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg"
            src={postimg}
            alt="black and white computer" />
            <div className="postInfo">
            <span className="postTitle"> Insert Title</span>
            <span className="postDate">Insert Date/Time</span>
            </div>
            <p className="postDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fuga, a natus eos nisi facilis autem molestias amet optio aliquid mollitia consequuntur culpa maxime quo repudiandae delectus quaerat consequatur tenetur.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fuga, a natus eos nisi facilis autem molestias amet optio aliquid mollitia consequuntur culpa maxime quo repudiandae delectus quaerat consequatur tenetur.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fuga, a natus eos nisi facilis autem molestias amet optio aliquid mollitia consequuntur culpa maxime quo repudiandae delectus quaerat consequatur tenetur.
            </p>
        </div>
    )
}
