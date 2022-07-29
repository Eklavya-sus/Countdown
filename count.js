const timeLeft = document.getElementById('time-left')


const birthday = new Date('05/06/2023')

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId

function countDown() {
  const today = new Date()
  const timeSpan = birthday - today
  
  console.log(timeSpan)


  const days = Math.floor(timeSpan / day)
  const hours = Math.floor((timeSpan % day) / hour)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)

  document.querySelector(".day").innerText = days
  document.querySelector(".hour").innerText = hours
  document.querySelector(".minute").innerText = minutes
  document.querySelector(".second").innerText = seconds
}

timerId = setInterval(countDown, second)


