var socket = io();
socket.on('connect', function () {
    console.log('Connected to server.');

    socket.emit('createMessage', {
       from: 'derp',
       text: 'i do not want to'
    });
});
socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
   console.log('New message', message);
});