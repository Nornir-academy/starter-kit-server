const socket = io.connect()

const messageElement = document.getElementById("hello-world")
const batteryNumberElement = document.getElementById("battery-number")
const batteryProgressElement = document.getElementById("battery-progress")

socket.on('message', (data) => {
  const message = data.RTW.STRING
  const battery = data.RTW.BATTERY
  printMessage(message)
  batteryLife(battery)
})

function printMessage(message) {
  messageElement.textContent = message
}

function batteryLife(battery) {
  batteryNumberElement.textContent = batteryPercent(battery)+"%"
  batteryProgressElement.style.width = batteryPercent(battery)+"%"
}

function batteryPercent(battery) {
  return battery / 3.7 * 100
}
