import { useContext, useState } from "react";
import "./write.css";
//import { axios } from "../../config";
import { Context } from "../../context/Context";
import axios from "axios";
export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCat]=useState([])
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      categories
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    try{
        // categories.map(async singleCat=>{
        //   const allCategories=await axios.get("/categories")
        //   let catArray=[]
        //   allCategories.map(c=>{
        //       catArray.push(c.name)
        //   })
        //   if (!catArray.includes(singleCat)){
        //     await axios.post("/categories", {name:singleCat})
        //   }
        // })
        
        //use put to avoid duplicate
        //in route folder, put method should be added to categories
      }catch(err){}

    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
              type="text"
              placeholder="Add tags seperated by comma"
              className="writeInput"
              autoFocus={true}
              onChange={e=>setCat(e.target.value.replace(/\s/g, '').split(","))}
            />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
