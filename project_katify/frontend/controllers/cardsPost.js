import api from '../api.js'
import Status from '../models/Status.js'
import CatCard from '../models/CatCard.js'
import randomColor from './randomColor.js'
import loadEditModal from './cardsPatch.js'

const boarduuid = document.URL.split('/')[3]
const url = `http://localhost:3000`

let inProgButEvent = document.getElementsByClassName("x-button")[0]
let toDoButEvent = document.getElementsByClassName("x-button")[1]
let doneButEvent = document.getElementsByClassName("x-button")[2]
let discardedButEvent = document.getElementsByClassName("discard-button")[0]

function createCard(data, status) {
    let boardName, description, tag1, tag2

    if (data[0].value.length === 0)
        boardName = "Untitled"
    else {
        boardName = data[0].value
    }

    if (data[3].value.length === 0) {
        description = ""
    } else {
        description = data[3].value
    }

    if (data[1].value.length === 0) {
        tag1 = ""
    } else {
        tag1 = data[1].value
    }

    if (data[2].value.length === 0) {
        tag2 = ""
    } else {
        tag2 = data[2].value
    }

    let card = { "name": boardName,
                 "status": status, 
                 "description": description,
                 "tag1": tag1, 
                 "tag2" : tag2,
                 "uuid": boarduuid
                }

    return card
}

function postCard(status, box) {
    let data = document.forms["modalForm"].elements
    let card = createCard(data, status)
    
    api.post(`/${boarduuid}`, card)
    .then(response => {
        let id = response
        let colBox = document.getElementsByClassName(box)[0]
        let cardClass = new CatCard(card.name, status, card.description, [card.tag1, card.tag2], card.id, boarduuid)

        let outerDiv = document.createElement("div")
        outerDiv.className = "card"
        outerDiv.setAttribute("id", id);
        outerDiv.setAttribute("data-toggle", "modal")
        outerDiv.setAttribute("data-target", "#editCardModal")
        outerDiv.setAttribute("data-watherver", "@fat")

        let innerDiv = document.createElement("div")
        innerDiv.className = "card-body"

        let cardName = document.createTextNode(card.name)

        innerDiv.appendChild(cardName)
        outerDiv.appendChild(innerDiv)
        
        let tagRow = document.createElement("div")
        tagRow.classList.add("row")
    
        if (card.tag1.length != 0) {
            let tagOne = document.createTextNode(card.tag1)
            let tagOneDiv = document.createElement("div")
            tagOneDiv.classList.add("tag-color", randomColor())
    
            tagOneDiv.appendChild(tagOne)
            tagRow.appendChild(tagOneDiv)
            tagRow.classList.add("tag-row")
    
        } 
    
        if (card.tag2.length != 0) {
            let tagTwo = document.createTextNode(card.tag2)
            let tagTwoDiv = document.createElement("div")
            tagTwoDiv.classList.add("tag-color", randomColor())
    
            tagTwoDiv.appendChild(tagTwo)
            tagRow.appendChild(tagTwoDiv)
            tagRow.classList.add("tag-row")
        }

        outerDiv.appendChild(tagRow)
        colBox.appendChild(outerDiv)  

        loadEditModal(outerDiv, cardClass)
    })
    .catch(err => {
        alert(`Something went wrong: ${err}`)
    })
}

function postCardInProgress() {
    postCard(Status.inProgress, "box-inProgress")
}

function postCardToDo() {
    postCard(Status.toDo, "box-toDo")
}

function postCardDone() {
    postCard(Status.done, "box-done")
}

function postCardDiscarded() {
    postCard(Status.discarded, "box-discarded")
}

function clickedPostCardToDo() {
    let createTask = document.getElementsByClassName("create-task-btn")[0]
    createTask.onclick = postCardToDo
}

function clickedPostCardDone() {
    let createTask = document.getElementsByClassName("create-task-btn")[0]
    createTask.onclick = postCardDone
}

function clickedPostCardInProgress() {
    let createTask = document.getElementsByClassName("create-task-btn")[0]
    createTask.onclick = postCardInProgress
}

function clickedPostCardDiscarded() {
    let createTask = document.getElementsByClassName("create-task-btn")[0]
    createTask.onclick = postCardDiscarded
}

inProgButEvent.addEventListener('click', clickedPostCardInProgress, true);
toDoButEvent.addEventListener('click', clickedPostCardToDo, true);
doneButEvent.addEventListener('click', clickedPostCardDone, true);
discardedButEvent.addEventListener('click', clickedPostCardDiscarded, true);
