const events = require('./src/Events')
const board = require('./src/Board');

console.log("oi estou aqui frontend");

board.boardName = "Kateste"

events.addDiscardHandler(document.getElementsByClassName("discard-button")[0], board);

events.addDoneHandler(document.getElementsByClassName("done-button")[0], board);

events.addTodoHandler(document.getElementsByClassName("todo-button")[0], board);

events.addProgressHandler(document.getElementsByClassName("inProgress-button")[0], board);
