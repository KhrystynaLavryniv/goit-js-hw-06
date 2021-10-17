const fontSizeControl = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')


fontSizeControl.addEventListener('input', (event) => {
textRef.setAttribute('style', `font-size: ${event.target.value}px`)
})