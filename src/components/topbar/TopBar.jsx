import React from "react";
import {Link} from "react-router-dom"
import './topbar.css'
export default function TopBar() {
    const user=true;
    return (
        <div className="top">
            <div className="topLeft">
                <a
                    href="https://www.linkedin.com/in/zepeng-chen-483b90218/"
                    target='_blank'
                    rel="noopener"
                >
                    <i className="topIcon fa-brands fa-linkedin"></i>
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
                        <Link className="link" to='/'>
                            HOME
                        </Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">
                        <Link className="link" to='/write'>
                            WRITE
                        </Link>
                    </li>
                    {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
    
            <div className="topRight">
                {
                    user?(
                        <Link className="link" to='/settings'>
                            {/* <img 
                                className="topImg"
                                src={require('../../img/church.webp')}
                                alt='aa'
                            /> */}
                            <i class="fa-solid fa-gear"></i>
                        </Link>
                    ):
                    (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to='/login'>LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to='/register'>REGISTER</Link>
                            </li>
                        </ul>
                    )
                    
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
            
        </div>
    );
}