class Tables {
    init(conexao) {
        this.conexao = conexao

        this.createCardTable()
    }

    createCardTable() {
        const sql = 'CREATE TABLE IF NOT EXISTS KatifyBoard (id int NOT NULL AUTO_INCREMENT, name varchar(45) NOT NULL, tag1 varchar(15), tag2 varchar(15), description text, status varchar(15) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela KatifyBoard criada com sucesso')
            }
        })
    }
}


module.exports = new Tables