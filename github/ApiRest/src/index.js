const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', 4000);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//routers
app.get('/', (req, res) => {
    res.send('este es el servidor hablando')
});

//starting the server
app.listen(4000, () => {
    console.log('el servidor solo para pros esta disponible por el pueto 4000 estoy mejorando');
});
