import Status from './Status.js'

class CatCard {
    constructor(name, status, description, tags, id, uuid) {
        this._name = name
        this._status =  status
        this._description = description
        this._tags = tags
        this.__id = id
        this.__uuid = uuid
    }

    set name(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    pushTag(tag) {
        if (!this._tags.includes(tag))
            this._tags.push(tag)
    }

    get tags() {
        return this._tags
    }

    removeTag(tag) {
        if (this._tags.includes(tag))
            this._tags.splice(this._tags.indexOf(tag), 1)
    } 

    set description(description) {
        this._description = description
    }

    get description() {
        return this._description
    }

    set status(status) {
        this._status = status
    }

    get status() {
        return this._status
    }

    get id() {
        return this.__id
    }

    set id(id) {
        this.__id = id
    }

    get uuid() {
        return this.__uuid
    }

    set uuid(uuid) {
        this.__uuid = uuid
    }
}

export default CatCard