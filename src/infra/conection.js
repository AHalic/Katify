const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 's', // Your password
    database: 'katify'
})

module.exports = conexao