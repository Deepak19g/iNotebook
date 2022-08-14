const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    obj = {
        a: 'hi all',
        numbers: 11
    }
    res.json(obj)
})

module.exports = router