/*
 * Descricao: Arquivo contendo a classe referente a tabela Cards contendo os métodos
 * usados para http request
 * Data: Outubro 2021
 * @version 1.0
 * @author Beatriz Maia & Sophie Dilhon
*/

const connection = require('../infra/connection');


/**
 * Classe da tabela Cards
 */
class Card {
    /**
     * Método que adiciona um card na tabela Cards
     * @param {JSON} card objeto contendo os dados do card
     * @param {*} res 
     */
    add(card, res) {
       
        const sql = 'INSERT INTO Cards SET ?';

        connection.query(sql, card, (erro, results) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(results.insertId);
            }
        })
    }

    /**
     * Método que retorna todos os cards da tabela contendo um uuid específico
     * @param {String} uuid identificador único do board
     * @param {*} res 
     */
    get(uuid, res) {
        const sql = `SELECT * FROM Cards WHERE uuid="${uuid}"`

        connection.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    /**
     * Método que retorna um card de ide específico de board específico
     * @param {String} uuid identificador únido do board
     * @param {int} id identificador do card
     * @param {*} res 
     */
    searchID(uuid, id, res) {
        const sql = `SELECT * FROM Cards WHERE id=${id} AND uuid="${uuid}"`

        connection.query(sql, (erro, resultados) => {
            const card = resultados
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(card)
            }
        })
    }

    /**
     * Método que modifica um card específico de um board específico
     * @param {String} uuid identificador único do board
     * @param {int} id identificador do card
     * @param {JSON} valores objeto contendo os dados do card modificado
     * @param {*} res 
     */
    change(uuid, id, valores, res) {  
        const sql = 'UPDATE Cards SET ? WHERE id=? and uuid=?'

        connection.query(sql, [valores, id, uuid], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    /**
     * Método que remove da tabela Cards um card de id específico
     * @param {String} uuid identificado único do board
     * @param {int} id identificador do card
     * @param {*} res 
     */
    deleteID(uuid, id, res) {
        const sql = 'DELETE FROM Cards WHERE id=? AND uuid=?'

        connection.query(sql, [id, uuid], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

    /**
     * Método que remove da tabela Cards todos os cards de um board específico
     * @param {String} uuid identificador único do board
     * @param {*} res 
     */
    delete(uuid, res) {
        const sql = 'DELETE FROM Cards WHERE uuid=?'

        connection.query(sql, uuid, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(uuid)
            }
        })
    }
}

    
module.exports = new Card;