const url = "http://localhost:3000"
const boarduuid = document.URL.split('/')[3]

fetch(url)
	.then(function(response) {
		response.json().then(function(data) {
			let name;
            for (let board of data) {
				if (board.uuid === boarduuid) {
					document.getElementsByClassName("workspace-name")[0].value = board.name  //.innerHTML = board.name 
				}
			}
		})
	})
	.catch(function(error){
		console.log("Something went wrong: can't connect to backend")
	})


fetch(url + "/" + boarduuid)
	.then(function(response) {
		response.json().then(function(data) {
			console.log(data)
		})
	})
	.catch(function(error){
		console.log("Something went wrong: can't connect to backend")
	})