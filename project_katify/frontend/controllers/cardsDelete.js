/*
 * Descricao: Funcoes relacionadas a remocao de um card
 * Data: Outubro 2021
 * @version: 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */ 

import api from '../api.js'
const boarduuid = document.URL.split('/')[3]

/**
 * Função que remove o card após confirmação do alert
 * @param {int} id identificador do card
 */
function deleteCard(id) {
    swal({
        text: "Are you sure you want to delete this board?",
        buttons: {cancel: "Oh no!", confirm: "Yes, please!"},
        className: "alert-content",
    }).then((value) => {
            if (value) {
                // remove do banco de dados e do html
                api.delete(`/${boarduuid}/${id}`)
                    .then(res => {
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