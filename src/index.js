
const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const port = process.env.PORT || 3000;

const publicDir = path.join(__dirname,'../public');
app.use(express.static(publicDir));


let count = 0;
io.on('connection',async (socket) => {

    console.log('Web socket connexion');
    socket.emit('counter',count);
    socket.on('increment',async () => {
          count++;
          io.emit('counter',count);
    });


})

server.listen(port,async () => {
    console.log(`Server is up on ${port} !!`);
})
