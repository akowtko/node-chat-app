var socket = io();
socket.on('connect', function () {
    console.log('Connected to server.');
});
socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function(message) {
    console.log('New message', message);
    const li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function(message) {
    const li = jQuery('<li></li>');
    const a = jQuery('<a target="_blank">My current location</a>');
    li.text(`${message.from}: `);
    a.attr('href', message.locationUrl);
    li.append(a);
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    const messageTextbox = jQuery('[name=message]');
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: messageTextbox.val()
    }, function () {
        messageTextbox.val('');
    })
});

const locationButton = jQuery('#send-location');
locationButton.on('click', function () {
    if (!navigator.geolocation) return alert('Geolocation not supported by your browser.');

    locationButton.attr('disabled', 'disabled').text('Sending location...');
    navigator.geolocation.watchPosition(function (position) {
        locationButton.removeAttr('disabled').text('Send location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function () {
        locationButton.removeAttr('disabled').text('Send location');
        alert('Unable to fetch location');
    });
});