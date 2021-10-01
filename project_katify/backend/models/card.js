const moment = require('moment');
const conexao = require('../infra/conection');

class Card {
    add(card, res) {
       
        const sql = 'INSERT INTO Cards SET ?';

        conexao.query(sql, card, (erro, results) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(results.insertId);
            }
        })
    }

    get(uuid, res) {
        const sql = `SELECT * FROM Cards WHERE uuid="${uuid}"`

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    searchID(uuid, id, res) {
        const sql = `SELECT * FROM Cards WHERE id=${id} AND uuid="${uuid}"`

        conexao.query(sql, (erro, resultados) => {
            const card = resultados
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(card)
            }
        })
    }

    change(uuid, id, valores, res) {  
        const sql = 'UPDATE Cards SET ? WHERE id=? and uuid=?'

        conexao.query(sql, [valores, id, uuid], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleteID(uuid, id, res) {
        const sql = 'DELETE FROM Cards WHERE id=? AND uuid=?'

        conexao.query(sql, [id, uuid], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

    delete(uuid, res) {
        const sql = 'DELETE FROM Cards WHERE uuid=?'

        conexao.query(sql, uuid, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(uuid)
            }
        })
    }
}

    
module.exports = new Card;