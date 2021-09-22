import CatCard from "./CatCard.js";

export default class Column {
    constructor(status) {
        this._name = status;
        this._cards = [];
    }   

    pushCard(card) {
        this._cards.push(card);
    }

    removeCard(card) {
        if (this._cards.includes(card))
            this._cards.splice(this._cards.indexOf(card), 1);
    }
}