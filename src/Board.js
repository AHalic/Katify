import Status from './Status';
import Column from './Column';

import { v4 as uuidv4 } from 'uuid';

export default class Board {
    constructor() {
        this._boardName = "Undefined"
        this._columns = [];
        this.createCol(Status.done);
        this.createCol(Status.toDo);
        this.createCol(Status.inProgress);
        this.createCol(Status.discarded);

        // TODO create uuid
        // this._uuid = uuidv4();
    }

    createCol (status) {
        this._columns.push(new Column(status));
    }

    get boardName() {
        return this._boardName;
    }

    set boardName(name) {
        this._boardName = name;
    }

    get uuid() {
        return this._uuid;
    }
}