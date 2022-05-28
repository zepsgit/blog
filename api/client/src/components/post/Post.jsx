import "./post.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  const debug=false;
  const PF = debug? "http://localhost:5000/images/" : "https://zepengblog.herokuapp.com/images/"
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="post img" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}> 
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
