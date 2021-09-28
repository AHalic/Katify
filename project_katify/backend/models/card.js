const moment = require('moment');
const conexao = require('../infra/conection');

class Card {
    add(card, res) {
       
        const sql = 'INSERT INTO Cards SET ?';

        conexao.query(sql, card, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(201).json(card);
                console.log(card)
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
                console.log(resultados);
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

    // listaTags(uuid, res) {
    //  // Se for usar adicionar where
    //     const sql = 'SELECT DISTINCT tag1 from Cards WHERE  UNION SELECT DISTINCT tag2 FROM Cards WHERE ';

    //     conexao.query(sql, (erro, resultados) => {
    //         const card = resultados
    //         if(erro) {
    //             res.status(400).json(erro)
    //         } else {
    //             res.status(200).json(card)
    //         }
    //     })
    // }
}

    
module.exports = new Card;