const Color = {
    0: "color-pink",
    1: "color-purple",
    2: "color-teal",
    3: "color-blue"
}

function randomColor() {
    let index = Math.floor(Math.random() * 4)
    return Color[index]
}

export default randomColor