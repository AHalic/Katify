const express = require('express');
const consign = require('consign');
 
module.exports = () => {
    const app = express();
    
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    app.use(function(req, res, next) {
        // adiciona header the cors
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
        
        // garante que os headers sao aplicado
        next();
    });
    consign()
        .include('/controllers')
        .into(app)

    return app;
}