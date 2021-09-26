const CatCard = require("./models/CatCard");

class Column {
    _status;
    _cards = [];
    // constructor() {
    //     // this._status = "untitled";
    // }   

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

module.exports = new Column;