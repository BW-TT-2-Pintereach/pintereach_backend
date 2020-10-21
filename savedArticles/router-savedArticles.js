const router = require("express").Router();
const SavedArticles = require("./model-savedArticles")

router.get("/", (request, response) => {
    const userId = request.jwt.userId;
    SavedArticles.findByUserId(userId)
        .then(savedArticles => {
            response.status(200).json({ data: savedArticles })
        })
        .catch(error => {
            response.status(400).json({ message: error.message })
        })
})

router.post("/:articleId", (request, response) => {
    const userId = request.jwt.userId;
    const articleId = request.params.articleId;
    SavedArticles.add(userId, articleId)
        .then(article => {
            SavedArticles.find()
                .then(updatedArticles => {
                    response.status(201).json({ user_id: userId, article_id: articleId, updatedList: updatedArticles })
                })
                .catch(error => {
                    response.get(500).json({ error: error.message })
                })
        })
        .catch(error => {
            response.status(500).json({ message: error.message })
        })
})

router.delete("/:articleId", (request, response) => {
    const userId = request.jwt.userId;
    const articleId = request.params.articleId;
    SavedArticles.remove(userId, articleId)
        .then(savedArticleToBeDel => {
            if (savedArticleToBeDel) {
                SavedArticles.findByUserId(userId)
                    .then(updatedArticles => {
                        response.status(200).json({ updatedList: updatedArticles })
                    })
                    .catch(error => {
                        response.status(500).json({ error: error.message })
                    })
            } else {
                response.status(404).json({ message: 'Could not find article' });
            }
        })
        .catch(error => {
            console.log(error)
            response.status(500).json({ message: 'Failed to delete' });
        });
})



module.exports = router;