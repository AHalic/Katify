import api from '../api.js'
const boarduuid = document.URL.split('/')[3]

function deleteCard(id) {
    swal({
        text: "Are you sure you want to delete this board?",
        buttons: {cancel: "Oh no!", confirm: "Yes, please!"},
        className: "alert-content",
    }).then((value) => {
            if (value) {
                api.delete(`/${boarduuid}/${id}`)
                    .then(res => {
                        // window.location = url
                        document.getElementsByClassName("close-edit")[0].click()
                        document.getElementById(id).remove();
                    })
                    .catch(err => {
                        alert(`Something went wrong: ${err}`)
                    })
            }
        })
}

export default deleteCard