const express = require('express');
const router = express.Router();
const toDo = require('../models/todo');

router.get('/todos', (req, res, next) => {
    toDo.find({}, 'action')
        .then(data => res.join(data))
        .catch(next)
});

router.post('/todos', (req, res, next) => {
    if(req.body.action){
        toDo.create(req.body)
            .then(data => res.json(data))
            .catch(next)
    } else {
        res.json({
            error: 'The input field is empty'
        })
    }
});

router.delete('/todos/:id', (req, res, next) => {
    toDo.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
});

module.exports = router;
