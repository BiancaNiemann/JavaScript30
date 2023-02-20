const pressedArray = []
const secretCode = 'wesbos'

window.addEventListener('keyup', (e) => {
    pressedArray.push(e.key)
    pressedArray.splice(-secretCode.length - 1, pressedArray.length - secretCode.length)
    if (pressedArray.join('').includes(secretCode)){
        conrnify_add()
    }
    console.log(pressedArray)
})