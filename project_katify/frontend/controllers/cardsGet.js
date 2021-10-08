/*
 * Descricao: Funcoes relacionadas a visualizacao dos cards
 * Data: Outubro 2021
 * @version: 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */ 

import api from '../api.js'
import Status from '../models/Status.js'
import CatCard from '../models/CatCard.js'
import randomColor from './randomColor.js'
import loadEditModal from './loadModal.js'

// Valor uuid do board
const boarduuid = document.URL.split('/')[3]

/**
 * Retorna coluna do Status a partir do Status
 * @param {*} card - card do board
 * @returns coluna que deve ser adicionado o card
 */
function getColStatus(card) {
    if (card.status == Status.done){
        return document.getElementsByClassName("box-done")[0]
    }
    else if (card.status == Status.toDo){
        return document.getElementsByClassName("box-toDo")[0]
    }
    else if (card.status == Status.discarded){
        return document.getElementsByClassName("box-discarded")[0]  
    }
    else if (card.status == Status.inProgress){
        return document.getElementsByClassName("box-inProgress")[0]
    }
}
 
/**
 * Cria card na pagina
 * @param {*} data - dados optido da api
 */
function createCard(data) {
    // Cria elementos com conteudo do card
    let card = new CatCard(data.name, data.status, data.description, [data.tag1, data.tag2], data.id, data.uuid) 
    
    // Retorna string referente ao status
    let colBox = getColStatus(card)
    
    // Cria elementos do html
    let outerDiv = document.createElement("div")
    outerDiv.className = "card"
    outerDiv.setAttribute("id", card.id);
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
    
    // Adiciona cor para tag
    if (card.tags[0].length != 0) {
        let tagOne = document.createTextNode(card.tags[0])
        let tagOneDiv = document.createElement("div")
        tagOneDiv.classList.add("tag-color", randomColor())
        
        tagOneDiv.appendChild(tagOne)
        tagRow.appendChild(tagOneDiv)
        tagRow.classList.add("tag-row")
    } 
    
    // Adiciona cor para tag
    if (card.tags[1].length != 0) {
        let tagTwo = document.createTextNode(card.tags[1])
        let tagTwoDiv = document.createElement("div")
        tagTwoDiv.classList.add("tag-color", randomColor())
        
        tagTwoDiv.appendChild(tagTwo)
        tagRow.appendChild(tagTwoDiv)
        tagRow.classList.add("tag-row")
    }
    
    outerDiv.appendChild(tagRow)  
    colBox.appendChild(outerDiv)  
    
    // Carrega cards para pode lancar modal e esperar eventos
    loadEditModal(outerDiv, card)
}

/**
 * Mapea todos os cards presentes no banco de dado na pagina do board
 */
api.get(`/${boarduuid}`).then(res => {
    for (let data of res.data) {
        createCard(data)
    }
})