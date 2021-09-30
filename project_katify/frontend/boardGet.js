import Events from './models/Events.js'
import Board from './models/Board.js'
import api from './api.js'

const url = "http://localhost:3000"

function createBoard(board) {
	let colBox = document.getElementsByClassName("home-board")[0]
	
	let colDiv = document.createElement("div")
	colDiv.classList.add("col")
	
	let outerDiv = document.createElement("div")
	outerDiv.classList.add("card", "d-flex")
	
	let innerDiv = document.createElement("div")
	innerDiv.className = "card-body"
	
	let cardTitle = document.createElement("h2")
	cardTitle.className = "boardTitle"
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

api.get('').then(res => {
	res.data.map((board) => {
		createBoard(board)
	})
})