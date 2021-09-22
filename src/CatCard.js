import Status from "./Status.js";

export default class CatCard {
    constructor() {
        this._name = "Untitled";
        this._status =  Status.without;
        this._description = "";
        this._tags = [];
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    pushTag(tag) {
        if (!this._tags.includes(tag))
            this._tags.push(tag);
    }

    get tags() {
        return this._tags;
    }

    removeTag(tag) {
        if (this._tags.includes(tag))
            this._tags.splice(this._tags.indexOf(tag), 1);
    } 

    set description(description) {
        this._description = description;
    }

    get description() {
        return this._description;
    }

    set status(status) {
        this._status = status;
    }

    get status() {
        return this._status;
    }
}
