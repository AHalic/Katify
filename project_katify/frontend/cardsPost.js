import api from './api.js'

function postCardInProgress() {
    let inProgColBox = document.getElementsByClassName("box-inProgress")[0]

    let outerDiv = document.createElement("div")
    outerDiv.className = "card"

    let innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    // let t = document.createTextNode("This is a paragraph.")
    // innerDiv.appendChild(t)
    outerDiv.appendChild(innerDiv)    
    inProgColBox.appendChild(outerDiv)    
}

function postCardToDo() {
    let inProgColBox = document.getElementsByClassName("box-toDo")[0]

    let outerDiv = document.createElement("div")
    outerDiv.className = "card"

    let innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    // let t = document.createTextNode("This is a paragraph.")
    // innerDiv.appendChild(t)
    outerDiv.appendChild(innerDiv)    
    inProgColBox.appendChild(outerDiv)    
}

function postCardDone() {
    let inProgColBox = document.getElementsByClassName("box-done")[0]

    let outerDiv = document.createElement("div")
    outerDiv.className = "card"

    let innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    // let t = document.createTextNode("This is a paragraph.")
    // innerDiv.appendChild(t)
    outerDiv.appendChild(innerDiv)    
    inProgColBox.appendChild(outerDiv)    
}

function postCardDiscarded() {
    let inProgColBox = document.getElementsByClassName("box-discarded")[0]

    let outerDiv = document.createElement("div")
    outerDiv.className = "card"

    let innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    // let t = document.createTextNode("This is a paragraph.")
    // innerDiv.appendChild(t)
    outerDiv.appendChild(innerDiv)    
    inProgColBox.appendChild(outerDiv)    
}

let inProgButEvent = document.getElementsByClassName("x-button")[0]
let toDoButEvent = document.getElementsByClassName("x-button")[1]
let doneButEvent = document.getElementsByClassName("x-button")[2]
let discardedButEvent = document.getElementsByClassName("x-button")[3]

inProgButEvent.addEventListener('click', postCardInProgress, true);
toDoButEvent.addEventListener('click', postCardToDo, true);
doneButEvent.addEventListener('click', postCardDone, true);
discardedButEvent.addEventListener('click', postCardDiscarded, true);
