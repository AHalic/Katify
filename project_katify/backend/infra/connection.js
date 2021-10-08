/**
 * Descricao: Modulo referente a conexao do banco de dados MySQL
 * Data: Outubro 2021
 * @version 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */

const mysql = require('mysql2')

/**
 * Configurações da conexão com mysql
 */
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'pass', // Sua senha mysql
    database: 'katify' // Nome do db criado
})

module.exports = connection