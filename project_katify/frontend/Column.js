class Column {
    constructor() {
        _status;
        _cards = [];
    }

    set status(status) {
        this._status = status;
    }

    pushCard(card) {
        this._cards.push(card);
    }

    removeCard(card) {
        if (this._cards.includes(card))
            this._cards.splice(this._cards.indexOf(card), 1);
    }
}

export default Column;