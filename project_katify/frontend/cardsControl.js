var inProgButEvent = document.getElementsByClassName("x-button")[0]
var toDoButEvent = document.getElementsByClassName("x-button")[1]
var doneButEvent = document.getElementsByClassName("x-button")[2]
var discardedButEvent = document.getElementsByClassName("x-button")[3]

function postCardInProgress() {
    var inProgColBox = document.getElementsByClassName("box-inProgress")[0]

    var outerDiv = document.createElement("div")
    outerDiv.className = "card"

    var innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    // var t = document.createTextNode("This is a paragraph.")
    // innerDiv.appendChild(t)
    outerDiv.appendChild(innerDiv)    
    inProgColBox.appendChild(outerDiv)    
}

function postCardToDo() {
    var inProgColBox = document.getElementsByClassName("box-toDo")[0]

    var outerDiv = document.createElement("div")
    outerDiv.className = "card"

    var innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    // var t = document.createTextNode("This is a paragraph.")
    // innerDiv.appendChild(t)
    outerDiv.appendChild(innerDiv)    
    inProgColBox.appendChild(outerDiv)    
}

function postCardDone() {
    var inProgColBox = document.getElementsByClassName("box-done")[0]

    var outerDiv = document.createElement("div")
    outerDiv.className = "card"

    var innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    // var t = document.createTextNode("This is a paragraph.")
    // innerDiv.appendChild(t)
    outerDiv.appendChild(innerDiv)    
    inProgColBox.appendChild(outerDiv)    
}

function postCardDiscarded() {
    var inProgColBox = document.getElementsByClassName("box-discarded")[0]

    var outerDiv = document.createElement("div")
    outerDiv.className = "card"

    var innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    // var t = document.createTextNode("This is a paragraph.")
    // innerDiv.appendChild(t)
    outerDiv.appendChild(innerDiv)    
    inProgColBox.appendChild(outerDiv)    
}

inProgButEvent.addEventListener('click', postCardInProgress, true);
toDoButEvent.addEventListener('click', postCardToDo, true);
doneButEvent.addEventListener('click', postCardDone, true);
discardedButEvent.addEventListener('click', postCardDiscarded, true);
