var http = require('http');
var ttn = require("ttn");
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
// var index = fs.readFileSync('index.html');
var server = http.createServer(app);
var port = 8000;
const bodyParser = require("body-parser");

// var appID = "node1-ttn"
// var accessKey = "C17447705E8DEDDC0392B683A0FB0643"

// ttn.data(appID, accessKey)
//   .then(function (client) {
//     client.on("uplink", function (devID, payload) {
//       console.log("Received uplink from ", devID)
//       console.log(payload)
//     })
//   })
//   .catch(function (error) {
//     console.error("Error", error)
//     process.exit(1)
//   })

// const { SerialPort } = require('serialport')
// const { ReadlineParser } = require('@serialport/parser-readline')
// const sport = new SerialPort({ path: '/dev/ttyACM0', baudRate: 115200 })

// const parser = sport.pipe(new ReadlineParser({ delimiter: '\r\n' }))
// parser.on('data', console.log)

// server.listen(port, () => {
//     console.log("Server is listening at port %d", port);
// });


var server = http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type':'text/html'});

    res.end(index);

});

// var io = require('socket.io')(server);

app.use(bodyParser.json());

app.post("/lorawan", (req, res) => {
    console.log(req.body) // Call your action on the request here
    res.status(200).end() // Responding is important
  });
  
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Server running on port ${port}`))
  


io.on('connection', function(socket){

    parser.on('data', function(data) {    
        const msg = data.split(' ');
        console.log(msg[0], msg[1]);
        io.emit(msg[0], msg[1]);      
    }); 
    
    console.log('Node.js is listening :)');
    socket.on("hello", (arg, callback) => {
    console.log("hello"); // "world"
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
