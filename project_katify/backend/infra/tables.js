/**
 * Classe que representa as tabelas do banco de dados
 */
class Tables {
    /**
     * Inicializa a classe criando as tabelas
     * @param {*} conexao - constante que guarda 
     * as informações da conexão com o sql
     */
    init(conexao) {
        this.conexao = conexao

        this.createCardTable()

        this.createBoardTable()
    }

    /**
     * Método responsável por criar a tabela que guarda os dados 
     * de todos os cards do usuário. 
     * 
     * A tabela contém 7 colunas:
     *  uuid, name, tag1, tag2, description, status e id.
     */
    createCardTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS Cards (id int NOT NULL AUTO_INCREMENT, uuid varchar(40) NOT NULL, name varchar(45) NOT NULL, tag1 varchar(15), tag2 varchar(15), description text, status varchar(15) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Cards criada com sucesso')
            }
        })
    }

    /**
     * Método responsável por criar a tabela que guarda os 
     * dados de todos os workspaces do usuário. 
     * 
     * A tabela contém 3 colunas:
     *  uuid, name e id.
     */
    createBoardTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS Boards (id int NOT NULL AUTO_INCREMENT, uuid varchar(40) NOT NULL, name varchar(45) NOT NULL, PRIMARY KEY(id))';

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Boards criada com sucesso')
            }
        })
    }
}


module.exports = new Tables