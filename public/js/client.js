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
  batteryPercent(battery);
});

function printMessage(message) {
  messageElement.textContent = message;
}

function batteryPercent(battery) {
  const percent = battery / 3.7 * 100;
  batteryLife(percent);
}

function batteryLife(percent) {
  batteryNumberElement.textContent = percent + "%";
  batteryProgressElement.style.width = percent + "%";
}

lightOff.addEventListener('click', () => {
  lightOn.classList.remove('btn-info', 'active');
  lightOn.classList.add('btn-outline-info');
  lightOff.classList.remove('btn-outline-info');
  lightOff.classList.add('btn-info', 'active');
});

lightOn.addEventListener('click', () => {
  lightOff.classList.remove('btn-info', 'active');
  lightOff.classList.add('btn-outline-info');
  lightOn.classList.remove('btn-outline-info');
  lightOn.classList.add('btn-info', 'active');
});
