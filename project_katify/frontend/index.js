const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/homePage.html'))
})

app.get('/:uuid', function(req, res) {
    res.sendFile(path.join(__dirname, '/boardPage.html'))
})

app.listen(8000, () => console.log('Servidor Frontend, rodando na porta 8000'))
