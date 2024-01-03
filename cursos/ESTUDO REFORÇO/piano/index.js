const keys = document.querySelectorAll('.key')

const handleMouseDown = (key) => {
    if(key.className.includes('black')){
        key.classList.add('black--pressed')
        return
    }
    key.style.background = '#7A72CC'
    key.style.color = 'white'
}
const handleMouseUp = (key) => {
    if(key.className.includes('black')){
        key.classList.add('black--pressed')
        return
    }
    key.style.background = 'white'
    key.style.color = 'gray'
}

keys.forEach((key) => {
   key.addEventListener('mousedown', () => handleMouseDown(key))
   key.addEventListener('mouseup', () => handleMouseUp(key))

})