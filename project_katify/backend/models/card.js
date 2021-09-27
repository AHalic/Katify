const moment = require('moment');
const conexao = require('../infra/conection');

class Card {
    adiciona(card, res) {
       
        const sql = 'INSERT INTO KatifyBoard SET ?';

        conexao.query(sql, card, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(card);
                console.log(card)
            }
        })
    }


    lista(res) {
        const sql = 'SELECT * FROM KatifyBoard'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
                console.log(resultados);
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM KatifyBoard WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const card = resultados
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(card)
            }
        })
    }

    altera(id, valores, res) {  
        const sql = 'UPDATE KatifyBoard SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM KatifyBoard WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }

    listaTags(res) {
        const sql = 'SELECT DISTINCT tag1 from KatifyBoard UNION SELECT DISTINCT tag2 FROM KatifyBoard';

        conexao.query(sql, (erro, resultados) => {
            const card = resultados
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(card)
            }
        })
    }
}

    
module.exports = new Card;