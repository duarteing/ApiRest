const { Router } = require('express');
const router = Router()

const data = require('../sample.json');

router.get('/distributor', (req, res) => {
    res.json(data);
});

module.exports = router;



