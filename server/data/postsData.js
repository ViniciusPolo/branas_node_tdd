const database = require('../infra/database');

exports.getPosts = function (){
    return database.query('select * from post')
}

exports.savePost = function (post){
    return database.one('insert into post (title, content) values ($1, $2) returning *', [post.title, post.content])
}

exports.deletePost = function (id){
    return database.none('delete from post where id = $1', [id]) //prepared statement $1 [id]
}

