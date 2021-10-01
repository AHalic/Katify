import api from '../api.js'
import deleteCard from './cardsDelete.js'
import Status from '../models/Status.js'
import CatCard from '../models/CatCard.js'
import randomColor from './randomColor.js'

const boarduuid = document.URL.split('/')[3]

function addCard(card, id) {
    let colBox 

    if (card.status == Status.done){
        colBox = document.getElementsByClassName("box-done")[0]
    }
    else if (card.status == Status.toDo){
        colBox = document.getElementsByClassName("box-toDo")[0]
    }
    else if (card.status == Status.discarded){
        colBox = document.getElementsByClassName("box-discarded")[0]  
    }
    else if (card.status == Status.inProgress){
        colBox = document.getElementsByClassName("box-inProgress")[0]
    }

    let cardClass = new CatCard(card.name, card.status, card.description, [card.tag1, card.tag2], id, boarduuid)

    let outerDiv = document.createElement("div")
    outerDiv.className = "card"
    outerDiv.setAttribute("id", id)
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

    document.getElementById("modalForm").reset()
    loadEditModal(outerDiv, cardClass)
}

function sendCard(data, id, card) {
    const editedCard = {
        name: data[0].value,
        tag1: data[1].value,
        tag2: data[2].value,
        status: data[3].value,
        description: data[4].value
    }

    api.patch(`/${boarduuid}/${id}`, editedCard)
    document.getElementById(id).remove();
    addCard(editedCard, id)

    return false
}

function loadEditModal(outerDiv, card) {
    outerDiv.addEventListener("click", (event) => {
        document.getElementById("editTaskName").value = card.name
        document.getElementById("editTag1").value = card.tags[0]
        document.getElementById("editTag2").value = card.tags[1]
        document.getElementById("editDescription").value = card.description
        let id = outerDiv.id

        let select = document.getElementById("selectStatus")
        
        // remove todas as opcoes
        for(let i = select.options.length - 1; i >= 0; i--) {
            select.remove(i);
        }
        
        const idByStatus = {
            "In Progress": "inProgress",
            "To Do": "toDo",
            "Done": "done",
            "Discarded": "discarded"
        }
        
        const statusList = Object.keys(idByStatus)
        
        // recoloca todas as opcoes, colocando como selected a do status
        for (let i = 0; i < 4; i++) {
            let opt = document.createElement('option')
            opt.className = "status-option"
            opt.value = statusList[i]
            opt.innerHTML = statusList[i]
            
            if (card.status === statusList[i]) {
                opt.setAttribute("selected", "true")
            }
            
            select.appendChild(opt)
        }

        let data = document.forms["editModalForm"].elements
        let editButton = document.getElementsByClassName("edit-task-btn")[0]

        editButton.onclick = function() {
            sendCard(data, id, card)
        }

        let deleteBtn = document.getElementsByClassName("btn-delete")[0]
        deleteBtn.addEventListener("click", function() {
            deleteCard(id)
        })

    })
}

export default loadEditModal;