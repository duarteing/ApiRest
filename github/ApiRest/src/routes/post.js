const { Router } = require('express');
const router = Router();

const sample = require('../sample.json');

router.post('/', (req, res) => {
    const id = sample.length + 1;
    const { cedula, nombre, telefono, correo } = req.body;
    const newsample = { ...req.body, id };
    if (id && cedula && nombre && telefono && correo) {
        sample.push(newsample);
        res.json(sample);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

module.exports = router;