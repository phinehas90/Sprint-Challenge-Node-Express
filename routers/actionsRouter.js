const express = require('express');

const router = express.Router();

const actions = require('../data/helpers/actionModel');

//---------Create------------------


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

//---------Update------------------

//---------Destroy------------------



module.exports = router;