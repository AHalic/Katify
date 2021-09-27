import { done, toDo, inProgress, discarded } from './Status.js';
import Column from './Column.js';

// import { v4 as uuidv4 } from 'uuid';

class Board {
    constructor() {
        this._boardName = "Workspace"
        this._columns = {};
        this.createCol(done);
        this.createCol(toDo);
        this.createCol(inProgress);
        this.createCol(discarded);

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

export default new Board;