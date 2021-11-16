import Post from "../post/Post"
import './posts.css'

export default function Posts({posts}) {
    return (
        <div className="row row-cols-1 row-cols-md-2 posts">
          {posts.map((p) => (
        <Post post={p} />
      ))}
        </div>
    )
}
