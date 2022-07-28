const database = require('../infra/database');

exports.getPosts = function (){
    return database.query('select * from post')
}

exports.getPosts = function (id){
    return database.oneOrNone('select * from post where id = $1', [id]) //one or none, caso não tenha não lança uma excessão, não faz nada
}

exports.savePost = function (post){
    return database.one('insert into post (title, content) values ($1, $2) returning *', [post.title, post.content])
}

exports.updatePost = function (id, post){
    return database.none('update post set title = $1, content = $2 where id = $3', [post.title, post.content, id]) //prepared statement $1 [id]
}


exports.deletePost = function (id){
    return database.none('delete from post where id = $1', [id]) //prepared statement $1 [id]
}

