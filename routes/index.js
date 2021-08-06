const { Router } = require('express');
const router = Router();

const distributors = require('../sample.json');

//Route GET
router.get('/test', function(req, res)  {
          res.json(distributors);
});


//Route GET
router.get('/test2', function(req, res)  {
     const hola = 'hola como va todo ?';
     res.send(hola);
});

//Route POST

router.post('/post', function(req, res) {
     console.log(req.body);
     console.log(req.params)
     res.send('Enviando...')
});

//Route DELETE
router.delete('/test/:id', function(req, res){ 
     res.send('has ${req.params.id}');
});

//Router PUT
router.put('/contact/:id', function(req, res) {
     console.log(req.body);
     res.send('la base de datos ha sido actualizada ${req.params.id}');
});

//Metodo ALL de Express
router.all('/test', function(req, res, next)
{
     console.log('por aqui paso');
     next();
});

module.exports = router;