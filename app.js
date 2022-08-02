const express = require('express')
const app = express()
const path = require("path")
const methodOverride = require("method-override")
const articleRouter =  require("./routes/articles")
const mongoose = require("mongoose")
const Article = require("./models/schema")


mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser: true})

app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,"/static")))


app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")


app.get("/", async (req, res)=>{
   const allArticles = await Article.find().sort({createdAt: 'desc'})
   res.render("home", {allArticles})
})

app.use("/articles", articleRouter)

app.get("*", (req, res)=>{
   res.send("Error 404 Not Found")
})
app.listen(3000)    