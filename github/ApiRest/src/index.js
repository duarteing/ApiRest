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
    res.json({"title" : "Servicios de maching learning"})
});

//starting the server
app.listen(4000, () => {
    console.log('el xxx servidor solo para pros esta disponible por el pueto 4000 estoy mejorando');
});
