/**
 * Descricao: Funcoes relacionadas a visualizacao das informacoes de um board
 * Data: Outubro 2021
 * @version: 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */ 

import api from '../api.js'

/**
 * Cria board para apresentar na pagina home
 * @param {*} board - 
 */
function createBoard(board) {
	// Create elements with boostrap elements

	let colBox = document.getElementsByClassName("home-board")[0]
	
	let colDiv = document.createElement("div")
	colDiv.classList.add("col", "col-3", "colBoard")
	
	let outerDiv = document.createElement("div")
	outerDiv.classList.add("card", "d-flex", "text-center")
	
	let innerDiv = document.createElement("div")
	innerDiv.className = "card-body"
	
	let cardTitle = document.createElement("h2")
	cardTitle.classList.add("boardTitle", "card-text", "mt-3")
	cardTitle.innerHTML = board.name
	
	innerDiv.appendChild(cardTitle)
	outerDiv.appendChild(innerDiv)
	
	let a = document.createElement('a')
	
	a.appendChild(outerDiv)
	a.title = `${board.name}`
	a.href = `http://localhost:8000/${board.uuid}`
	colDiv.appendChild(a)
	colBox.appendChild(colDiv)    
}

/**
 * Mapea todos os boards presentes no banco de dado e cria o board
 * na pagina inicial (home)
 */
api.get('').then(res => {
	res.data.map((board) => {
		createBoard(board)
	})
})