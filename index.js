// const express = require('express')

// const app = express()

// app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

// app.get('/', (req, res) => (res.send("Servidor rodando, test 123")))



import Board from '/src/Board.js';
import {addDiscardHandler, addDoneHandler, addProgressHandler, addTodoHandler} from '/src/Events.js'

let board = new Board();
board.boardName = "Kateste"

console.log(board);

addDiscardHandler(document.getElementsByClassName("discard-button")[0], board);

addDoneHandler(document.getElementsByClassName("done-button")[0], board);

addTodoHandler(document.getElementsByClassName("todo-button")[0], board);

addProgressHandler(document.getElementsByClassName("inProgress-button")[0], board);
