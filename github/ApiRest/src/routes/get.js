const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
     const texto = "estoy  obteniendo datos por peticion GET";

     res.json(texto);
});

module.exports = router;