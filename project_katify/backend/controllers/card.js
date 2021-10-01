const Card = require('../models/card')

module.exports = app => {
    app.post('/:uuid', (req, res) => {
        const card = req.body;
        Card.add(card, res)
    })
    
    app.get('/:uuid', (req, res) => {  
        const uuid = req.params.uuid

        Card.get(uuid, res)
    })

    app.get('/:uuid/:id', (req, res) => {
        const uuid = req.params.uuid
        const id = parseInt(req.params.id)

        // TO DO
        Card.searchID(uuid, id, res)
    })

    app.patch('/:uuid/:id', (req, res) => {
        const uuid = req.params.uuid
        const id = parseInt(req.params.id)
        const valores = req.body

        Card.change(uuid, id, valores, res)
    })

    app.delete('/:uuid/:id', (req, res) => {
        const uuid = req.params.uuid
        const id = parseInt(req.params.id)

        Card.deleteID(uuid, id, res)
    })
}