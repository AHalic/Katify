const moment = require('moment');
const uuidv4 = require('uuidv4');
const conexao = require('../infra/conection');

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
                console.log(board)
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
                console.log(resultados);
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
                console.log(resultados)
            }
        })
    }

    change(uuid, name, res) {  
        const sql = 'UPDATE Boards SET ? WHERE uuid=?'

        conexao.query(sql, [name, uuid], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...name, uuid})
            }
        })
    }

    delete(uuid, res) {
        const sql = 'DELETE FROM Boards WHERE uuid=?'

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