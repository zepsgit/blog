import "./post.css";
import { NavLink } from "react-router-dom";
export default function Post({ post }) {
  //const PF = "http://localhost:5000/images/";
  const PF="https://zepengblog.herokuapp.com/images"
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="post img" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <NavLink to={`/post/${post._id}`} className="NavLink"> 
          <span className="postTitle">{post.title}</span>
        </NavLink>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
