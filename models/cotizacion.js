'use strict'
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let CotizacionSchema = Schema({
    currency: String,
    compra: String,
    venta: String,
    date: Date
})

module.exports = mongoose.model('Cotizacion', CotizacionSchema)