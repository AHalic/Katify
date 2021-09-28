const Board = require('../models/board')

module.exports = app => {
    app.post('/', (req, res) => {
        const boardName = req.body.name
        Board.create(boardName, res)
    })
    
    app.get('/', (req, res) => {  
       Board.getAll(res)
    })

    app.patch('/:uuid', (req, res) => {
        const name = req.body
        const uuid = req.params.uuid
        
        Board.change(uuid, name, res)
    })

    app.delete('/:uuid', (req, res) => {
        const uuid = req.params.uuid
        
        Board.delete(uuid, res)
    })
}