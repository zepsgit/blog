const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const categoryRoute = require('./routes/categories');
const postRoute = require('./routes/posts')
const userRoute=require('./routes/users')
const multer = require("multer")
const path = require("path")
const exp = require("constants")

dotenv.config()
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))
const PORT = process.env.PORT || 5000
mongoose.
    connect(process.env.MONGO_URL).then(() => console.log("connect to mongoDB"))
    .catch((err) => console.log(err.message))

const storage=multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, "images")
    },
    filename:(req, file, callback)=>{
        callback(null, req.body.name);
    }
})
const upload=multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("file has been uploaded")
})
app.use("/api/auth", authRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/posts', postRoute)
app.use('/api/users',userRoute)
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
