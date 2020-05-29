const express = require('express')

const router = express()
const POST = require('../model/post')



//get all posts
router.get('/', async (req,res) => {
    try {
        const posts =await POST.find()
        res.json(posts)
    } catch (err) {
        res.json(err)
    }
})

//get single post
router.get('/:id', async (req,res) => {
    try {
        const post = await POST.findById(req.params.id)
        res.json(post)
    } catch (err) {
        res.json(err)
    }
})

//send post and save to DB
router.post('/save', async(req,res) => {
    const post = new POST({
        name:req.body.name,
        title:req.body.title,
        body:req.body.body
    })
        try {
           const savedPost = await post.save() 
           res.json(savedPost)
        } catch (err) {
            res.json({message:err})
        }

})

router.delete('/:id', async (req,res) => {
    try {
        const post = await POST.findOneAndDelete(req.params.id)
        res.json(post)
    } catch (err) {
        res.json(err)
    }
})

router.put('/:id', async (req,res) => {
    const postInfo = {
        name:req.body.name,
        title:req.body.title,
        body:req.body.body
    }
    try {
        const updatedPost = await POST.findByIdAndUpdate( req.params.id, {$set: postInfo}, {new: true})
        res.json(updatedPost)
    } catch (err) {
        res.json(err)
    }
})


module.exports = router