const express = require('express')
const app = express()
const path = require("path")
const articleRouter =  require("./routes/articles")
const mongoose = require("mongoose")
const { urlencoded } = require('express')

mongoose.connect("mongodb://localhost/blog")
app.use("/articles", articleRouter)
app.use(urlencoded({extended: false}))

app.use(express.static(path.join(__dirname,"/static")))
app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")


app.get("/", (req, res)=>{

    const fakeData = [
        {
            title:"Test title",
            createdAt : new Date(),
            description: "Test Description"
        },
        {
            title:"Test title 2",
            createdAt : new Date(),
            description: "Test Description 2"
        },
        {
            title:"Test title 2",
            createdAt : new Date(),
            description: "Test Description 2"
        }
    ]
    res.render("home", {fakeData})
})

app.listen(3000)    