import api from './api.js'

const url = "http://localhost:3000"
const boarduuid = document.URL.split('/')[3]

let workspaceInput = document.getElementsByClassName("workspace-name")[0]
let workspaceForm = document.getElementById("workspace-name-form")

api.get('').then(res => {
	let name;

	for (let board of res.data) {
		if (board.uuid === boarduuid) {
			document.getElementsByClassName("workspace-name")[0].value = board.name
			document.title = board.name
		}
	}

})

workspaceForm.addEventListener("submit", (event) => {
	event.preventDefault();
	api.patch(`/${boarduuid}`, { name: `${workspaceInput.value}` })
	return false;
})