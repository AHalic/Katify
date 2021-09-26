export default class Tag {
    constructor(name="Untitled") {
        this.__name = name;
        this.__color = Math.round(Math.random() * (4 - 1) +1);
    }    
}

export default class Tags {
    constructor() {
        this.__list = [];
    }

    get list(){
        return this.__list;
    }
    
    
    
    tagInList(name) {
        for (let i of this.__list) {
            if (i.__name == name)
                return true;
        }

        return false;
    }
    
}