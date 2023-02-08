/*const buttonClick = document.getElementsByClassName("key")

for (let i = 0; i < buttonClick.length; i++){
    buttonClick[i].addEventListener('mousedown', ()=> {
        buttonClick[i].classList.add("playing")
    })
}

for (let i = 0; i < buttonClick.length; i++){
    buttonClick[i].addEventListener('mouseup', ()=> {
        buttonClick[i].classList.remove("playing")
    })
}*/


function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(!audio) return; //will stop function running altogether if nothing selected
    audio.currentTime = 0 //rewind to start so you can play key multiple times
    audio.play()

    key.classList.add('playing')
}

function removeTransition(e){
    if (e.propertyName !== 'transform') return //will skip if it is not a transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)