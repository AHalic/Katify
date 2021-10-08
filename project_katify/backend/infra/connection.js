const mysql = require('mysql2')

/**
 * Configurações da conexão com mysql
 */
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'pass', // Sua senha mysql
    database: 'katify' // Nome do db criado
})

module.exports = conexao