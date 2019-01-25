const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '/../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.emit('newMessage', {
        from: 'me',
        text: 'hi there',
        createdAt: 123
    });
    socket.on('createMessage', (newMessage) => {
       console.log('Create message', newMessage);
    });
    socket.on('disconnect', () => {
       console.log('User disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started on port ${port}`)
});
