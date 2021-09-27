const customExpress = require('./backend/config/customExpress')
const conexao = require('./backend/infra/conection')
const Tabelas = require('./backend/infra/tables')
const express = require('express');
const cors = require('cors')

conexao.connect(erro => {
    if(erro) {
        console.log(erro);
    } else {
        console.log('conectado com sucesso');
        
        Tabelas.init(conexao);
        
        const app = customExpress();

        app.use('/', express.static(__dirname + '/api/'));
        app.use(cors())
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

// const board = require('./backend/Board');
// const events = require('./backend/Events');

// board.boardName = "Kateste"

// // console.log(board);
