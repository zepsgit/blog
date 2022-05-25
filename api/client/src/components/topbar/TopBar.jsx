import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import { ReactComponent as Leetcode } from '../../img/leetcode.svg';
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
//const PF="https://zepengblog.herokuapp.com/images"
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
          <div className="topLeft">
                <a
                    href="https://leetcode.com/Anti-XooX/"
                    target='_blank'
                    rel="noopener"
                >
                    <Leetcode/>
                 </a>
        
                <a
                    href="https://medium.com/me/stories/public"
                    target='_blank'
                    rel="noopener"
                >
                    <i class="fa-brands fa-medium"></i>
                 </a>
                <a
                    href="https://github.com/zepsgit"
                    target='_blank'
                    rel="noopener"
                >
                    <i className="topIcon fa-brands fa-github"></i>
                 </a>
          </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink className="NavLink" to="/">
              HOME
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="NavLink" to="/portfolios">
              PORTFOLIOS
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink className="NavLink" to="/write">
              WRITE
            </NavLink>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <NavLink to="/settings">
            <i class="fa-solid fa-gear"></i>
          </NavLink>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <NavLink className="NavLink" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="topListItem">
              <NavLink className="NavLink" to="/register">
                REGISTER
              </NavLink>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
