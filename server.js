require('dotenv').config();

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
  console.log(`App running on localhost:${port}`);
});

// Connection
const WebSocket = require('ws');
const channel = process.env.DOMAIN;
const token = process.env.TOKEN;
const wsChannel = new WebSocket(channel);

// Send token when WebSocket connected
wsChannel.on('open', function open() {
  console.log('Connected to WebSocket!');
  wsChannel.send(`{"token":"${token}"}`);
  console.log('Token has been sendt');
});

io.on('connection', (socket) => {
  wsChannel.onmessage = function(event) {
    const data = JSON.parse(event.data);
    console.log(data);
    socket.emit('message', data);
  };
});
