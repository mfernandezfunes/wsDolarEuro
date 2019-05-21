'use strict'

let app = require('./app')
let port = 3100

app.listen(port, () => {
    console.log(`Servicio escuchando en localhost:${port}`)
})