import api from './api.js'
import Status from './models/Status.js'
import CatCard from './models/CatCard.js'

const boarduuid = document.URL.split('/')[3]
const url = `http://localhost:3000`

function getStatus(status) {
    if (status == "Done")
        return Status.done
    else if (status == "In Progress") 
        return Status.inProgress
    else if (status == "To-Do")
        return Status.toDo
    else if (status == "Discarded")
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

    let innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    let cardName = document.createTextNode(card.name)
    


    innerDiv.appendChild(cardName)
    outerDiv.appendChild(innerDiv)    
    colBox.appendChild(outerDiv)      
}

api.get(`/${boarduuid}`).then(res => {
    for (let data of res.data) {
        console.log(data)
        createCard(data)
    }
})

// workspaceForm.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	api.patch(`/${boarduuid}`, { name: `${workspaceInput.value}` })
// 	return false;
// })