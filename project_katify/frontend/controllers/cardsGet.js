import api from '../api.js'
import Status from '../models/Status.js'
import CatCard from '../models/CatCard.js'
import randomColor from './randomColor.js'
import loadEditModal from './cardsPatch.js'

const boarduuid = document.URL.split('/')[3]
const url = `http://localhost:3000`

function getStatus(status) {
    if (String(status).valueOf() == new String("Done").valueOf())
        return Status.done
    else if (String(status).valueOf() == new String("In Progress").valueOf()) 
        return Status.inProgress
    else if (String(status).valueOf() == new String("To Do").valueOf())
        return Status.toDo
    else if (String(status).valueOf() == new String("Discarded").valueOf())
        return Status.discarded
}

function createCard(data) {
    let card = new CatCard(data.name, getStatus(data.status), data.description, [data.tag1, data.tag2], data.id, data.uuid) 
    let colBox 
    
    if (card.status == Status.done)
        colBox = document.getElementsByClassName("box-done")[0]
    else if (card.status == Status.toDo)
        colBox = document.getElementsByClassName("box-toDo")[0]
    else if (card.status == Status.discarded)
        colBox = document.getElementsByClassName("box-discarded")[0]  
    else if (card.status == Status.inProgress)
        colBox = document.getElementsByClassName("box-inProgress")[0]

    let outerDiv = document.createElement("div")
    outerDiv.className = "card"
    outerDiv.setAttribute("id", card.id);
    outerDiv.setAttribute("data-toggle", "modal")
    outerDiv.setAttribute("data-target", "#editCardModal")
    outerDiv.setAttribute("data-watherver", "@fat")
    
    loadEditModal(outerDiv, card)

    let innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    let cardName = document.createTextNode(card.name)
    
    innerDiv.appendChild(cardName)
    outerDiv.appendChild(innerDiv)  
    
    let tagRow = document.createElement("div")
    tagRow.classList.add("row")

    if (card.tags[0].length != 0) {
        let tagOne = document.createTextNode(card.tags[0])
        let tagOneDiv = document.createElement("div")
        tagOneDiv.classList.add("tag-color", randomColor())

        tagOneDiv.appendChild(tagOne)
        tagRow.appendChild(tagOneDiv)
        tagRow.classList.add("tag-row")

    } 

    if (card.tags[1].length != 0) {
        let tagTwo = document.createTextNode(card.tags[1])
        let tagTwoDiv = document.createElement("div")
        tagTwoDiv.classList.add("tag-color", randomColor())

        tagTwoDiv.appendChild(tagTwo)
        tagRow.appendChild(tagTwoDiv)
        tagRow.classList.add("tag-row")
    }

    outerDiv.appendChild(tagRow)  
    colBox.appendChild(outerDiv)      
}

api.get(`/${boarduuid}`).then(res => {
    for (let data of res.data) {
        createCard(data)
    }
})

export default createCard