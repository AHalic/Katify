export default Events = { 
    addDiscardHandler(element, board) {
        element.addEventListener('click', () => {
            let card = require("./models/CatCard");
            
            // Aparece o modal
            
            card.status = Status.discarded;
            board.addToColumn(Status.discarded, card);
            console.log("oioi discarded")
        }, false);
    },

    addTodoHandler(element, board) {
        element.addEventListener('click', () => {
            let card = require("./models/CatCard");
            
            card.status = Status.toDo;
            
            board.addToColumn(Status.toDo, card);
            
            // Aparece o modal
        }, false);
    },

    addDoneHandler(element, board) {
        element.addEventListener('click', () => {
            let card = require("./models/CatCard");
            
            card.status = Status.done;
            
            board.addToColumn(Status.done, card);
            
            // Aparece o modal
        }, false);
    },

    addProgressHandler(element, board) {
        element.addEventListener('click', () => {
            let card = require("./models/CatCard");
            
            card.status = Status.inProgress;
            
            board.addToColumn(Status.inProgress, card);
            
            // Aparece o modal
        }, false);
    }

}
