/**
 * Descricao: Controllers relacionados aos card
 * Data: Outubro 2021
 * @version 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */


const Card = require('../models/card')

/**
 * Define http requests relacionadas aos cards (post, patch, get e delete)
 * @param {*} app localhost a partir de onde será feito o request
 */
module.exports = app => {
    /**
     * Request para adicionar um card ao board
     */
    app.post('/:uuid', (req, res) => {
        const card = req.body;
        Card.add(card, res)
    })
    
    /**
     * Request para pegar cards de um board
     */
    app.get('/:uuid', (req, res) => {  
        const uuid = req.params.uuid

        Card.get(uuid, res)
    })

    /**
     * Request para pegar um card em especifico
     */
    app.get('/:uuid/:id', (req, res) => {
        const uuid = req.params.uuid
        const id = parseInt(req.params.id)

        Card.searchID(uuid, id, res)
    })

    /**
     * Request para alterar um card em especifico
     */
    app.patch('/:uuid/:id', (req, res) => {
        const uuid = req.params.uuid
        const id = parseInt(req.params.id)
        const valores = req.body

        Card.change(uuid, id, valores, res)
    })

    /**
     * Request para adicionar um card em especifico
     */
    app.delete('/:uuid/:id', (req, res) => {
        const uuid = req.params.uuid
        const id = parseInt(req.params.id)

        Card.deleteID(uuid, id, res)
    })
}