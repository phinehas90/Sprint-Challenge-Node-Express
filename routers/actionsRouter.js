const express = require('express');

const router = express.Router();

const actions = require('../data/helpers/actionModel');
const projects = require('../data/helpers/projectModel');

//---------Create------------------

router.post('/', (req, res) => {
    actions.insert()
})

//---------Read------------------

router.get('/', (req, res) => {
    actions.get()
        .then(actions => {
            res.json(actions)
        })
        .catch(err => {
            res.status(500)
                .json({message: "Actions could not be retrieved."})
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    actions.get(id)
        .then(action => {
            res.json(action)
        })
        .catch(err => {
            res.status(500)
                .json({message: "The action associated with the requested ID couldn't be retrieved"})
        })
})

//---------Update------------------

//---------Destroy------------------



module.exports = router;