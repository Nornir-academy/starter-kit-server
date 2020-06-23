require('dotenv').config()

const express = require('express')
const app = express()
const server = require("http").createServer(app)
const io = require('socket.io')(server);
const port = process.env.PORT || 3000

app.use(express.static(__dirname + "/public"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {console.log(`App running on localhost:${port}`)})

// Connection
const WebSocket = require('ws')
const channel = process.env.DOMAIN
const token = process.env.TOKEN
const ws_channel = new WebSocket(channel)

// Send token when WebSocket connected
ws_channel.on('open', function open() {
  console.log('Connected to WebSocket!')
  ws_channel.send('{"token":"'+token+'"}')
  console.log('Token has been sendt')
})

io.on('connection', (socket) => {
  ws_channel.onmessage = function(event){
    const data = JSON.parse(event.data)
    console.log(data)
    socket.emit('message', data)
  }
})
