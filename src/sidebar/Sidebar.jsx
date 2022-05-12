import { Link } from "react-router-dom";
import './sidebar.css'

export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                >
                </img>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo et quia sequi totam facilis pariatur exercitationem 
                    culpa, facere accusamus delectus, fugit commodi possimus aliquam est, rem provident quam velit?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Link className="link" to='/posts?cat=Life'>
                            Life
                        </Link>
                        <Link className="link" to='/posts?cat=Music'>
                            Music
                        </Link>
                        <Link className="link" to='/posts?cat=Sport'>
                            Sport
                        </Link>
                        <Link className="link" to='/posts?cat=Style'>
                            Style 
                        </Link>
                        <Link className="link" to='/posts?cat=Tech'>
                            Tech
                        </Link>
                        <Link className="link" to='/posts?cat=Cinema'>
                            Cinema 
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}