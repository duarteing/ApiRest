const { Router } = require('express');
const router = Router();

router.post('/post', (res, req) => {
 const { nombre, telefono, correo } = req.body;
 res.send('you have send the info to become in one of our colaborator')
});

module.exports = router;