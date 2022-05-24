const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const categoryRoute = require('./routes/categories');
const postRoute = require('./routes/posts')
const userRoute = require('./routes/users')
const multer = require("multer")
const path = require("path")
const exp = require("constants")
const bodyParser = require('body-parser')
const cors = require('cors')
dotenv.config()
// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
// app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")))
const PORT = process.env.PORT || 5000
mongoose.
    connect(process.env.MONGO_URL).then(() => console.log("connect to mongoDB"))
    .catch((err) => console.log(err.message))

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images")
    },
    filename: (req, file, callback) => {
        callback(null, req.body.name);
    }
})
const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file has been uploaded")
})
app.use("/auth", authRoute);
app.use('/categories', categoryRoute);
app.use('/posts', postRoute)
app.use('/users', userRoute)

app.use(express.static(path.join(__dirname, "/client/build")));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
