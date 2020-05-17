const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const winston = require('winston');

const routes = require('./routes');

const port = 3003;
const app = express();

// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

routes(app)

app.get('*', (req, res) => {
  res.sendStatus('404')
})

app.listen(port, () => console.log(`Server is running at ${port}`))