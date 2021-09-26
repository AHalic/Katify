class Tables {
    init(conexao) {
        this.conexao = conexao

        this.createCard()
    }

    createCard() {
        const sql = 'CREATE TABLE IF NOT EXISTS Cards (id int NOT NULL AUTO_INCREMENT, name varchar(45) NOT NULL, description text, status varchar(15) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Cards criada com sucesso')
            }
        })
    }
}

module.exports = new Tables