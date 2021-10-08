/*
 * Descricao: Arquivo contendo a classe referente as cards
 * Data: Outubro 2021
 * @version 1.0
 * @author Beatriz Maia & Sophie Dilhon
*/

/**
 * Classe da CatCard
 */
class CatCard {
    /**
     * @class CatCard construtor
     * @param {String} name nome do card
     * @param {Status} status status do card
     * @param {String} description descricao do card
     * @param {Array<String>} tags array de ate 2 tags
     * @param {int} id id do card no banco de dados
     * @param {String} uuid uuid do card no banco de dado
     */
    constructor(name, status, description, tags, id, uuid) {
        this._name = name
        this._status =  status
        this._description = description
        this._tags = tags
        this.__id = id
        this.__uuid = uuid
    }

    /**
     * Setter de name
     */
    set name(name) {
        this._name = name
    }

    /**
     * Getter de name
     */
    get name() {
        return this._name
    }

    /**
     * Adiciona tag para array
     * @param {String} tag 
     */
    pushTag(tag) {
        if (!this._tags.includes(tag))
            this._tags.push(tag)
    }

    /**
     * Getter do array de tags
     */
    get tags() {
        return this._tags
    }

    /**
     * Removedor de uma tag
     * @param {String} tag 
     */
    removeTag(tag) {
        if (this._tags.includes(tag))
            this._tags.splice(this._tags.indexOf(tag), 1)
    } 

    /**
     * Setter de description
     */
    set description(description) {
        this._description = description
    }

    /**
     * Getter de description
     */
    get description() {
        return this._description
    }

    /**
     * Setter de status
     */
    set status(status) {
        this._status = status
    }

    /**
     * Getter de status
     */
    get status() {
        return this._status
    }

    /**
     * Setter de id
     */
    set id(id) {
        this.__id = id
    }
 
    /**
     * Getter de id
     */
    get id() {
        return this.__id
    }

    /**
     * Setter de uuid
     */
    set uuid(uuid) {
        this.__uuid = uuid
    }

    /**
     * Getter de uuid
     */
    get uuid() {
        return this.__uuid
    }
}

export default CatCard