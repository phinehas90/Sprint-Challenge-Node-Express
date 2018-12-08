const express = require('express');

const router = express.Router();

const projects = require('../data/helpers/projectModel');

//---------Create------------------



//---------Read------------------

router.get('/', (req, res) => {
    projects.get()
    .then(proj => {
        res.json(proj)
    })
    .catch(err => {
        res.status(500)
        res.json({message: "The projects information could not be retrieved."})
    })
})

//---------Update------------------

//---------Destroy------------------



module.exports = router;