const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//routers
app.use(require('./routes/index'))
app.use(require('./routes/inicio'))

//starting the server
app.listen(app.get('port'), () => {
    console.log(`The server is On-Line ${app.get('port')}`);
});