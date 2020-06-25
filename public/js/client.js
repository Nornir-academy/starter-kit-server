/*global io document*/
const socket = io.connect();
const messageElement = document.getElementById("hello-world");
const batteryNumberElement = document.getElementById("battery-number");
const batteryProgressElement = document.getElementById("battery-progress");
const lightOn = document.getElementById("lightOn");
const lightOff = document.getElementById("lightOff");

socket.on('message', (data) => {
  const message = data.RTW.STRING;
  const battery = data.RTW.BATTERY;
  printMessage(message);
  batteryLife(battery);
});

function printMessage(message) {
  messageElement.textContent = message;
}

function batteryLife(battery) {
  batteryNumberElement.textContent = batteryPercent(battery) + "%";
  batteryProgressElement.style.width = batteryPercent(battery) + "%";
}

function batteryPercent(battery) {
  return battery / 3.7 * 100;
}

lightOff.addEventListener('click', function() {
  lightOn.classList.remove('btn-info', 'active');
  lightOn.classList.add('btn-outline-info');
  this.classList.remove('btn-outline-info');
  this.classList.add('btn-info', 'active');
});

lightOn.addEventListener('click', function() {
  lightOff.classList.remove('btn-info', 'active');
  lightOff.classList.add('btn-outline-info');
  this.classList.remove('btn-outline-info');
  this.classList.add('btn-info', 'active');
});
