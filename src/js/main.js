const floorPath = document.querySelectorAll('.home-image path')
const counter = document.querySelectorAll('.counter')
const btnCounterUp = document.querySelector('.counter-up')
const btnCounterDown = document.querySelector('.counter-down')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal-close-button')
const btnPrimary = document.querySelector('.button-primary')
const flatsPath = document.querySelectorAll('.flats path')
const flatsLink = document.querySelectorAll('.flat-link')

const zero = num => {
  if (num < 10) return num = '0' + num
  else return num.toString()
}
const arrow = (btn, sign, condition) => {
  btn.addEventListener('click', () => {
    if (eval(condition)) {  //понимаю, не красиво использовать eval, но как сделать по другому, не знаю.
      sign === '+' ? currentFloor++ : currentFloor--
      for (let i = 0; i < counter.length; i++) {
        counter[i].textContent = zero(currentFloor)
      }
      floorPath.forEach(floor => {
        floor.classList.contains('current-floor') && floor.classList.remove('current-floor')
        if (floor.dataset.floor === zero(currentFloor)) floor.classList.toggle('current-floor')
      })
    }
  })
}

const toggleModal = () => {
  modal.classList.toggle('is-open')
}

let currentFloor = 2
let currentFlat = 40

floorPath.forEach(floor => {
  floor.addEventListener('mouseover', e => {
    floorPath.forEach(floor => floor.classList.remove('current-floor'))
    for (let i = 0; i < counter.length; i++) {
      currentFloor = counter[i].textContent = e.target.dataset.floor
    }
  })
})
arrow(btnCounterUp, '+', 'currentFloor < 18')
arrow(btnCounterDown, '-', 'currentFloor > 2')

floorPath.forEach(floor => floor.addEventListener('click', toggleModal))
btnPrimary.addEventListener('click', toggleModal)
modalCloseBtn.addEventListener('click', toggleModal)

// Всё работает, но мне не нравится как написал, коряво это...
// flatsLink.forEach(flat => flat.classList.remove('current-flat'))
// flatsPath.forEach(flat => flat.classList.remove('current-flat'))
const removeClass = element => {
  element.forEach(item => item.classList.remove('current-flat'))
}

flatsPath.forEach(flat => flat.addEventListener('mouseover', e => {
  removeClass(flatsLink)
  removeClass(flatsPath)
  currentFlat = e.target.dataset.flat
  for (let i = 0; i < flatsLink.length; i++) {
    if (flatsLink[i].dataset.flat === currentFlat) flatsLink[i].classList.add('current-flat')
  }
}))

flatsLink.forEach(flat => flat.addEventListener('mouseover', e => {
  removeClass(flatsLink)
  removeClass(flatsPath)
  currentFlat = e.target.dataset.flat
  for (let i = 0; i < flatsPath.length; i++) {
    if (flatsPath[i].dataset.flat === currentFlat) flatsPath[i].classList.add('current-flat')
  }
}))