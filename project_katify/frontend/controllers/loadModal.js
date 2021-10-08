/*
 * Descricao: Funcoes relacionadas ao modal referente aos cards
 * Data: Outubro 2021
 * @version: 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */ 

import api from '../api.js'
import deleteCard from './cardsDelete.js'
import Status from '../models/Status.js'
import CatCard from '../models/CatCard.js'
import randomColor from './randomColor.js'

// Valor uuid do board
const boarduuid = document.URL.split('/')[3]

/**
 * Adiciona card ao html da pagina
 * @param {CatCard} card 
 * @param {int} id 
 */
function addCard(card, id) {
    // Pega coluna de status de acordo com o status do card
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

    // Cria classe com informações do card
    let cardClass = new CatCard(card.name, card.status, card.description, [card.tag1, card.tag2], id, boarduuid)

    // Cria elementos e associa ao modal
    let outerDiv = document.createElement("div")
    outerDiv.className = "card"
    outerDiv.setAttribute("id", id)
    outerDiv.setAttribute("data-toggle", "modal")
    outerDiv.setAttribute("data-target", "#editCardModal")
    outerDiv.setAttribute("data-watherver", "@fat")

    // Cria corpo do card utilizando bootstrap
    let innerDiv = document.createElement("div")
    innerDiv.className = "card-body"

    let cardName = document.createTextNode(card.name)

    innerDiv.appendChild(cardName)
    outerDiv.appendChild(innerDiv)
    
    let tagRow = document.createElement("div")
    tagRow.classList.add("row")

    // Adiciona cor a tag
    if (card.tag1.length != 0) {
        let tagOne = document.createTextNode(card.tag1)
        let tagOneDiv = document.createElement("div")
        tagOneDiv.classList.add("tag-color", randomColor())

        tagOneDiv.appendChild(tagOne)
        tagRow.appendChild(tagOneDiv)
        tagRow.classList.add("tag-row")

    } 

    // Adiciona cor a tag
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

    // Reseta valores do modal
    document.getElementById("modalForm").reset()

    // Carrega cards para pode lancar modal e esperar eventos
    loadEditModal(outerDiv, cardClass)
}

/**
 * Atualiza informacoes do card de acordo com as informacoes do form
 * @param {*} data - dados recebidos do form
 * @param {*} id  - id do card no banco de dado
 */
function sendCard(data, id) {
    // Cria json com informacoes
    const editedCard = {
        name: data[0].value,
        tag1: data[1].value,
        tag2: data[2].value,
        status: data[3].value,
        description: data[4].value
    }

    // Caso o nome seja vazio, coloque "Untitled"
    if (editedCard.name.length === 0)
        editedCard.name = "Untitled"

    // Atualiza card
    api.patch(`/${boarduuid}/${id}`, editedCard)
    
    // Remove elemento do card antigo
    document.getElementById(id).remove();

    // Adiciona card para o board com informacoes atualizadas
    addCard(editedCard, id)
}

/**
 * Carrega modal para editar cards
 * @param {*} outerDiv div relacionada a card
 * @param {*} card 
 */
function loadEditModal(outerDiv, card) {
    // Evento quando clica no card
    outerDiv.addEventListener("click", (event) => {
        document.getElementById("editTaskName").value = card.name
        document.getElementById("editTag1").value = card.tags[0]
        document.getElementById("editTag2").value = card.tags[1]
        document.getElementById("editDescription").value = card.description
        let id = outerDiv.id

        let select = document.getElementById("selectStatus")
        
        // Remove todas as opcoes
        for(let i = select.options.length - 1; i >= 0; i--) {
            select.remove(i);
        }
        
        // Associa status a css class
        const idByStatus = {
            "In Progress": "inProgress",
            "To Do": "toDo",
            "Done": "done",
            "Discarded": "discarded"
        }
        
        // Mapea lista de status
        const statusList = Object.keys(idByStatus)
        
        // Recoloca todas as opcoes, colocando como selected a do status
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

        // Recebe dados do forms de editar card
        let data = document.forms["editModalForm"].elements

        // Elemento selecionado de editar task
        let editButton = document.getElementsByClassName("edit-task-btn")[0]

        // Evento em click do botao de editar
        editButton.onclick = function() {
            // Atualiza card
            sendCard(data, id, card)
        }

        // Evento em click do botao de deletar
        let deleteBtn = document.getElementsByClassName("btn-delete")[0]
        deleteBtn.addEventListener("click", function() {
            // Remove card
            deleteCard(id)
        })
    })
}

export default loadEditModal;