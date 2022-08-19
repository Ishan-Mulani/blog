const express = require('express')
const app = express()
const router = express.Router()
const Article = require("./../models/schema")


// Get request for creating blog
router.get("/new", (req, res)=>{
    res.render('new', {article: new Article() })
})
 
// Get request for edit
router.get("/:slug/edit", async(req, res)=>{
    const {slug} = req.params
    const article = await Article.findOne({slug: slug})
    res.render("edit", {article})
})

// Get request for detailed blog / showing
router.get("/:slug", async(req, res)=>{
    const {slug} = req.params
    const article = await Article.findOne({slug: slug})  
    res.render("show", {article})
})

// Post request for creating blog
router.post("/", async(req, res)=>{
    console.log(req.body)
    const newArticle = new Article(req.body)
    await newArticle.save()
    res.redirect(`/articles/${newArticle.slug}`)
 })

//  Put request for editing blog    
router.put("/:id", async(req, res)=>{
    const {id} = req.params
    const article = await Article.findByIdAndUpdate(id, req.body, {runValidators:true, new:true}) 
    await article.save()
    res.redirect(`/articles/${article.slug}`)
})

// Delete blogs
router.delete("/:id", async(req, res)=>{
    const {id} = req.params
    const deletedArticle = await Article.findByIdAndDelete(id)
    res.redirect("/")
})

module.exports = router 