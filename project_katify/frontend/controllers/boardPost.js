/**
 * Descricao: Funcoes relacionadas a adicao de um board
 * Data: Outubro 2021
 * @version: 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */ 

import api from '../api.js'

// Elementos referente a adicao de um board na pagina
let workspaceInput = document.getElementsByClassName("form-add-board")[0]
let workspaceForm = document.getElementById("addBoard-form")

/**
 * Evento em submit para alterar o nome do workspace
 */
workspaceForm.addEventListener("submit", (event) => {
	event.preventDefault()
	if (!workspaceInput.value) {
		workspaceInput.innerHTML = "Não preenchido"
	}
	else {
		// Cria board
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

