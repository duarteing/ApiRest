const { Router } = require('express');
const router = Router()

const data = require('./sample.json')

router.get('/inicio', (req, res) => {
    res.json(data);
});

module.exports = router;


