const express = require('express')
const router = express.Router()
const postsService = require('../service/postsService')

router.get  ('/posts', async function (req,res) {
    const posts = await postsService.getPosts();
    res.json(posts);
        
})
router.get  ('/posts/:id', async function (req,res) {

})
router.post ('/posts', async function (req,res) {
    console.log(req.body)
    const post = req.body //post entrando
    const newPost = await postsService.savePost(post) //postsendo criado
    res.json(newPost)
    //res.end()
})
router.put  ('/posts/:id', async function (req,res) {

})
router.delete('/posts/:id', async function (req,res) {

})

module.exports = router