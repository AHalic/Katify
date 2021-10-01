const moment = require('moment');
const uuidv4 = require('uuidv4');
const conexao = require('../infra/connection');

class Board {
    create(boardName, res) {
        const uuid = uuidv4.uuid();

        const board = {
            "name": boardName,
            "uuid": uuid
        }
        const sql = 'INSERT INTO Boards SET ?';

        conexao.query(sql, board, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(board);
            }
        })          
    }
    
    getAll(res) {
        const sql = `SELECT * FROM Boards`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    getUUID(uuid, res) {
        const sql = `SELECT * FROM Boards WHERE uuid="${uuid}"`

        conexao.query(sql, (erro, resultados) => {
            const board = resultados
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(board)
            }
        })
    }

    change(uuid, name, res) {  
        const sql = `UPDATE Boards SET name="${name.name}" WHERE uuid="${uuid}"`

        conexao.query(sql, (erro, resultados) => {
            console.log(`sql code = ${sql}`)
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...name, uuid})
            }
        })
    }

    delete(uuid, res) {
        const sql = "DELETE a.*, b.* FROM Boards a LEFT JOIN Cards b ON b.uuid = a.uuid WHERE a.uuid=?"

        conexao.query(sql, uuid, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({uuid})
            }
        })
    }
}

module.exports = new Board;