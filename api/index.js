const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const categoryRoute = require('./routes/categories');
const postRoute = require('./routes/posts')
const multer = require("multer")
const path = require("path")

dotenv.config()
app.use(express.json());
const PORT = process.env.PORT || 5000
mongoose.
    connect(process.env.MONGO_URL).then(() => console.log("connect to mongoDB"))
    .catch((err) => console.log(err.message))

app.use("/api/auth", authRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/posts', postRoute)
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
