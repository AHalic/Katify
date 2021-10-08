/*
 * Descricao: Funcoes relacionadas a atualizacao das informacoes de um board
 * Data: Outubro 2021
 * @version: 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */ 

import api from '../api.js'

// Valor uuid do board
const boarduuid = document.URL.split('/')[3]

// Elementos referentes ao Form de modificação do Board
let workspaceInput = document.getElementsByClassName("workspace-name")[0]
let workspaceForm = document.getElementById("workspace-name-form")

/**
 * Atualiza nome do workspace da pagina com o nome do board
 */
api.get('').then(res => {
	for (let board of res.data) {
		if (board.uuid === boarduuid) {
			document.getElementsByClassName("workspace-name")[0].value = board.name
			document.title = board.name
		}
	}

})

/**
 * Evento em submit (enter) para alterar o nome do workspace
 */
workspaceForm.addEventListener("submit", (event) => {
	event.preventDefault();
	api.patch(`/${boarduuid}`, { name: `${workspaceInput.value}` })
	return false;
})