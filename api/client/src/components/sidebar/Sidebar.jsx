import { axiosInstance } from "../../config";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Selfie from '../../img/selfie.jpg'
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  // console.log(cats)
  // console.log("----")
  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get("/categories");
      const catSet=new Set()
      res.data.map(c=>{catSet.add(c.name)})
      //setCats(res.data)
      setCats(Array.from(catSet))
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={Selfie}
          alt=""
        />
        <p>
          <span className="sidebarTitle">Education</span> 
          <br/>
          <br/>
          Obtained bachelor degree of electronics engineering
          <hr/>
          Majored in Computer Engineering in Memorial University
          <hr/>
          <span className="sidebarTitle">Domain</span> 
          <br/>
          <ul>
            <li>Embedded hardware and software</li>
            <li>Web development</li>
            <li>Machine Learning</li>
          </ul>
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c=> {
            return (
            <Link to={`/?cat=${c}`}>
              <li  className="sidebarListItem">
                {c}
              </li>
            </Link> 
            )
          })}
        </ul>
      </div>
      
    </div>
  );
}
