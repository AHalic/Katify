import Status from "./Status.js"
import CatCard from "./CatCard.js";

const Events = {
    addDiscardHandler(element, board) {
        element.addEventListener('click', () => {
            let card = new CatCard;
    
            // Aparece o modal
    
            card.status = Status.discarded;
    
            board.addToColumn(Status.discarded, card);
        }, false);
    },
    
    addTodoHandler(element, board) {
        element.addEventListener('click', () => {
            let card = new CatCard;
    
            card.status = Status.toDo;
    
            board.addToColumn(Status.toDo, card);
    
            // Aparece o modal
        }, false);
    },
    
    addDoneHandler(element, board) {
        element.addEventListener('click', () => {
            let card = new CatCard;
    
            card.status = Status.done;
    
            board.addToColumn(Status.done, card);
    
            // Aparece o modal
        }, false);
    },
    
    addProgressHandler(element, board) {
        element.addEventListener('click', () => {
            let card = new CatCard;
    
            card.status = Status.inProgress;
    
            board.addToColumn(Status.inProgress, card);
    
            // Aparece o modal
        }, false);
    } 
}

export default Events;