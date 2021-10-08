/*
 * Descricao: Arquivo contendo a classe referente a tabela Board contendo os métodos
 * usados para http request
 * Data: Outubro 2021
 * @version 1.0
 * @author Beatriz Maia & Sophie Dilhon
*/

const uuidv4 = require('uuidv4');
const connection = require('../infra/connection');


/**
 * Classe da tabela Board
 */
class Board {
    /**
     * Método que cria um novo Board e o armazena no bd
     * @param {String} boardName nome do Board criado
     * @param {*} res 
     */
    create(boardName, res) {
        // Gera um identificador único atrelado ao Board
        const uuid = uuidv4.uuid();

        const board = {
            "name": boardName,
            "uuid": uuid
        }
        const sql = 'INSERT INTO Boards SET ?';

        connection.query(sql, board, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(board);
            }
        })          
    }
    
    /**
     * Método que retorna todos os Boards presentes na tabela
     * @param {*} res 
     */
    getAll(res) {
        const sql = `SELECT * FROM Boards`

        connection.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    /**
     * Método que retorna um Board específico da tabela
     * @param {String*} uuid identificador unico do Board
     * @param {*} res 
     */
    getUUID(uuid, res) {
        const sql = `SELECT * FROM Boards WHERE uuid="${uuid}"`

        connection.query(sql, (erro, resultados) => {
            const board = resultados
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(board)
            }
        })
    }

    /**
     * Modifica o nome do Board na tabela
     * @param {String*} uuid identificador único do Board
     * @param {String} name novo nome do Board
     * @param {*} res 
     */
    change(uuid, name, res) {  
        const sql = `UPDATE Boards SET name="${name.name}" WHERE uuid="${uuid}"`

        connection.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...name, uuid})
            }
        })
    }

    /**
     * Deleta um board da tabela Board e todos os cards associados da tabela Cards 
     * @param {String*} uuid identificador único do Board
     * @param {*} res 
     */
    delete(uuid, res) {
        const sql = "DELETE a.*, b.* FROM Boards a LEFT JOIN Cards b ON b.uuid = a.uuid WHERE a.uuid=?"

        connection.query(sql, uuid, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({uuid})
            }
        })
    }
}

module.exports = new Board;