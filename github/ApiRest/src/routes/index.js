const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.json({"title" : "Servicios de maching learning"})
});

module.exports = router;