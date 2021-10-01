import api from './api.js'

const url = "http://localhost:3000"

let workspaceInput = document.getElementsByClassName("form-add-board")[0]
let workspaceForm = document.getElementById("addBoard-form")
let workspaceBtn = document.getElementsByClassName("addBoard-btn")[0]

workspaceForm.addEventListener("submit", (event) => {
	event.preventDefault()
	if (!workspaceInput.value) {
		workspaceInput.innerHTML = "Preenche aí"
	}
	else {
		api.post(`/`, { name: `${workspaceInput.value}` })
			.then(res => {
				document.getElementsByClassName("closeBoardModal")[0].click()
				window.location = document.URL + res.data.uuid
			})
			.catch(err => {
				alert(`Something went wrong: ${err}`)
			})
		return false;
	}

})

