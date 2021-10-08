/*
 * Descricao: Arquivo que gera uma cor aleatória usada para as tags
 * Data: Outubro 2021
 * @version: 1.0
 * @author Beatriz Maia & Sophie Dilhon
 */ 


/**
 * Objeto com as possíveis cores
 * - pink
 * - purple
 * - teal
 * - blue
 */
const Color = {
    0: "color-pink",
    1: "color-purple",
    2: "color-teal",
    3: "color-blue"
}

/**
 * Gera um valor aleatório e escolhe uma cor
 * @returns {string} cor gerada
 */
function randomColor() {
    let index = Math.floor(Math.random() * 4)
    return Color[index]
}

export default randomColor