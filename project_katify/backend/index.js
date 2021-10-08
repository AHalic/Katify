/*
 * Descricao: Configuracao do servidor do backend
 * Data: Outubro 2021
 * @version 1.0
 * @author Beatriz Maia & Sophie Dilhon
*/

const customExpress = require('./config/customExpress')
const connection = require('./infra/connection')
const Tabelas = require('./infra/tables')
const express = require('express');
const cors = require('cors')

/**
 * Conecta com o servidor backend e cria as tabelas do bd
 */
connection.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('conectado com sucesso');
        
        Tabelas.init(connection);
        
        const app = customExpress();

        app.use('/', express.static(__dirname + '/api/'));
        app.use(cors())
        app.listen(3000, () => console.log('Servidor Backend, rodando na porta 3000'));
    }
})
