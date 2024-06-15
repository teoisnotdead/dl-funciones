const container = document.querySelector('.container')
const blueBox = document.querySelector('#blue-box')
const redBox = document.querySelector('#red-box')
const greenBox = document.querySelector('#green-box')
const yellowBox = document.querySelector('#yellow-box')

const changeToBlack = (element) => {
  element.style.backgroundColor = 'black'
}

// addEventListener

container.addEventListener('click', (event) => {
  console.log('event.target', event.target)
})
