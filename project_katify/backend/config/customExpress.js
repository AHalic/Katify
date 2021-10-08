/*
 * Descricao: Configuracao customizada do express
 * Data: Outubro 2021
 * @version 1.0
 * @author Beatriz Maia & Sophie Dilhon
*/

const express = require('express');
const consign = require('consign');
 

/**
 * Cria o app com os dados e rotas importantes
 * @returns app com informações para abrir o servidor
 */
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