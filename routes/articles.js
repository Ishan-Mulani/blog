const express = require('express')
const app = express()
const router = express.Router()
const Article = require("./../models/schema")


// Get request for creating blog
router.get("/new", (req, res)=>{
    res.render('new', {article: new Article() })
})
 
router.get("/:id/edit", async(req, res)=>{
    const {id} = req.params
    const article = await Article.findById(id)
    res.render("edit", {article})
})

// Get request for detailed blog / showing
router.get("/:id", async(req, res)=>{
    const {id} = req.params
    const article = await Article.findById(id)
    res.render("show", {article})
})

// Post request for creating blog
router.post("/", async(req, res)=>{
    console.log(req.body)
    const newArticle = new Article(req.body)
    await newArticle.save()
    res.redirect(`/articles/${newArticle._id}`)
 })

//  Put request for editing blog
router.put("/:id", async(req, res)=>{
    const {id} = req.params
    const article = await Article.findByIdAndUpdate(id, req.body, {runValidators:true, new:true})
    res.redirect(`/articles/${article._id}`)
})

router.delete("/:id", async(req, res)=>{
    const {id} = req.params
    const deletedArticle = await Article.findByIdAndDelete(id)
    res.redirect("/")
})

module.exports = router 