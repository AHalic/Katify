const Status = require('./Status');
const Column = require('./Column');

// import { v4 as uuidv4 } from 'uuid';

class Board {
    constructor() {
        this._boardName = "Workspace"
        this._columns = {};
        this.createCol(Status.done);
        this.createCol(Status.toDo);
        this.createCol(Status.inProgress);
        this.createCol(Status.discarded);

        // TODO create uuid
        // this._uuid = uuidv4();
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
    }

    addToColumn (status, card) {
        this._columns[status].pushCard(card);
    }

    // get uuid() {
    //     return this._uuid;
    // }
}

module.exports = new Board;