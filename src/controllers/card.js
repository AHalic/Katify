const Card = require('../models/card')

module.exports = app => {
    app.get('/', (req, res) => res.send('Você está na rota root e está realizando um GET'));


    app.post('/', (req, res) => {
       const card = req.body;

        Card.adiciona(card, res)
    })
    
}