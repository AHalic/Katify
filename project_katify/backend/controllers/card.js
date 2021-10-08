/**
  Descricao: Controllers relacionados aos card
  Versao: 1.0
  Data: Outubro 2021
 */

// Importa modulos
const Card = require('../models/card')

/**
 * 
 * @param {*} app 
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