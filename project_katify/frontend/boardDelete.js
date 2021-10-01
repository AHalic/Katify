import api from './api.js'

const boarduuid = document.URL.split('/')[3]
const url = `http://localhost:8000`

let deleteBtn = document.getElementsByClassName("delete-board")[0]

deleteBtn.addEventListener("click", (event) => {
    swal({
        text: "Are you sure you want to delete this board?",
        buttons: {cancel: "Oh no!", confirm: "Yes, please!"},
        className: "alert-content",
    }).then((value) => {
            if (value) {
                api.delete(`/${boarduuid}`, { uuid: `${boarduuid}` })
                    .then(res => {
                        window.location = url
                    })
                    .catch(err => {
                        alert(`Something went wrong: ${err}`)
                    })
                return false;
            }
        })
})