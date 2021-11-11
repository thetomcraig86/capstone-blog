import postimg  from "../../media/bwcomputerdesk.jpg"
import './singlePost.css'

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="sPWrapper">
            <img className="sPImg"
            src={postimg}
            alt="black and white computer" />
           <h1 className="sPTitle">Insert Title
           <div className="sPEdit">
               <i className="sPIcon far fa-edit"></i>
               <i className="sPIcon far fa-trash-alt"></i>
           </div>
           </h1>
           <div className="sPInfo">
               <span className="sPAuthor">Author: Tom </span>
               <span className="sPDate">Some time ago</span>
           </div>
            <p className="sPDesc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fuga, a natus eos nisi facilis autem molestias amet optio aliquid mollitia consequuntur culpa maxime quo repudiandae delectus quaerat consequatur tenetur.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fuga, a natus eos nisi facilis autem molestias amet optio aliquid mollitia consequuntur culpa maxime quo repudiandae delectus quaerat consequatur tenetur.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fuga, a natus eos nisi facilis autem molestias amet optio aliquid mollitia consequuntur culpa maxime quo repudiandae delectus quaerat consequatur tenetur.
            </p>
            </div>
        </div>
    )
}
