const customExpress = require('./config/customExpress')
const connection = require('./infra/connection')
const Tabelas = require('./infra/tables')
const express = require('express');
const cors = require('cors')

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
