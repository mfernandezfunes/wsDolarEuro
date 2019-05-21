'use strict'

let express = require('express');
let bodyParser = require('body-parser')

let app = express();

let cotizacion_routes = require('./routes/cotizacion')

// Middleware

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use('/api', cotizacion_routes)

module.exports = app