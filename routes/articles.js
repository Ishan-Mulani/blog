const { application } = require("express")
const express = require("express")
const router = express.Router()
const Article = require("./../models/schema")

router.get("/new", (req, res)=>{
    res.render('new')
})



router.post("/", async (req, res)=>{
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
        await article.save()
        res.redirect(`articles /${article.id}`)
    } catch (error) {

        
    }
    
})

router.get("/:id", (req, res)=>{

})

module.exports = router