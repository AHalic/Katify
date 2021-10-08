/*
  Descricao: Controllers relacionados aos boards
  Versao: 1.0
  Data: Outubro 2021
 */

// Importa modulos
const Board = require('../models/board')

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
     * Request para deletar um board
     */
    app.delete('/:uuid', (req, res) => {
        const uuid = req.params.uuid
        
        Board.delete(uuid, res)
    })
}