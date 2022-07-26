const crypto = require('crypto')
const axios = require('axios')
const postsService = require ('../service/postsService')

const generate = function(){
    return crypto.randomBytes(10).toString('hex')
}

const request = function (url, method, data){
    return axios({url, method, data})
}

//.only testa somente esse
test('Should get posts', async function (){
    // given - dado que
    const post1 = await postsService.savePost({title: generate(), content: generate()})
    const post2 = await postsService.savePost({title: generate(), content: generate()})
    const post3 = await postsService.savePost({title: generate(), content: generate()})
    console.log('posts teste criados')
    
    // when - quando acontecer
    // const response = await axios({
    //     url: 'http://localhost:3000/posts',
    //     method: 'get'
    // })

    const response = await request ('http://localhost:3000/posts', 'get')

     //console.log(response)
     const posts = response.data
     //then  -então

    //expect (posts).toHaveLength(3)
    // const [firstPost] = posts
    // expect (firstPost.id).toBe(1)
    // expect (firstPost.title).toBe("REST API: Métodos")

    // apagar registro do teste
    await postsService.deletePost(post1.id)
    await postsService.deletePost(post2.id)
    await postsService.deletePost(post3.id)
    console.log('posts teste deletados')

});

test('Should post posts', async function (){
    const data = {title: generate(), content: generate()}

    const response = await request ('http://localhost:3000/posts', 'post', data)
    
    const post = response.data

    expect(post.title).toBe(data.title)
    expect(post.content).toBe(data.content)


    await postsService.deletePost(post.id)

});

test('Should update post', async function (){
    const post = await postsService.savePost({title: generate(), content: generate() })
    post.title = generate()
    post.content = generate()
    await request (`http://localhost:3000/posts/${post.id}`, 'put', post)
    const updatedPost = await postsService.getPost(post.id)
    expect(updatedPost.title).toBe(post.title)
    expect(updatedPost.content).toBe(post.content)


    await postsService.deletePost(post.id)

});

test('Should delete a post', async function (){
    console.log('posts teste deletados')
    const post = await postsService.savePost({title: generate(), content: generate() })
    await request (`http://localhost:3000/posts/${post.id}`, 'delete')
    const posts = await postsService.getPost()
    console.log('deletados', posts)
    expect(posts).toBe(null)

});