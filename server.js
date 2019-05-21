'use strict'

let express = require('express');
let app = express();
var request = require('request');
var scraper = require('table-scraper');
/* DOL PSS
   EUR PSS */


let urlCotizacion = "http://www.bna.com.ar/Cotizador/HistoricoPrincipales"
let getParams = "?id=billetes&filtroEuro=1&filtroDolar=1&fecha=01/01/2019"

request(urlCotizacion + getParams, function (error, response, html) {
    if (!error && response.statusCode == 200) {
        scraper
            .get(urlCotizacion + getParams)
            .then(function (tableData) {
                console.log(tableData)
            });
    }
});