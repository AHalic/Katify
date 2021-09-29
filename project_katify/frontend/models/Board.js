import Status from './Status.js';
import Column from './Column.js';

// import { v4 as uuidv4 } from 'uuid';

class Board {
    constructor(boardName="Workspace", uuid) {
        this._boardName = boardName;
        this._columns = {};
        this.createCol(Status.done);
        this.createCol(Status.toDo);
        this.createCol(Status.inProgress);
        this.createCol(Status.discarded);

        // TODO create uuid
        this._uuid = uuid;
    }

    createCol (status) {
        this._columns[status] = Column;
        this._columns[status]
    }

    get boardName() {
        return this._boardName;
    }

    set boardName(name) {
        this._boardName = name;

        // Isso provavelmente n fica aqui e o board name deveria ser salvo no db
        document.getElementsByClassName("workspace-name")[0] = this._boardName;
    }

    addToColumn (status, card) {
        this._columns[status].pushCard(card);
    }

    // get uuid() {
    //     return this._uuid;
    // }
}

export default Board;