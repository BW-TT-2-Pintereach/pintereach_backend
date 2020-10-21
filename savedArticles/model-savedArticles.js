module.exports = {
    find,
    findById,
    findByUserId,
    add, 
    remove
}

const db = require("../database/config");

function find() {
    return db("savedArticles")
}

function findById(id) {
    return db("savedArticles").where({ id }).first();
}

function findByUserId(user_id) {
    return db("savedArticles").where({ user_id }).join("articles", "articles.id", "=", "article_id")
}

function add(userId, articleId) {
    return db("savedArticles")
            .insert({user_id: userId, article_id: articleId})
            .then(ids => {
                const id = ids[0];
                return findById(id)
            })
}

function remove(user_id, article_id) {
    return db("savedArticles").where({ user_id, article_id }).del();
}