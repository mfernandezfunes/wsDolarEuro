let scraper = require('table-scraper');
/* DOL PSS
   EUR PSS */

let urlCotizacion = "http://www.bna.com.ar/Cotizador/HistoricoPrincipales"
let getParams = "?id=billetes&filtroEuro=1&filtroDolar=1&fecha=17/08/2022"

scraper
    .get(urlCotizacion + getParams)
    .then(function (tableData) {
        console.log(tableData)
    });


//new Date(2005,3,14)