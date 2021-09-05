// document.body.style.background = "#2D3035";
// document.body.getElementsByClassName("card")


const express = require('express')

const app = express()

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

app.get('/', (req, res) => (res.send("Servidor rodando, test 123")))