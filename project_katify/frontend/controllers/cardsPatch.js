function sendCard(data) {
    console.log(data)
}

function loadEditModal(outerDiv, card) {
    outerDiv.addEventListener("click", (event) => {
        document.getElementById("editTaskName").value = card.name
        document.getElementById("editTag1").value = card.tags[0]
        document.getElementById("editTag2").value = card.tags[1]
        document.getElementById("editDescription").value = card.description
        
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
        let editButton = document.getElementsByClassName("edit-task-btn")
        // editButton.addEventListener("click", function() {
        //     sendCard(data)})
        // console.log(data)

    })
    
}

export default loadEditModal;