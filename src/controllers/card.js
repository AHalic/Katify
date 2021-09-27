const Card = require('../models/card')

module.exports = app => {
    app.post('/', (req, res) => {
        const card = req.body;

        Card.adiciona(card, res)
    })
    
    app.get('/', (req, res) => {
        Card.lista(res)
    })

    app.get('/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Card.buscaPorId(id, res)
    })

    app.post('/', (req, res) => {
       const Card = req.body

        Card.adiciona(Card, res)
    }) 

    app.patch('/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Card.altera(id, valores, res)
    })

    app.delete('/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Card.deleta(id, res)
    })
}