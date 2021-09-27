const customExpress = require('./src/config/customExpress')
const conexao = require('./src/infra/conection')
const Tabelas = require('./src/infra/tables')
const express = require('./src/node_modules/express');

conexao.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('conectado com sucesso');
        
        Tabelas.init(conexao);
        
        const app = customExpress();
        app.use('/', express.static(__dirname + '/app'));
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
})


// const express = require('express');
// const consign = require('consign')

// const app = express();
// app.use(express.static(__dirname));

// consign()
//     .include('controllers')
//     .into(app)

// app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

// app.get("/", (req, res) => {
//     console.log("Teste");
//     // res.sendFile(__dirname+"/index.html");
// });

// const board = require('./src/Board');
// const events = require('./src/Events');

// board.boardName = "Kateste"

// // console.log(board);
