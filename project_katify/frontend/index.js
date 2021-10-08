/*
 * Descricao: Configuracao do servidor do frontend
 * Data: Outubro 2021
 * @version 1.0
 * @author Beatriz Maia & Sophie Dilhon
*/

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(__dirname))


// Pega todos os boards da tabela e direciona para a página home
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/homePage.html'))
})

// Pega todos os cards do board e direciona para a página do board
app.get('/:uuid', function(req, res) {
    res.sendFile(path.join(__dirname, '/boardPage.html'))
})

app.listen(8000, () => console.log('Servidor Frontend, rodando na porta 8000'))
