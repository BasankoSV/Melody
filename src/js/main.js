const floorPath = document.querySelectorAll(".home-image path")
const counter = document.querySelector(".counter")
const btnCounterUp = document.querySelector(".counter-up")
const btnCounterDown = document.querySelector(".counter-down")

const zero = num => {
  if (num < 10) return num = "0" + num
  else return num.toString()
}
const arrow = (btn, sign, condition) => {
  btn.addEventListener('click', e => {
    if (eval(condition)) {
      sign === '+' ? currentFloor++ : currentFloor--
      counter.textContent = zero(currentFloor)
      floorPath.forEach(floor => {
        floor.classList.contains("current-floor") && floor.classList.remove("current-floor")
        if (floor.dataset.floor === zero(currentFloor)) floor.classList.toggle("current-floor")
      })
    }
  })
}

let currentFloor = 2
floorPath.forEach(floor => {
  floor.addEventListener('mouseover', e => {
    floorPath.forEach(floor => floor.classList.remove("current-floor"))
    currentFloor = counter.textContent = e.target.dataset.floor
  })
})
arrow(btnCounterUp, '+', 'currentFloor < 18')
arrow(btnCounterDown, '-', 'currentFloor > 2')