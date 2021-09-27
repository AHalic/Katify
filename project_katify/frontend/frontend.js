// import { Events } from './Events.js';
//import board, { boardName } from './Board.js';

const url = "http://localhost:3000"

fetch(url)
  .then(function(response) {
    response.json().then(function(data) {
      console.log(data)
    })
  })
  .catch(function(error){
    console.log("deu ruim")
  })

console.log("oi estou aqui frontend");

//import api from 'api_axios.js'

console.log("cheguei");



// boardName = "Kateste"

// Events.addDiscardHandler(document.getElementsByClassName("discard-button")[0], board);

// Events.addDoneHandler(document.getElementsByClassName("done-button")[0], board);

// Events.addTodoHandler(document.getElementsByClassName("todo-button")[0], board);

// Events.addProgressHandler(document.getElementsByClassName("inProgress-button")[0], board);
