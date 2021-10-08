/*
 * Descricao: Funcoes relacionadas a adicao de um card em um board
 * Data: Outubro 2021
 * @version: 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */ 

import api from '../api.js'
import Status from '../models/Status.js'
import CatCard from '../models/CatCard.js'
import randomColor from './randomColor.js'
import loadEditModal from './loadModal.js'

// uuid do board atual
const boarduuid = document.URL.split('/')[3]

// Botões relativos a criação de um card na coluna específica
let inProgButEvent = document.getElementsByClassName("x-button")[0]
let toDoButEvent = document.getElementsByClassName("x-button")[1]
let doneButEvent = document.getElementsByClassName("x-button")[2]
let discardedButEvent = document.getElementsByClassName("discard-button")[0]

/**
 * Função que cria um objeto contendo os dados do card 
 * que será adicionado ao board
 * @param {*} data dados a respeito do novo card
 * @param {String} status situação do card
 * @returns {Json} dados do card
 */
function createCard(data, status) {
    let cardName, description, tag1, tag2

    // Caso não seja informado um nome, o card tem titulo Utitled 
    if (data[0].value.length === 0)
        cardName = "Untitled"
    else {
        cardName = data[0].value
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

    let card = { "name": cardName,
                 "status": status, 
                 "description": description,
                 "tag1": tag1, 
                 "tag2" : tag2,
                 "uuid": boarduuid
                }

    return card
}

/**
 * Função que cria um card, o armazena no bd e apresenta no html
 * @param {String} status situação do card
 * @param {String} box coluna em que será criado o card
 */
function postCard(status, box) {
    // dados obtidos do forms
    let data = document.forms["modalForm"].elements
    let card = createCard(data, status)
    
    // Faz a conexão com back para fazer o post e posiciona o card no html
    api.post(`/${boarduuid}`, card)
    .then(response => {
        let id = response.data
        let colBox = document.getElementsByClassName(box)[0]
        let cardClass = new CatCard(card.name, status, card.description, [card.tag1, card.tag2], card.id, boarduuid)

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

        loadEditModal(outerDiv, cardClass)
        document.getElementById("modalForm").reset()

    })
    .catch(err => {
        alert(`Something went wrong: ${err}`)
    })
}

/**
 * Função para post do card com status in progress
 */
function postCardInProgress() {
    postCard(Status.inProgress, "box-inProgress")
}

/**
 * Função para post do card com status to do
 */
function postCardToDo() {
    postCard(Status.toDo, "box-toDo")
}

/**
 * Função para post do card com status done
 */
function postCardDone() {
    postCard(Status.done, "box-done")
}

/**
 * Função para post do card com status discarded
 */
function postCardDiscarded() {
    postCard(Status.discarded, "box-discarded")
}

/**
 * Adiciona evento onclick para criar card na coluna to-do
 */
function clickedPostCardToDo() {
    let createTask = document.getElementsByClassName("create-task-btn")[0]
    createTask.onclick = postCardToDo
}

/**
 * Adiciona evento onclick para criar card na coluna done
 */
function clickedPostCardDone() {
    let createTask = document.getElementsByClassName("create-task-btn")[0]
    createTask.onclick = postCardDone
}

/**
 * Adiciona evento onclick para criar card na coluna in progress
 */
function clickedPostCardInProgress() {
    let createTask = document.getElementsByClassName("create-task-btn")[0]
    createTask.onclick = postCardInProgress
}

/**
 * Adiciona evento onclick para criar card na coluna discarded
 */
function clickedPostCardDiscarded() {
    let createTask = document.getElementsByClassName("create-task-btn")[0]
    createTask.onclick = postCardDiscarded
}

// Adiciona eventos aos botões de criação de card
inProgButEvent.addEventListener('click', clickedPostCardInProgress, true);
toDoButEvent.addEventListener('click', clickedPostCardToDo, true);
doneButEvent.addEventListener('click', clickedPostCardDone, true);
discardedButEvent.addEventListener('click', clickedPostCardDiscarded, true);
