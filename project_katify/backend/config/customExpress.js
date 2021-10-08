/**
  Descricao: Configuracao customizada do express
  Versao: 1.0
  Data: Outubro 2021
 */

// Importa modulos
const express = require('express');
const consign = require('consign');
 
module.exports = () => {
    const app = express();
    
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    app.use(function(req, res, next) {

        // Adiciona header the cors
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
        
        // Garante que os headers sao aplicado
        next();
    });
    consign()
        .include('/controllers')
        .into(app)

    return app;
}