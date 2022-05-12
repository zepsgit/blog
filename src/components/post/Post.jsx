import { Link } from "react-router-dom";
import './post.css'

export default function Post({img}){
    return (
        <div className="post">
            <img
                className="postImg"
                src={img}
                alt=''
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to='/posts?cat=Music'>
                            Music
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to='/posts?cat=Music'>
                            Life
                        </Link>
                    </span>
                    </div>
                    <span className="postTitle">
                        <Link to='/post/abc' className="link">
                            placeholder
                        </Link>
                    </span>
                    <hr/>
                    <span className="postDate">1 hour ago</span>
                </div>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam rerum officia quaerat quasi quod nostrum veritatis 
                    voluptatum sunt unde quisquam, ad ullam non dolor impedit maiores. Accusantium, nemo. Eius?
                </p>
        </div>
    );
}