const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
     const data = {
         "usuario": "Luis",
         "contraseña": "123"
     };

     res.json(data);
});

module.exports = router;