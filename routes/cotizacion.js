'use strict'

let express = require('express')
let CotizacionController = require('../controllers/cotizacion')

let router = express.Router()

router.get('/home', CotizacionController.home)
router.get('/test', CotizacionController.test)

router.get('/cotizacion/dolar', CotizacionController.getCotizacionDolar)
router.get('/cotizacion/euro', CotizacionController.getCotizacionEuro)

module.exports = router