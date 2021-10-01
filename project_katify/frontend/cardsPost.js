import api from './api.js'
import Status from './models/Status.js'
import randomColor from './randomColor.js'

const boarduuid = document.URL.split('/')[3]
const url = `http://localhost:3000`

let inProgButEvent = document.getElementsByClassName("x-button")[0]
let toDoButEvent = document.getElementsByClassName("x-button")[1]
let doneButEvent = document.getElementsByClassName("x-button")[2]
let discardedButEvent = document.getElementsByClassName("discard-button")[0]


function postCard(status, box) {
    let data = document.forms["modalForm"].elements
    let boardName

    if (data[0].value.lenght === 0)
        boardName = "Untitled"
    else
        boardName = data[0].value

    let card = { "name": boardName,
                 "status": status, 
                 "description": data[3].value,
                 "tag1": data[1].value, 
                 "tag2" : data[2].value,
                 "uuid": boarduuid
                }

    console.log(card)
    api.post(`/${boarduuid}`, card)
    .then(response => {
        let id = response
        let colBox = document.getElementsByClassName(box)[0]

        let outerDiv = document.createElement("div")
        outerDiv.className = "card"
        outerDiv.setAttribute("id", id);

        let innerDiv = document.createElement("div")
        innerDiv.className = "card-body"

        let cardName = document.createTextNode(card.name)

        innerDiv.appendChild(cardName)
        outerDiv.appendChild(innerDiv)
        
        let tagRow = document.createElement("div")
        tagRow.classList.add("row", "tag-row")

        if (card.tag1.lenght !== 0) {
            let tagOne = document.createTextNode(card.tag1)
            let divTagOne = document.createElement("div")

            divTagOne.appendChild(tagOne)
            divTagOne.classList.add("tag-color", randomColor())
            tagRow.appendChild(divTagOne)
        } 

        if (card.tag2.lenght !== 0) {
            let tagTwo = document.createTextNode(card.tag2)
            tagTwo.classList.add("tag-color", randomColor())
            tagRow.appendChild(tagTwo)
        }

        outerDiv.appendChild(tagRow)
        colBox.appendChild(outerDiv)  
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
