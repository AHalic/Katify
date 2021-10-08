/*
 * Descricao: Controllers relacionados aos boards
 * Data: Outubro 2021
 * @version 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */

const Board = require('../models/board')


/**
 * Define http requests relacionadas ao board (post, patch, get e delete)
 * @param {*} app localhost a partir de onde será feito o request
 */
module.exports = app => {
    /*
     * Request para criar board
     */
    app.post('/', (req, res) => {
        const boardName = req.body.name
        Board.create(boardName, res)
    })
    
    /*
     * Request para pegar informacoes de todos boards
     */
    app.get('/', (req, res) => {  
       Board.getAll(res)
    })

    /*
     * Request para alterar informacoes de um board em especifico
     */
    app.patch('/:uuid', (req, res) => {
        const name = req.body
        const uuid = req.params.uuid
        
        Board.change(uuid, name, res)
    })

    /*
     * Request para deletar um board (e todos os cards deste)
     */
    app.delete('/:uuid', (req, res) => {
        const uuid = req.params.uuid
        
        Board.delete(uuid, res)
    })
}