import Events from './models/Events.js'
import Board from './models/Board.js'

const url = "http://localhost:3000"

fetch(url)
  .then(function(response) {
    response.json().then(function(data) {

    	data.map((board) => {
			var a = document.createElement('a')
			var linkText = document.createTextNode(board.name)
			a.appendChild(linkText)
			a.title = "Link"
			a.href = `http://localhost:8000/${board.uuid}`
			document.body.appendChild(a)

		})

    })
  })
  .catch(function(error){
    console.log("Something went wrong: can't connect to backend")
  })
