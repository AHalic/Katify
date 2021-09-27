const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
 
module.exports = () => {
    const app = express();
    
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    consign()
        .include('src/controllers')
        .into(app)
    
    return app;
}