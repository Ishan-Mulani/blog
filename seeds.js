const mongoose = require("mongoose")
const Article = require("./models/schema")

mongoose.connect("mongodb://localhost:27017/blog",{useNewUrlParser: true})
    .then(p=>{
        console.log("MOngo connnection ready")
    })
    .catch(e=>{
        console.log("ops error")
        console.log(e)
    })


// const movieBlog = new Article({
//     title:"Movie blog",
//     description: "Best movies to watch in 2022",
//     markdown: "1)3 idiots 2)hera pheri 3)Don"
// })

// movieBlog.save()
//     .then(s=>{
//         console.log(s)
//     })
//     .catch(e=>{
//         console.log("error")
//         console.log(e)
//     })

const fakeData = [
    {
        title:"Beauty blog",
        description: "Best beauty products to use",
        markdown: "1)Turmeric 2)Aleo vera 3)Honey"
    },
    {
        title:"Health blog",
        description: "Best health tips",
        markdown: "1)Walking 2)Exerisce 3)Balanced diet"
    },
    {
        title:"Travel blog",
        description: "Best places to travel",
        markdown: "1)Europe 2)Asia 3)Home"
    }
]

Article.insertMany(fakeData)
    .then(s=>{
        console.log("it worked")
        console.log(s)
    })
    .catch(e=>{
        console.log("ops error in inserting")
        console.log(e)
    })