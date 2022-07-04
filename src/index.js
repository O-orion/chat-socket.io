//JESUS CRISTO É O SENHOR !!

const { Socket } = require('dgram');
const express = require('express');
const app = express();

const http = require('http');
const serve = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(serve)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});


io.on('connection', (socket) => {
    console.log('usuário conecntado!' + socket.id)
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg)
    })
    socket.on('disconnect', () => {
        console.log('Usuário desconectado')
    })

    
})


serve.listen(3000, () => {
    console.log('Serve on: porta 3000')
})


