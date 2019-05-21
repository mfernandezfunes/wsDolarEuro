'use strict'
let Cotizacion = require('../models/cotizacion')
let scraper = require('table-scraper');
let urlCotizacion = "http://www.bna.com.ar/Cotizador/HistoricoPrincipales"
let getParams = "?id=billetes&filtroEuro=1&filtroDolar=1&fecha=01/01/2019"
/* DOL PSS
   EUR PSS */

let controller = {
    home: function (req, res) {
        scraper.get(urlCotizacion + getParams)
            .then((tableData) => {
                return res.status(200).send({
                    tableData
                })
            });
    },
    test: function (req, res) {
        return res.status(200).send({
            message: "Aca el test"
        })
    },
    getCotizacionDolar: function (req, res) {
        let cotizacionFecha = req.params.fecha
        let cotizacionMoneda = req.params.moneda

        if (cotizacionFecha == null) return res.status(404).send({
            message: 'Debe ingresar la fecha a buscar'
        })
        if (cotizacionMoneda == null) return res.status(404).send({
            message: 'Debe ingresar la moneda a buscar'
        })
        return res.status(200).send({
            message: "Aca tenes el valor del DOL en JSON"
        })
    },
    getCotizacionEuro: function (req, res) {
        let cotizacionFecha = req.params.fecha
        let cotizacionMoneda = req.params.moneda

        if (cotizacionFecha == null) return res.status(404).send({
            message: 'Debe ingresar la fecha a buscar'
        })
        if (cotizacionMoneda == null) return res.status(404).send({
            message: 'Debe ingresar la moneda a buscar'
        })
        return res.status(200).send({
            message: "Aca tenes el valor del EUR en JSON"
        })
    }
}

module.exports = controller