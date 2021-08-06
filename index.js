const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require("body-parser");


// settings
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//routers
app.use(require('./routes/index'))

//starting the server
app.listen(app.get('port'), () => {
    console.log(`The server is On-Line ${app.get('port')}`);
});