const floorPath = document.querySelectorAll(".home-image path")
const counter = document.querySelectorAll(".counter")
// const counter = document.querySelector(".counter")
const btnCounterUp = document.querySelector(".counter-up")
const btnCounterDown = document.querySelector(".counter-down")
const modal = document.querySelector(".modal")
const modalCloseBtn = document.querySelector(".modal-close-button")
const btnPrimary = document.querySelector(".button-primary")

const zero = num => {
  if (num < 10) return num = "0" + num
  else return num.toString()
}
const arrow = (btn, sign, condition) => {
  btn.addEventListener('click', () => {
    if (eval(condition)) {
      sign === '+' ? currentFloor++ : currentFloor--
      for (let i = 0; i < counter.length; i++) {
        counter[i].textContent = zero(currentFloor)
      }
      // counter.textContent = zero(currentFloor)
      floorPath.forEach(floor => {
        floor.classList.contains("current-floor") && floor.classList.remove("current-floor")
        if (floor.dataset.floor === zero(currentFloor)) floor.classList.toggle("current-floor")
      })
    }
  })
}

const toggleModal = () => {
  modal.classList.toggle("is-open")
}

let currentFloor = 2

floorPath.forEach(floor => {
  floor.addEventListener('mouseover', e => {
    floorPath.forEach(floor => floor.classList.remove("current-floor"))
    for (let i = 0; i < counter.length; i++) {
      currentFloor = counter[i].textContent = e.target.dataset.floor
    }
    // currentFloor = counter.textContent = e.target.dataset.floor
  })
})
arrow(btnCounterUp, '+', 'currentFloor < 18')
arrow(btnCounterDown, '-', 'currentFloor > 2')

floorPath.forEach(floor => floor.addEventListener('click', toggleModal))
btnPrimary.addEventListener('click', toggleModal)
modalCloseBtn.addEventListener('click', toggleModal)