import api from '../api.js'
import deleteCard from './cardsDelete.js'

const boarduuid = document.URL.split('/')[3]

function dataValue(value, compValue, atr) {
    let data = {}

    if (value.normalize() === compValue.normalize()) {
        data = {
            atr: compValue
        }
    }

    return data
}

function sendCard(data, id) {
    // let name = data.name
    // let tag1 = data.tags[1]
    // let tag2 = data.tags[2]
    // let description = 
    console.log("inside send card", id)
    for (let i = 0; i < 4; i++) {
        // console.log(data[i].value)
    }
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
            opt.value = statusList[i]
            opt.innerHTML = statusList[i]
            
            if (card.status === statusList[i]) {
                opt.setAttribute("selected", "true")
            }
            
            select.appendChild(opt)
        }

        let data = document.forms["modalForm"].elements
        console.log(data)
        console.log(id)
        for (let i = 0; i < 4; i++) {
            console.log(data[i].value)
        }
    
        let editButton = document.getElementsByClassName("edit-task-btn")[0]
        console.log(editButton)
        editButton.addEventListener("click", function() {
            console.log(`data no evento ${data}`)
            sendCard(data, id)})

        let deleteBtn = document.getElementsByClassName("btn-delete")[0]
        deleteBtn.addEventListener("click", function() {
            deleteCard(id)})

    })
    
}

export default loadEditModal;