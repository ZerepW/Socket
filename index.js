var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function(client){
    console.log("Un nuevo cliente");
    client.on('sendmensaje', function(mensaje){
        console.log('Mensaje: ' + mensaje);
        io.emit('sendmensaje',mensaje); //vamos a enviar a todos
    });
    client.on('message', function(mensaje){
        console.log('Mensaje: ' + mensaje);
        io.emit('message',mensaje); //vamos a enviar a todos
    })
});

server.listen(3000);