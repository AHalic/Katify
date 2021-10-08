/*
 * Descricao: Funcoes relacionadas a remocao de um board
 * Data: Outubro 2021
 * @version: 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */ 

import api from '../api.js'

const url = `http://localhost:8000`

// Valor uuid do board
const boarduuid = document.URL.split('/')[3]

// Botão do html que ativa o evento de deletar o board
let deleteBtn = document.getElementsByClassName("delete-board")[0]

/**
 * Evento de remoção de board com pop-up de confirmacao
 */
deleteBtn.addEventListener("click", (event) => {
    swal({
        text: "Are you sure you want to delete this board?",
        buttons: {cancel: "Oh no!", confirm: "Yes, please!"},
        className: "alert-content",
    }).then((value) => {
            if (value) {
                // Chama api para remover board
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