const express = require('express');
const Articles = require("./model-articles");
const router = express.Router();

router.put("/:id", (request, response) => {
    const { id } = request.params;
    Articles.update(id, request.body)
        .then(changes => {
            console.log(changes)
            if(changes) {
                Articles.find()
                    .then(updatedArticles => {
                        response.status(200).json({ updatedList: updatedArticles })
                    })
            } else {
                response.status(400).json({ message: `User with id ${id} does not exist`});
            }
        })
        .catch(error => {
            response.status(500).json({message: error.message})
        })
})

module.exports = router;