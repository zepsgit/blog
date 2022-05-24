import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Posts from "./components/posts/Posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useContext} from 'react'
import {Context} from "./context/Context"
function App() {
  const {currentUser}=useContext(Context);
  return (
   <Router>
     <TopBar/>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/posts" element={<Posts/>}/>
       <Route path="/register" element={currentUser?<Home/>:<Register/>}/>
       <Route path="/login" element={currentUser?<Home/>:<Login/>}/>
       <Route path="/post/:id" element={<Single/>}/>
       <Route path="/write" element={currentUser?<Write/>:<Login/>}/>
       <Route path="/settings" element={currentUser?<Settings/>:<Login/>}/>
     </Routes> 
   </Router>
  );
}

export default App;
