class Tables {
    init(conexao) {
        this.conexao = conexao

        this.createCardTable()

        this.createBoardTable()
    }

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