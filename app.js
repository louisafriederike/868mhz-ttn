var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
// var index = fs.readFileSync('index.html');
var server = http.createServer(app);
var port = 8000;

const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const sport = new SerialPort({ path: '/dev/ttyACM0', baudRate: 115200 })

const parser = sport.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)

server.listen(port, () => {
    console.log("Server is listening at port %d", port);
});

app.use(express.static(path.join(__dirname, "public")));


// var server = http.createServer(function(req, res){

//     res.writeHead(200, {'Content-Type':'text/html'});

//     res.end(index);

// });

var io = require('socket.io')(server);

io.on('connection', function(socket){

    parser.on('data', function(data) {    
        const msg = data.split(' ');
        console.log(msg[0], msg[1]);
        io.emit(msg[0], msg[1]);      
    }); 
    
    console.log('Node.js is listening :)');
    socket.on("hello", (arg, callback) => {
    console.log("hellohelo"); // "world"
    io.emit('world');

    }); 

    socket.on('chat message', (msg) => {
        console.log('[user]['+ socket.id + '][' + msg + ']');
    }); 

    socket.on('userposition', (msg) => {
        console.log('[user]['+ socket.id + '][position: ' + msg[0] + ',' + msg[1]+ ']');
        socket.to('expo').emit(socket.id, msg);
    }); 

    

});



// app.listen(5501);
