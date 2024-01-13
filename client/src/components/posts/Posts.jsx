import Post from "../post/Post";
import "./posts.css";

export default function Posts({ post }) {
  return (
    <div className="posts">
      {Posts.map((p) => {
        <Post post={p} />
      })}
    </div>
  )
}